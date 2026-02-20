"use client";

import { useState } from "react";
import Image from "next/image";
import CustomHeader from "../../components/layout/Header";
import CustomFooter from "../../components/layout/Footer";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      <CustomHeader />

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/BackgroundContact.png"
          alt="Contáctanos"
          fill priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(42,26,14,0.5) 0%, rgba(42,26,14,0.65) 55%, rgba(245,239,230,1) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 pb-10">
          <p
            className="text-[0.65rem] tracking-[0.38em] uppercase mb-4"
            style={{ color: "rgba(212,165,88,0.9)", fontFamily: "'Jost', sans-serif" }}
          >
            Estamos para ti
          </p>
          <h1
            className="font-light leading-tight mb-4 text-[clamp(2.5rem,6vw,5rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#fdf6ec",
              textShadow: "0 2px 30px rgba(0,0,0,0.3)",
            }}
          >
            Hablemos de{" "}
            <em style={{ color: "#d4a558", fontStyle: "italic" }}>tu luz</em>
          </h1>
          <div className="divider-ornament mb-5">
            <span style={{ color: "#d4a558" }}>✦</span>
          </div>
          <p
            className="text-[0.88rem] tracking-wide max-w-md mx-auto"
            style={{ color: "rgba(253,246,236,0.75)", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Pedidos personalizados · Consultas · Envíos · Colaboraciones
          </p>
        </div>
      </section>

      {/* ══ CONTENIDO PRINCIPAL ═════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── Info de contacto (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            <div>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 text-[#a87830]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Información
              </p>
              <h2
                className="font-light text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-5 text-[#2a1a0e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ¿Cómo podemos <em style={{ color: "#9b4c2e", fontStyle: "italic" }}>ayudarte?</em>
              </h2>
              <p className="text-[0.85rem] leading-8 text-[#8a6850]">
                Ya sea que tengas una pregunta sobre un producto, quieras encargar
                una pieza personalizada o simplemente desees conocer más sobre
                nuestro proceso, estamos aquí para escucharte.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-6">

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5 text-[#a87830]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-1 text-[#2a1a0e]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    Ubicación
                  </p>
                  <p className="text-[0.83rem] leading-6 text-[#8a6850]">
                    Ciudad, País<br />
                    Dirección del taller
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5 text-[#a87830]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-1 text-[#2a1a0e]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    Teléfono / WhatsApp
                  </p>
                  <p className="text-[0.83rem] leading-6 text-[#8a6850]">
                    +57 000 000 0000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5 text-[#a87830]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-1 text-[#2a1a0e]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    Correo electrónico
                  </p>
                  <p className="text-[0.83rem] leading-6 text-[#8a6850]">
                    hola@luzserena.com
                  </p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5 text-[#a87830]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-1 text-[#2a1a0e]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    Horario de atención
                  </p>
                  <p className="text-[0.83rem] leading-6 text-[#8a6850]">
                    Lunes a Viernes: 8am – 6pm<br />
                    Sábados: 9am – 2pm
                  </p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase font-medium mb-4 text-[#2a1a0e]"
                style={{ fontFamily: "'Jost', sans-serif" }}>
                Síguenos
              </p>
              <div className="flex gap-3">
                {/* Instagram */}
                <a href="#" aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[#9b4c2e] hover:text-[#9b4c2e]"
                  style={{ borderColor: "rgba(107,62,40,0.2)", color: "#8a6850" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook"
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[#9b4c2e] hover:text-[#9b4c2e]"
                  style={{ borderColor: "rgba(107,62,40,0.2)", color: "#8a6850" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a href="#" aria-label="Pinterest"
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[#9b4c2e] hover:text-[#9b4c2e]"
                  style={{ borderColor: "rgba(107,62,40,0.2)", color: "#8a6850" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Formulario (3/5) ── */}
          <div className="lg:col-span-3">
            {sent ? (
              /* Mensaje de éxito */
              <div
                className="h-full flex flex-col items-center justify-center text-center px-10 py-20 border"
                style={{ background: "#faf6f1", borderColor: "rgba(107,62,40,0.13)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ background: "rgba(155,76,46,0.08)", border: "1px solid rgba(155,76,46,0.2)" }}>
                  <svg className="w-7 h-7 text-[#9b4c2e]" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-light text-[2rem] mb-3 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[0.85rem] leading-7 text-[#8a6850] max-w-sm">
                  Gracias por escribirnos. Nos pondremos en contacto contigo
                  muy pronto.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline-warm mt-8 px-8 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              /* Formulario */
              <form
                onSubmit={handleSubmit}
                className="p-10 border flex flex-col gap-6"
                style={{ background: "#faf6f1", borderColor: "rgba(107,62,40,0.13)" }}
              >
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-1 text-[#a87830]"
                    style={{ fontFamily: "'Jost', sans-serif" }}>
                    Cuéntanos
                  </p>
                  <h3 className="font-light text-[1.8rem] text-[#2a1a0e]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Escríbenos un mensaje
                  </h3>
                </div>

                {/* Nombre + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.68rem] tracking-[0.15em] uppercase text-[#5a3820]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="px-4 py-3 text-[0.85rem] outline-none transition-all duration-300"
                      style={{
                        background: "#f5efe6",
                        border: "1px solid rgba(107,62,40,0.18)",
                        color: "#2a1a0e",
                        fontFamily: "'Jost', sans-serif",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#9b4c2e")}
                      onBlur={e => (e.target.style.borderColor = "rgba(107,62,40,0.18)")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.68rem] tracking-[0.15em] uppercase text-[#5a3820]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      htmlFor="email"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className="px-4 py-3 text-[0.85rem] outline-none transition-all duration-300"
                      style={{
                        background: "#f5efe6",
                        border: "1px solid rgba(107,62,40,0.18)",
                        color: "#2a1a0e",
                        fontFamily: "'Jost', sans-serif",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#9b4c2e")}
                      onBlur={e => (e.target.style.borderColor = "rgba(107,62,40,0.18)")}
                    />
                  </div>
                </div>

                {/* Teléfono + Asunto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.68rem] tracking-[0.15em] uppercase text-[#5a3820]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      htmlFor="telefono"
                    >
                      Teléfono <span className="text-[#b09070] normal-case tracking-normal">(opcional)</span>
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="+57 000 000 0000"
                      className="px-4 py-3 text-[0.85rem] outline-none transition-all duration-300"
                      style={{
                        background: "#f5efe6",
                        border: "1px solid rgba(107,62,40,0.18)",
                        color: "#2a1a0e",
                        fontFamily: "'Jost', sans-serif",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#9b4c2e")}
                      onBlur={e => (e.target.style.borderColor = "rgba(107,62,40,0.18)")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.68rem] tracking-[0.15em] uppercase text-[#5a3820]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                      htmlFor="asunto"
                    >
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      required
                      className="px-4 py-3 text-[0.85rem] outline-none transition-all duration-300 cursor-pointer"
                      style={{
                        background: "#f5efe6",
                        border: "1px solid rgba(107,62,40,0.18)",
                        color: "#2a1a0e",
                        fontFamily: "'Jost', sans-serif",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#9b4c2e")}
                      onBlur={e => (e.target.style.borderColor = "rgba(107,62,40,0.18)")}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="pedido">Pedido personalizado</option>
                      <option value="producto">Consulta sobre un producto</option>
                      <option value="envio">Información de envíos</option>
                      <option value="colaboracion">Colaboración</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[0.68rem] tracking-[0.15em] uppercase text-[#5a3820]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                    htmlFor="mensaje"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte, qué tipo de lámpara buscas, para qué espacio es, tus colores preferidos..."
                    className="px-4 py-3 text-[0.85rem] outline-none transition-all duration-300 resize-none"
                    style={{
                      background: "#f5efe6",
                      border: "1px solid rgba(107,62,40,0.18)",
                      color: "#2a1a0e",
                      fontFamily: "'Jost', sans-serif",
                    }}
                    onFocus={e => (e.target.style.borderColor = "#9b4c2e")}
                    onBlur={e => (e.target.style.borderColor = "rgba(107,62,40,0.18)")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-terra self-start px-10 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ MAPA / BANNER TALLER ════════════════════════════════ */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(107,62,40,0.12)", background: "#ede4d8" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="flex flex-col items-center gap-3">
            <span className="text-[#a87830]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[#2a1a0e] font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Tiempo de respuesta
            </p>
            <p className="text-[0.83rem] leading-6 text-[#8a6850]">
              Respondemos en menos de 24 horas hábiles
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[#a87830]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </span>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[#2a1a0e] font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Envíos a todo el país
            </p>
            <p className="text-[0.83rem] leading-6 text-[#8a6850]">
              Embalaje especial para proteger cada pieza durante el transporte
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[#a87830]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </span>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[#2a1a0e] font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Pedidos personalizados
            </p>
            <p className="text-[0.83rem] leading-6 text-[#8a6850]">
              Creamos tu lámpara a medida según tus ideas y el espacio donde irá
            </p>
          </div>

        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <CustomFooter />
    </div>
  );
}