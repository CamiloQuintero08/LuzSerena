import Image from "next/image";
import CustomHeader from "../components/layout/Header";
import CustomFooter from "@/components/layout/Footer";

const features = [
  {
    title: "Hechas a Mano",
    desc: "Calidad y detalle en cada pieza.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Materiales Naturales",
    desc: "Madera, vidrio, cerámica y fibras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Envío a Todo el País",
    desc: "Entrega segura y rápida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen isolate"
      style={{
        backgroundColor: "#f5efe6",
        backgroundImage: `
          radial-gradient(ellipse 100% 50% at 50% 0%,  rgba(168,120,48,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 0% 100%,  rgba(155,76,46,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 40% 35% at 100% 60%, rgba(74,46,30,0.04)  0%, transparent 55%)
        `,
      }}
    >
      <CustomHeader />

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative w-full h-[92vh] min-h-[580px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/backgroundV4.png"
          alt="Lámparas artesanales"
          fill priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background: "linear-gradient(135deg, rgba(42,26,14,0.72) 0%, rgba(74,46,30,0.55) 40%, rgba(42,26,14,0.3) 70%, transparent 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p
            className="text-[0.65rem] tracking-[0.38em] uppercase mb-5"
            style={{ color: "rgba(212,165,88,0.9)", fontFamily: "'Jost', sans-serif" }}
          >
            Colección Artesanal · 2026
          </p>
          <h1
            className="font-light leading-[1.08] mb-5 text-[clamp(3rem,8vw,6rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#fdf6ec",
              textShadow: "0 2px 30px rgba(0,0,0,0.3)",
            }}
          >
            Lámparas{" "}
            <em style={{ color: "#d4a558", fontStyle: "italic" }}>Artesanales</em>
          </h1>
          <p
            className="text-[0.9rem] tracking-[0.12em] mb-10 font-light"
            style={{ color: "rgba(253,246,236,0.75)", fontFamily: "'Jost', sans-serif" }}
          >
            Diseños únicos hechos a mano
          </p>
          <a
            href="/tienda"
            className="btn-terra px-10 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Ver Colección
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[rgba(212,165,88,0.7)]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══ FEATURES BAR ════════════════════════════════════════ */}
      <section
        className="border-y"
        style={{ background: "#e4d9cc", borderColor: "rgba(107,62,40,0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              {i > 0 && (
                <div
                  className="hidden md:block self-stretch w-px mr-2 flex-shrink-0"
                  style={{ background: "rgba(107,62,40,0.15)" }}
                />
              )}
              <span className="text-[#a87830] flex-shrink-0 mt-0.5">{f.icon}</span>
              <div>
                <p
                  className="text-[0.72rem] tracking-[0.18em] uppercase font-medium mb-1 text-[#2a1a0e]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {f.title}
                </p>
                <p className="text-[0.82rem] leading-6 text-[#8a6850]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ GALERÍA EDITORIAL ═══════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "#f5efe6" }}>
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <div className="text-center mb-16">
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-[#a87830]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Nuestras creaciones
            </p>
            <h2
              className="font-light text-[clamp(1.8rem,4vw,3rem)] mb-4 text-[#2a1a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Colección Destacada
            </h2>
            <div className="divider-ornament mb-4">
              <span className="text-[#a87830]">✦</span>
            </div>
            <p className="text-[0.85rem] tracking-wide text-[#8a6850]">
              Haz clic en cualquier pieza para ver todos los detalles
            </p>
          </div>

          {/* ── Layout editorial asimétrico ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Pieza grande — izquierda */}
            <a
              href="/tienda/1"
              className="lg:col-span-7 group relative overflow-hidden block"
              style={{ minHeight: "520px" }}
            >
              <Image
                src="/images/Lamparas/Lampara01.jpg"
                alt="Lámpara de Mosaico"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay siempre visible abajo */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(0deg, rgba(42,26,14,0.82) 0%, rgba(42,26,14,0.2) 45%, transparent 70%)",
                }}
              />
              {/* Tag categoría */}
              <span
                className="absolute top-5 left-5 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
              >
                Mosaico
              </span>
              {/* Info abajo */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="font-light text-[1.8rem] leading-tight mb-1 text-[#fdf6ec]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lámpara de Mosaico
                </h3>
                <p className="text-[0.78rem] leading-6 mb-4" style={{ color: "rgba(253,246,236,0.65)", fontFamily: "'Jost', sans-serif" }}>
                  Vidrio artesanal en colores mediterráneos. Luz cálida y envolvente.
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[1.2rem] text-[#d4a558]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    $ 70.000
                  </span>
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                  >
                    Ver detalle →
                  </span>
                </div>
              </div>
            </a>

            {/* Columna derecha — dos piezas apiladas */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* Pieza mediana arriba */}
              <a
                href="/tienda/2"
                className="group relative overflow-hidden block flex-1"
                style={{ minHeight: "250px" }}
              >
                <Image
                  src="/images/Lamparas/Lampara02.jpg"
                  alt="Lámpara de Madera"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(0deg, rgba(42,26,14,0.80) 0%, rgba(42,26,14,0.1) 50%, transparent 75%)",
                  }}
                />
                <span
                  className="absolute top-4 left-4 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                  style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
                >
                  Madera
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-light text-[1.4rem] leading-tight mb-1 text-[#fdf6ec]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Lámpara de Madera
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[1rem] text-[#d4a558]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      $ 64.000
                    </span>
                    <span
                      className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                    >
                      Ver detalle →
                    </span>
                  </div>
                </div>
              </a>

              {/* Pieza mediana abajo */}
              <a
                href="/tienda/3"
                className="group relative overflow-hidden block flex-1"
                style={{ minHeight: "250px" }}
              >
                <Image
                  src="/images/Lamparas/Lampara03.jpg"
                  alt="Lámpara de Macramé"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(0deg, rgba(42,26,14,0.80) 0%, rgba(42,26,14,0.1) 50%, transparent 75%)",
                  }}
                />
                <span
                  className="absolute top-4 left-4 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                  style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
                >
                  Macramé
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-light text-[1.4rem] leading-tight mb-1 text-[#fdf6ec]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Lámpara de Macramé
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[1rem] text-[#d4a558]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      $ 58.000
                    </span>
                    <span
                      className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                    >
                      Ver detalle →
                    </span>
                  </div>
                </div>
              </a>

            </div>

            {/* Fila inferior — tres piezas iguales */}
            <a
              href="/tienda/4"
              className="lg:col-span-4 group relative overflow-hidden block"
              style={{ minHeight: "300px" }}
            >
              <Image
                src="/images/Lamparas/Lampara01.jpg"
                alt="Lámpara de Cerámica"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(42,26,14,0.82) 0%, transparent 60%)" }}
              />
              <span
                className="absolute top-4 left-4 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
              >
                Cerámica
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="font-light text-[1.3rem] mb-1 text-[#fdf6ec]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lámpara de Cerámica
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[1rem] text-[#d4a558]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    $ 80.000
                  </span>
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 border opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                  >
                    Ver detalle →
                  </span>
                </div>
              </div>
            </a>

            <a
              href="/tienda/5"
              className="lg:col-span-4 group relative overflow-hidden block"
              style={{ minHeight: "300px" }}
            >
              <Image
                src="/images/Lamparas/Lampara02.jpg"
                alt="Lámpara Mimbre"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(42,26,14,0.82) 0%, transparent 60%)" }}
              />
              <span
                className="absolute top-4 left-4 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
              >
                Mimbre
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="font-light text-[1.3rem] mb-1 text-[#fdf6ec]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lámpara de Mimbre
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[1rem] text-[#d4a558]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    $ 67.000
                  </span>
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 border opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                  >
                    Ver detalle →
                  </span>
                </div>
              </div>
            </a>

            <a
              href="/tienda/6"
              className="lg:col-span-4 group relative overflow-hidden block"
              style={{ minHeight: "300px" }}
            >
              <Image
                src="/images/Lamparas/Lampara03.jpg"
                alt="Lámpara Mosaico Turca"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(42,26,14,0.82) 0%, transparent 60%)" }}
              />
              <span
                className="absolute top-4 left-4 text-[0.58rem] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{ background: "rgba(42,26,14,0.6)", color: "#d4a558", fontFamily: "'Jost', sans-serif", backdropFilter: "blur(4px)" }}
              >
                Mosaico
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="font-light text-[1.3rem] mb-1 text-[#fdf6ec]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Lámpara Mosaico Turca
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[1rem] text-[#d4a558]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    $ 95.000
                  </span>
                  <span
                    className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 border opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: "#fdf6ec", borderColor: "rgba(253,246,236,0.4)", fontFamily: "'Jost', sans-serif" }}
                  >
                    Ver detalle →
                  </span>
                </div>
              </div>
            </a>

          </div>

          {/* CTA ver todo */}
          <div className="text-center mt-12">
            <a
              href="/tienda"
              className="btn-outline-warm px-8 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Ver toda la colección
            </a>
          </div>
        </div>
      </section>

      {/* ══ SPLIT — Artesanía con Luz ════════════════════════════ */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]"
        style={{ background: "#ede4d8" }}
      >
        <div className="flex flex-col justify-center px-10 py-20 lg:px-20">
          <p
            className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 text-[#a87830]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Nuestra historia
          </p>
          <h2
            className="font-light text-[clamp(2rem,4vw,3rem)] leading-tight mb-6 text-[#2a1a0e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Artesanía con<br />
            <em style={{ color: "#9b4c2e", fontStyle: "italic" }}>Luz y Estilo</em>
          </h2>
          <p className="text-[0.88rem] leading-8 mb-6 text-[#8a6850]">
            Lámparas únicas para iluminar tus espacios con encanto. Cada pieza nace
            de un proceso manual de muchas horas de trabajo. Sin moldes, sin series,
            sin repetición.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#9b4c2e]" />
              <div>
                <p className="text-[0.78rem] tracking-[0.1em] uppercase font-medium mb-0.5 text-[#2a1a0e]"
                  style={{ fontFamily: "'Jost', sans-serif" }}>
                  Diseños Exclusivos
                </p>
                <p className="text-[0.8rem] leading-6 text-[#8a6850]">Creaciones originales hechas a mano.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#9b4c2e]" />
              <div>
                <p className="text-[0.78rem] tracking-[0.1em] uppercase font-medium mb-0.5 text-[#2a1a0e]"
                  style={{ fontFamily: "'Jost', sans-serif" }}>
                  Ilumina tus Espacios
                </p>
                <p className="text-[0.8rem] leading-6 text-[#8a6850]">Dale calidez y personalidad a tu hogar.</p>
              </div>
            </div>
          </div>
          <a
            href="/nosotros"
            className="btn-terra self-start px-8 py-3 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Conoce nuestra historia
          </a>
        </div>

        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/Lamparas/Lampara01.jpg"
            alt="Taller artesanal"
            fill className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(237,228,216,0.3) 0%, transparent 40%)" }}
          />
        </div>
      </section>

      <CustomFooter />
    </div>
  );
}