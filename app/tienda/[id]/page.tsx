"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CustomHeader from "../../../components/layout/Header";
import CustomFooter from "@/components/layout/Footer";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagenes: string[];
  tag: string | null;
  stock: number;
};

function formatPrice(n: number) {
  return "$ " + n.toLocaleString("es-CO");
}

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [imagenActiva, setImagenActiva] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/productos/${id}`)
      .then((res) => {
        if (!res.ok) { setNotFound(true); return null; }
        return res.json();
      })
      .then((data) => {
        if (data) setProducto(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  /* ── Loading skeleton ── */
  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
        <CustomHeader />
        <div className="max-w-5xl mx-auto px-6 pt-40 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-pulse">
            <div className="h-[480px]" style={{ background: "#e4d9cc" }} />
            <div className="flex gap-3 mt-3">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="w-20 h-20" style={{ background: "#e4d9cc" }} />
              ))}
            </div>
          </div>
          <div className="animate-pulse flex flex-col gap-4 pt-4">
            <div className="h-3 rounded" style={{ background: "#e4d9cc", width: "30%" }} />
            <div className="h-10 rounded" style={{ background: "#e4d9cc", width: "80%" }} />
            <div className="h-8 rounded" style={{ background: "#e4d9cc", width: "25%" }} />
            <div className="h-24 rounded" style={{ background: "#e4d9cc" }} />
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }

  /* ── Not found ── */
  if (notFound || !producto) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5efe6" }}>
        <CustomHeader />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-[5rem] font-light leading-none mb-4 text-[#e4d9cc]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            404
          </p>
          <h2
            className="font-light text-[2rem] mb-3 text-[#2a1a0e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Producto no encontrado
          </h2>
          <p className="text-[0.85rem] text-[#8a6850] mb-8">
            Es posible que esta lámpara ya no esté disponible.
          </p>
          <a href="/tienda" className="btn-terra px-8 py-3 text-[0.72rem] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Jost', sans-serif" }}>
            Ver toda la colección
          </a>
        </div>
        <CustomFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      <CustomHeader />

      {/* ══ BREADCRUMB ══════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-4">
        <p className="text-[0.68rem] tracking-[0.12em] text-[#b09070]"
          style={{ fontFamily: "'Jost', sans-serif" }}>
          <a href="/" className="hover:text-[#9b4c2e] transition-colors duration-200">Inicio</a>
          <span className="mx-2">·</span>
          <a href="/tienda" className="hover:text-[#9b4c2e] transition-colors duration-200">Tienda</a>
          <span className="mx-2">·</span>
          <span className="text-[#5a3820]">{producto.nombre}</span>
        </p>
      </div>

      {/* ══ CONTENIDO PRINCIPAL ═════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Galería de imágenes ── */}
        <div>
          {/* Imagen principal */}
          <div className="relative overflow-hidden" style={{ height: "480px" }}>
            <Image
              src={producto.imagenes[imagenActiva]}
              alt={producto.nombre}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
            {producto.tag && (
              <span
                className="absolute top-4 left-4 text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5 font-medium"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  background: producto.tag === "Premium" ? "#4a2e1e" : "#9b4c2e",
                  color: "#fff8f0",
                }}
              >
                {producto.tag}
              </span>
            )}
          </div>

          {/* Miniaturas */}
          {producto.imagenes.length > 1 && (
            <div className="flex gap-3 mt-3">
              {producto.imagenes.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImagenActiva(i)}
                  className="relative w-20 h-20 overflow-hidden flex-shrink-0 transition-all duration-200"
                  style={{
                    border: `2px solid ${imagenActiva === i ? "#9b4c2e" : "rgba(107,62,40,0.15)"}`,
                  }}
                >
                  <Image src={img} alt={`Vista ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info del producto ── */}
        <div className="flex flex-col gap-6 lg:pt-4">

          {/* Categoría */}
          <span
            className="text-[0.65rem] tracking-[0.25em] uppercase text-[#a87830]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {producto.categoria}
          </span>

          {/* Nombre */}
          <h1
            className="font-light text-[clamp(2rem,4vw,3rem)] leading-tight text-[#2a1a0e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {producto.nombre}
          </h1>

          {/* Precio */}
          <p
            className="text-[2rem] font-light text-[#9b4c2e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {formatPrice(producto.precio)}
          </p>

          {/* Divisor */}
          <div style={{ height: "1px", background: "rgba(107,62,40,0.15)" }} />

          {/* Descripción */}
          <p className="text-[0.88rem] leading-8 text-[#8a6850]">
            {producto.descripcion}
          </p>

          {/* Stock */}
          <p className="text-[0.72rem] tracking-[0.1em]"
            style={{ fontFamily: "'Jost', sans-serif", color: producto.stock > 0 ? "#7a8c5e" : "#b05050" }}>
            {producto.stock > 0
              ? `✓ Disponible — ${producto.stock} ${producto.stock === 1 ? "unidad" : "unidades"} en stock`
              : "✗ Sin stock — contáctanos para encargar una pieza"}
          </p>

          {/* Divisor */}
          <div style={{ height: "1px", background: "rgba(107,62,40,0.15)" }} />

          {/* Cantidad */}
          <div className="flex items-center gap-4">
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[#5a3820]"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Cantidad
            </p>
            <div className="flex items-center border"
              style={{ borderColor: "rgba(107,62,40,0.2)" }}>
              <button
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="w-9 h-9 flex items-center justify-center text-[#8a6850] transition-colors duration-200 hover:text-[#9b4c2e]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                −
              </button>
              <span
                className="w-10 text-center text-[0.88rem] text-[#2a1a0e]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                {cantidad}
              </span>
              <button
                onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))}
                className="w-9 h-9 flex items-center justify-center text-[#8a6850] transition-colors duration-200 hover:text-[#9b4c2e]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                +
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              disabled={producto.stock === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-all duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                background: addedToCart ? "#6b3e28" : producto.stock === 0 ? "#c4b09a" : "#9b4c2e",
                color: "#fff8f0",
                cursor: producto.stock === 0 ? "not-allowed" : "pointer",
              }}
            >
              {addedToCart ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Agregado al carrito!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  Agregar al carrito
                </>
              )}
            </button>

            <a
              href="/contacto"
              className="flex items-center justify-center px-6 py-3.5 text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                border: "1px solid rgba(107,62,40,0.25)",
                color: "#5a3820",
              }}
            >
              Pedir a medida
            </a>
          </div>

          {/* Detalles extra */}
          <div
            className="p-5 flex flex-col gap-3 mt-2"
            style={{ background: "#faf6f1", border: "1px solid rgba(107,62,40,0.1)" }}
          >
            {[
              { label: "Material",  value: producto.categoria },
              { label: "Proceso",   value: "100% hecho a mano" },
              { label: "Entrega",   value: "5 a 10 días hábiles" },
              { label: "Garantía",  value: "6 meses por defectos de fabricación" },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span
                  className="text-[0.65rem] tracking-[0.15em] uppercase w-24 flex-shrink-0 text-[#a87830]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {d.label}
                </span>
                <span className="text-[0.82rem] text-[#5a3820]"
                  style={{ fontFamily: "'Jost', sans-serif" }}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VOLVER A LA TIENDA ══════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <a
          href="/tienda"
          className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-[#8a6850] hover:text-[#9b4c2e] transition-colors duration-200"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver a la colección
        </a>
      </div>

      <CustomFooter />
    </div>
  );
}