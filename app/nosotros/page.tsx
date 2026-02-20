import Image from "next/image";
import CustomHeader from "../../components/layout/Header";
import CuatomFooter from "../../components/layout/Footer";

export default function Nosotros() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      <CustomHeader />

      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/backgroundNos.png"
          alt="Nuestro taller artesanal"
          fill
          priority
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
            style={{
              color: "rgba(212,165,88,0.9)",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Nuestra historia
          </p>
          <h1
            className="font-light leading-tight mb-4 text-[clamp(2.5rem,6vw,5rem)]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#fdf6ec",
              textShadow: "0 2px 30px rgba(0,0,0,0.3)",
            }}
          >
            Quiénes{" "}
            <em style={{ color: "#d4a558", fontStyle: "italic" }}>Somos</em>
          </h1>
          <div className="divider-ornament mb-5">
            <span style={{ color: "#d4a558" }}>✦</span>
          </div>
          <p
            className="text-[0.88rem] tracking-wide max-w-md mx-auto"
            style={{
              color: "rgba(253,246,236,0.75)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
            }}
          >
            Artesanos apasionados · Materiales nobles · Luz con alma
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 text-[#a87830]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Nuestra esencia
            </p>
            <h2
              className="font-light text-[clamp(2rem,4vw,3rem)] leading-tight mb-6 text-[#2a1a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Luz que nace de{" "}
              <em style={{ color: "#9b4c2e", fontStyle: "italic" }}>
                manos honestas
              </em>
            </h2>
            <div className="space-y-4 text-[0.88rem] leading-8 text-[#8a6850]">
              <p>
                En Luz Serena creemos que la iluminación no solo transforma
                espacios, sino también momentos. Cada lámpara nace con el
                propósito de decorar tu día y abrazar tu noche, creando
                ambientes cálidos que invitan al descanso, la conexión y la
                tranquilidad. 
              </p>
              <p>
                Nos inspira la naturaleza y su belleza imperfecta. Por eso,
                nuestras lámparas están hechas a mano con papel reciclado, hojas
                secas del bosque y bambú cuidadosamente seleccionado. Cada pieza
                es elaborada de forma artesanal, respetando los materiales y
                resaltando sus texturas únicas, logrando que ninguna lámpara sea
                igual a otra, así como tampoco lo es la luz que emiten.
              </p>
              <p>
                Trabajamos con dedicación, paciencia y amor por los detalles.
                Más que un producto, creamos objetos con alma, pensados para
                quienes valoran lo natural, lo auténtico y lo hecho a mano.
                Porque en Luz Serena, cada lámpara es una historia iluminada por
                la esencia de lo simple y lo verdadero.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[480px] overflow-hidden rounded-lg">
              <Image
                src="/images/contenido/Artesano.png"
                alt="Artesano trabajando"
                fill
                className="object-cover object-center"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 px-6 py-5 shadow-lg"
              style={{
                background: "#faf6f1",
                border: "1px solid rgba(107,62,40,0.15)",
              }}
            >
              <p
                className="text-[2rem] font-light text-[#9b4c2e] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1 año
              </p>
              <p
                className="text-[0.7rem] tracking-[0.15em] uppercase text-[#8a6850] mt-1"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                iluminando hogares
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y"
        style={{ background: "#e4d9cc", borderColor: "rgba(107,62,40,0.12)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p
              className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-none mb-2 text-[#9b4c2e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              20+
            </p>
            <p
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6850]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Piezas creadas
            </p>
          </div>

          <div>
            <p
              className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-none mb-2 text-[#9b4c2e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              10+
            </p>
            <p
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6850]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Clientes felices
            </p>
          </div>

          <div>
            <p
              className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-none mb-2 text-[#9b4c2e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              1
            </p>
            <p
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6850]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Año de experiencia
            </p>
          </div>

          <div>
            <p
              className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-none mb-2 text-[#9b4c2e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              1
            </p>
            <p
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6850]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Artesano en el equipo
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#f5efe6" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-[#a87830]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Lo que nos define
            </p>
            <h2
              className="font-light text-[clamp(1.8rem,4vw,3rem)] text-[#2a1a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Nuestros Valores
            </h2>
            <div className="divider-ornament mt-4">
              <span className="text-[#a87830]">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="card-hover flex gap-5 p-7 border"
              style={{
                background: "#faf6f1",
                borderColor: "rgba(107,62,40,0.13)",
              }}
            >
              <span className="text-[#a87830] flex-shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </span>
              <div>
                <h3
                  className="font-light text-[1.2rem] mb-2 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Pasión Artesanal
                </h3>
                <p className="text-[0.82rem] leading-7 text-[#8a6850]">
                  Cada lámpara nace de una profunda pasión por el oficio. No
                  hacemos productos en serie; creamos objetos con alma, donde
                  cada nudo, cada pincelada y cada curva cuenta una historia.
                </p>
              </div>
            </div>

            <div
              className="card-hover flex gap-5 p-7 border"
              style={{
                background: "#faf6f1",
                borderColor: "rgba(107,62,40,0.13)",
              }}
            >
              <span className="text-[#a87830] flex-shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </span>
              <div>
                <h3
                  className="font-light text-[1.2rem] mb-2 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Materiales Nobles
                </h3>
                <p className="text-[0.82rem] leading-7 text-[#8a6850]">
                  Trabajamos exclusivamente con materiales naturales: mimbre,
                  madera maciza, cerámica, algodón y vidrio. Nada artificial,
                  nada descartable. Todo pensado para durar generaciones.
                </p>
              </div>
            </div>

            <div
              className="card-hover flex gap-5 p-7 border"
              style={{
                background: "#faf6f1",
                borderColor: "rgba(107,62,40,0.13)",
              }}
            >
              <span className="text-[#a87830] flex-shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </span>
              <div>
                <h3
                  className="font-light text-[1.2rem] mb-2 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Pieza Única
                </h3>
                <p className="text-[0.82rem] leading-7 text-[#8a6850]">
                  Nunca encontrarás dos lámparas exactamente iguales. Esa
                  pequeña imperfección, ese tono irrepetible, es precisamente lo
                  que hace que tu lámpara sea solo tuya.
                </p>
              </div>
            </div>

            <div
              className="card-hover flex gap-5 p-7 border"
              style={{
                background: "#faf6f1",
                borderColor: "rgba(107,62,40,0.13)",
              }}
            >
              <span className="text-[#a87830] flex-shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </span>
              <div>
                <h3
                  className="font-light text-[1.2rem] mb-2 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Comunidad Local
                </h3>
                <p className="text-[0.82rem] leading-7 text-[#8a6850]">
                  Colaboramos con artesanos locales de distintas regiones del
                  país, apoyando el talento colombiano y preservando técnicas
                  ancestrales que de otra forma se perderían.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#ede4d8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-[#a87830]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Nuestro camino
            </p>
            <h2
              className="font-light text-[clamp(1.8rem,4vw,3rem)] text-[#2a1a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Una historia de luz
            </h2>
            <div className="divider-ornament mt-4">
              <span className="text-[#a87830]">✦</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute left-[28px] top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(168,120,48,0.4), transparent)",
              }}
            />

            <div className="space-y-10">
              <div className="flex gap-8 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center z-10"
                  style={{
                    background: "#faf6f1",
                    border: "1px solid rgba(168,120,48,0.35)",
                  }}
                >
                  <span
                    className="text-[0.75rem] font-medium text-[#a87830]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    20XX
                  </span>
                </div>
                <div className="flex-1 pb-2">
                  <h3
                    className="font-light text-[1.25rem] mb-2 text-[#2a1a0e]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    El comienzo
                  </h3>
                  <p className="text-[0.83rem] leading-7 text-[#8a6850]">
                    Aquí va el texto sobre cómo nació Luz Serena. Puedes contar
                    quién fundó el proyecto, cuál fue la motivación inicial,
                    dónde empezó todo.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center z-10"
                  style={{
                    background: "#faf6f1",
                    border: "1px solid rgba(168,120,48,0.35)",
                  }}
                >
                  <span
                    className="text-[0.75rem] font-medium text-[#a87830]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    20XX
                  </span>
                </div>
                <div className="flex-1 pb-2">
                  <h3
                    className="font-light text-[1.25rem] mb-2 text-[#2a1a0e]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Primer taller
                  </h3>
                  <p className="text-[0.83rem] leading-7 text-[#8a6850]">
                    Describe la apertura de tu primer espacio de trabajo.
                    Cuántos artesanos empezaron, qué materiales usaban, cuál fue
                    la primera pieza que vendieron.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center z-10"
                  style={{
                    background: "#faf6f1",
                    border: "1px solid rgba(168,120,48,0.35)",
                  }}
                >
                  <span
                    className="text-[0.75rem] font-medium text-[#a87830]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    20XX
                  </span>
                </div>
                <div className="flex-1 pb-2">
                  <h3
                    className="font-light text-[1.25rem] mb-2 text-[#2a1a0e]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Crecimiento
                  </h3>
                  <p className="text-[0.83rem] leading-7 text-[#8a6850]">
                    Aquí puedes hablar de un hito importante: un reconocimiento,
                    una feria artesanal, la incorporación de nuevas técnicas o
                    la ampliación del equipo.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center z-10"
                  style={{ background: "#9b4c2e", border: "1px solid #9b4c2e" }}
                >
                  <span
                    className="text-[0.75rem] font-medium text-[#fff8f0]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Hoy
                  </span>
                </div>
                <div className="flex-1 pb-2">
                  <h3
                    className="font-light text-[1.25rem] mb-2 text-[#2a1a0e]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Luz Serena hoy
                  </h3>
                  <p className="text-[0.83rem] leading-7 text-[#8a6850]">
                    ¿Dónde está Luz Serena hoy? Cuántas piezas han creado, a
                    cuántos hogares han llegado, qué proyectos tienen para el
                    futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#f5efe6" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-[#a87830]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Las manos detrás de la luz
            </p>
            <h2
              className="font-light text-[clamp(1.8rem,4vw,3rem)] text-[#2a1a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              La mente maestra
            </h2>
            <div className="divider-ornament mt-4">
              <span className="text-[#a87830]">✦</span>
            </div>
          </div>

          <div className="flex gap-8 justify-center items-center ">
            <div
              className="card-hover overflow-hidden border text-center max-w-120"
              style={{
                background: "#faf6f1",
                borderColor: "rgba(107,62,40,0.13)",
              }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/Contenido/Profile.jpeg"
                  alt="Nombre del Fundador"
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(42,26,14,0.35) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-light text-[1.2rem] mb-1 text-[#2a1a0e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Rolando Restrepo
                </h3>
                <p
                  className="text-[0.65rem] tracking-[0.18em] uppercase mb-4 text-[#a87830]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Fundador & Artesano Principal
                </p>
                <div
                  className="w-8 h-px mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #a87830, transparent)",
                  }}
                />
                <p className="text-[0.8rem] leading-7 text-[#8a6850]">
                  Una cabeza llena de ideas, ideas que toman vida a
                  travez de cada lampara, intentando llegar a cada corazon y hogar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═══════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6 text-center overflow-hidden"
        style={{ background: "#3d2b1f" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4a558 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p
            className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 text-[#a87830]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Únete a nuestra historia
          </p>
          <h2
            className="font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#fdf6ec",
            }}
          >
            ¿Listo para llevar{" "}
            <em style={{ color: "#d4a558", fontStyle: "italic" }}>
              luz artesanal
            </em>{" "}
            a tu hogar?
          </h2>
          <p
            className="text-[0.86rem] leading-8 mb-10"
            style={{
              color: "rgba(253,246,236,0.6)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
            }}
          >
            Explora nuestra colección o cuéntanos tu idea y creamos algo único
            para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/productos"
              className="btn-terra inline-block px-10 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Ver colección
            </a>
            <a
              href="/nosotros"
              className="inline-block px-10 py-3.5 text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-all duration-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                border: "1px solid rgba(253,246,236,0.25)",
                color: "rgba(253,246,236,0.8)",
              }}
            >
              Contactarnos
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <CuatomFooter />
    </div>
  );
}
