"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Inicio",         href: "/" },
  { label: "Productos",      href: "/productos" },
  { label: "Sobre Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(245, 239, 230, 0.96)"
          : "linear-gradient(180deg, rgba(42,26,14,0.6) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(107,62,40,0.15)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(74,46,30,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/LuzSerena.png"
            width={40}
            height={40}
            alt="Luz Serena"
            className="object-contain transition-transform duration-500 group-hover:rotate-12"
          />
          <span
            className="text-3xl font-light tracking-wide leading-none transition-colors duration-500"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: scrolled ? "#4a2e1e" : "#fdf6ec",
            }}
          >
            Luz Serena
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative text-[0.72rem] tracking-[0.2em] uppercase font-light group"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  color: scrolled ? "#5a3820" : "rgba(253,246,236,0.85)",
                  transition: "color 0.3s",
                }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: scrolled ? "#9b4c2e" : "#d4a558" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">

          <a
            href="/carrito"
            aria-label="Carrito"
            className="relative p-2 transition-colors duration-300 group"
            style={{ color: scrolled ? "#8a6850" : "rgba(253,246,236,0.7)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-colors duration-300 group-hover:text-[#9b4c2e]"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span
              className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[0.5rem] flex items-center justify-center font-medium"
              style={{ background: "#9b4c2e", color: "#fff" }}
            >
              0
            </span>
          </a>

          <a
            href="/auth"
            className="text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2 transition-all duration-300"
            style={{
              fontFamily: "'Jost', sans-serif",
              border: `1px solid ${scrolled ? "rgba(107,62,40,0.25)" : "rgba(253,246,236,0.35)"}`,
              color: scrolled ? "#5a3820" : "rgba(253,246,236,0.85)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = scrolled ? "rgba(155,76,46,0.08)" : "rgba(253,246,236,0.1)";
              e.currentTarget.style.borderColor = scrolled ? "#9b4c2e" : "rgba(253,246,236,0.7)";
              e.currentTarget.style.color = scrolled ? "#9b4c2e" : "#fdf6ec";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = scrolled ? "rgba(107,62,40,0.25)" : "rgba(253,246,236,0.35)";
              e.currentTarget.style.color = scrolled ? "#5a3820" : "rgba(253,246,236,0.85)";
            }}
          >
            Ingresar
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300"
              style={{
                width: i === 1 ? "14px" : "22px",
                background: scrolled ? "#6b3e28" : "rgba(253,246,236,0.85)",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translateY(7px)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translateY(-7px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? "360px" : "0px",
          background: "rgba(245,239,230,0.98)",
          borderTop: menuOpen ? "1px solid rgba(107,62,40,0.15)" : "none",
        }}
      >
        <ul className="flex flex-col px-8 py-7 gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[0.75rem] tracking-[0.2em] uppercase font-light text-[#5a3820] hover:text-[#9b4c2e] transition-colors duration-200"
                style={{ fontFamily: "'Jost', sans-serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3" style={{ borderTop: "1px solid rgba(107,62,40,0.15)" }}>
            <a
              href="/auth"
              className="text-[0.75rem] tracking-[0.2em] uppercase font-medium text-[#9b4c2e]"
              style={{ fontFamily: "'Jost', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              Ingresar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}