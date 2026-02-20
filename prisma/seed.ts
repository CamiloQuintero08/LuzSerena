import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpia la tabla antes de sembrar
  await prisma.producto.deleteMany();

  await prisma.producto.createMany({
    data: [
      {
        nombre: "Lámpara de Mosaico",
        descripcion:
          "Vidrio artesanal en colores mediterráneos. Cada pieza es única gracias al trabajo manual de nuestros artesanos. Ideal para comedores y salas de estar.",
        precio: 70000,
        categoria: "Mosaico",
        imagenes: [
          "/images/Lamparas/Lampara01.jpg",
          "/images/Lamparas/Lampara02.jpg",
        ],
        tag: "Más vendido",
        stock: 5,
        activo: true,
      },
      {
        nombre: "Lámpara de Madera",
        descripcion:
          "Torno en madera maciza con acabado natural. Proceso artesanal de más de 20 horas. La madera es seleccionada y tratada sin químicos agresivos.",
        precio: 64000,
        categoria: "Madera",
        imagenes: [
          "/images/Lamparas/Lampara02.jpg",
          "/images/Lamparas/Lampara03.jpg",
        ],
        tag: null,
        stock: 8,
        activo: true,
      },
      {
        nombre: "Lámpara de Macramé",
        descripcion:
          "Tejido en algodón crudo, nudo a nudo. Técnica ancestral traída a diseños contemporáneos. Perfecta para dormitorios y espacios de lectura.",
        precio: 58000,
        categoria: "Macramé",
        imagenes: [
          "/images/Lamparas/Lampara03.jpg",
          "/images/Lamparas/Lampara01.jpg",
        ],
        tag: "Nuevo",
        stock: 10,
        activo: true,
      },
      {
        nombre: "Lámpara de Cerámica",
        descripcion:
          "Cerámica esmaltada a mano, cada pieza irrepetible. El proceso de horneado a alta temperatura garantiza durabilidad y un acabado único.",
        precio: 80000,
        categoria: "Cerámica",
        imagenes: [
          "/images/Lamparas/Lampara01.jpg",
          "/images/Lamparas/Lampara03.jpg",
        ],
        tag: null,
        stock: 4,
        activo: true,
      },
      {
        nombre: "Lámpara Mosaico Turca",
        descripcion:
          "Vidrio artesanal en colores mediterráneos vibrantes. Inspirada en la tradición otomana, proyecta patrones de luz únicos en cualquier espacio.",
        precio: 95000,
        categoria: "Mosaico",
        imagenes: [
          "/images/Lamparas/Lampara02.jpg",
          "/images/Lamparas/Lampara01.jpg",
        ],
        tag: "Premium",
        stock: 3,
        activo: true,
      },
      {
        nombre: "Lámpara de Mimbre",
        descripcion:
          "Mimbre natural trenzado a mano. Ideal para comedores con techos altos. Difunde una luz cálida y envolvente perfecta para ambientes acogedores.",
        precio: 67000,
        categoria: "Mimbre",
        imagenes: [
          "/images/Lamparas/Lampara03.jpg",
          "/images/Lamparas/Lampara02.jpg",
        ],
        tag: null,
        stock: 6,
        activo: true,
      },
    ],
  });

  console.log("✅ Base de datos poblada con 6 productos.");
}

main()
  .catch((e) => {
    console.error("❌ Error en el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });