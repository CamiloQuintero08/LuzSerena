export default function Footer() {
  return (
    <footer
        className="py-10 text-center border-t"
        style={{ background: "#3d2b1f", borderColor: "rgba(168,120,48,0.2)" }}
      >
        <p
          className="font-light text-2xl mb-1 text-[#d4a558]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Luz Serena
        </p>
        <p className="text-[0.72rem] tracking-[0.2em] text-[rgba(240,220,190,0.4)]">
          © 2026 · Lámparas Artesanales · Hecho con amor
        </p>
      </footer>
  );
}
