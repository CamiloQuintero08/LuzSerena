"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CustomHeader from "../../components/layout/Header";
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

const sortOptions = [
  { label: "Destacados",   value: "default" },
  { label: "Menor precio", value: "asc" },
  { label: "Mayor precio", value: "desc" },
  { label: "Nombre A–Z",   value: "az" },
];

function formatPrice(n: number) {
  return "$ " + n.toLocaleString("es-CO");
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}

export default function Tienda() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    "Todos",
    ...Array.from(new Set(productos.map((p) => p.categoria))),
  ];

  const filtered = productos
    .filter((p) => activeCategory === "Todos" || p.categoria === activeCategory)
    .sort((a, b) => {
      if (sortBy === "asc")  return a.precio - b.precio;
      if (sortBy === "desc") return b.precio - a.precio;
      if (sortBy === "az")   return a.nombre.localeCompare(b.nombre);
      return a.id - b.id;
    });

  const toggleWishlist = (id: number) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 1800);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      <CustomHeader />

      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-tienda.jpg"
          alt="Colección de lámparas artesanales"
          fill priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background: "linear-gradient(180deg, rgba(42,26,14,0.55) 0%, rgba(42,26,14,0.65) 55%, rgba(245,239,230,1) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 pb-10">
          <p
            className="text-[0.65rem] tracking-[0.38em] uppercase mb-4"
            style={{ color: "rgba(212,165,88,0.9)", fontFamily: "'Jost', sans-serif" }}
          >
            Luz Serena · 2026
          </p>
          <h1
            className="font-light leading-tight mb-4 text-[clamp(2.5rem,6vw,5rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#fdf6ec",
              textShadow: "0 2px 30px rgba(0,0,0,0.3)",
            }}
          >
            Nuestra{" "}
            <em style={{ color: "#d4a558", fontStyle: "italic" }}>Colección</em>
          </h1>
          <div className="divider-ornament mb-5">
            <span style={{ color: "#d4a558" }}>✦</span>
          </div>
          <p
            className="text-[0.88rem] tracking-wide max-w-md mx-auto"
            style={{ color: "rgba(253,246,236,0.75)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            {loading
              ? "Cargando colección..."
              : `${productos.length} piezas únicas · Hechas a mano · Envío a todo el país`}
          </p>
        </div>
      </section>

      <section
        className="sticky top-[72px] z-40 px-6 py-4 border-b"
        style={{
          background: "rgba(245,239,230,0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(107,62,40,0.12)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-[0.68rem] tracking-[0.15em] uppercase transition-all duration-200"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  background: activeCategory === cat ? "#9b4c2e" : "transparent",
                  color: activeCategory === cat ? "#fff8f0" : "#8a6850",
                  border: `1px solid ${activeCategory === cat ? "#9b4c2e" : "rgba(107,62,40,0.2)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[0.72rem] text-[#b09070]"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              {filtered.length} {filtered.length === 1 ? "pieza" : "piezas"}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[0.68rem] tracking-[0.1em] px-3 py-1.5 border outline-none cursor-pointer"
              style={{
                fontFamily: "'Jost', sans-serif",
                background: "#faf6f1",
                color: "#5a3820",
                borderColor: "rgba(107,62,40,0.2)",
              }}
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {loading ? (
          /* Skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border animate-pulse"
                style={{ background: "#faf6f1", borderColor: "rgba(107,62,40,0.13)" }}>
                <div className="h-64" style={{ background: "#e4d9cc" }} />
                <div className="p-5 flex flex-col gap-3">
                  <div className="h-3 rounded" style={{ background: "#e4d9cc", width: "40%" }} />
                  <div className="h-4 rounded" style={{ background: "#e4d9cc", width: "80%" }} />
                  <div className="h-3 rounded" style={{ background: "#e4d9cc", width: "65%" }} />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-[2rem] font-light mb-3 text-[#c4b09a]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Sin resultados
            </p>
            <p className="text-[0.82rem] text-[#b09070]">
              No hay productos en esta categoría por el momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="card-hover group flex flex-col overflow-hidden border"
                style={{ background: "#faf6f1", borderColor: "rgba(107,62,40,0.13)" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.imagenes[0]} alt={p.nombre} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.tag && (
                    <span
                      className="absolute top-3 left-3 text-[0.58rem] tracking-[0.15em] uppercase px-2.5 py-1 font-medium"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        background: p.tag === "Premium" ? "#4a2e1e" : "#9b4c2e",
                        color: "#fff8f0",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                    style={{ background: "rgba(245,239,230,0.92)", backdropFilter: "blur(4px)" }}
                    aria-label="Guardar"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24"
                      fill={wishlist.includes(p.id) ? "#9b4c2e" : "none"}
                      stroke={wishlist.includes(p.id) ? "#9b4c2e" : "#8a6850"}
                      strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                    style={{ background: "linear-gradient(0deg, rgba(42,26,14,0.55) 0%, transparent 55%)" }}
                  >
                    <a
                      href={`/tienda/${p.id}`}
                      className="text-[0.6rem] tracking-[0.18em] uppercase py-1.5 px-4 border"
                      style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.45)", fontFamily: "'Jost', sans-serif" }}
                    >
                      Ver detalle
                    </a>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[0.58rem] tracking-[0.2em] uppercase mb-1.5 text-[#a87830]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    {p.categoria}
                  </span>
                  <h3 className="font-light text-[1.05rem] mb-1.5 text-[#2a1a0e] leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {p.nombre}
                  </h3>
                  <p className="text-[0.76rem] leading-6 text-[#8a6850] mb-4 flex-1 line-clamp-2">
                    {p.descripcion}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4"
                    style={{ borderTop: "1px solid rgba(107,62,40,0.1)" }}>
                    <span className="text-[1.05rem] tracking-wide text-[#9b4c2e]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {formatPrice(p.precio)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(p.id)}
                      className="flex items-center gap-2 px-3 py-2 text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-250"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        background: addedToCart === p.id ? "#6b3e28" : "#9b4c2e",
                        color: "#fff8f0",
                      }}
                    >
                      {addedToCart === p.id ? (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Agregado
                        </>
                      ) : (
                        <>
                          <CartIcon />
                          Agregar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section
        className="mx-6 mb-20 px-10 py-16 text-center"
        style={{ background: "linear-gradient(135deg, #4a2e1e 0%, #6b3e28 100%)" }}
      >
        <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-[#a87830]"
          style={{ fontFamily: "'Jost', sans-serif" }}>
          ¿No encuentras lo que buscas?
        </p>
        <h2 className="font-light text-[clamp(1.8rem,4vw,3rem)] mb-4 text-[#fdf6ec]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Creamos tu lámpara a{" "}
          <em style={{ color: "#d4a558", fontStyle: "italic" }}>medida</em>
        </h2>
        <p className="text-[0.84rem] mb-8 max-w-sm mx-auto leading-7"
          style={{ color: "rgba(253,246,236,0.65)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
          Cuéntanos tu idea y nuestros artesanos la harán realidad.
        </p>
        <a href="/contacto"
          className="btn-terra inline-block px-10 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
          style={{ fontFamily: "'Jost', sans-serif", background: "#a87830" }}>
          Solicitar pedido personalizado
        </a>
      </section>

      <CustomFooter />
    </div>
  );
}