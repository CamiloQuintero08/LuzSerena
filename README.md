# Luz Serena

Luz Serena es un ecommerce de lámparas artesanales hechas a mano con materiales naturales como papel reciclado, hojas secas de bosque y bambú. El proyecto está desarrollado con Next.js y está enfocado en crear una experiencia visual cálida, moderna y minimalista, priorizando el diseño, la identidad de marca y la escalabilidad técnica.

La aplicación permite mostrar productos dinámicos desde una base de datos y está diseñada con una arquitectura preparada para evolucionar hacia un ecommerce completo con autenticación, carrito de compras y pasarela de pagos.

---

## Tecnologías utilizadas

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase
- Prisma ORM
- PostgreSQL (gestionado desde Supabase)

---

## Arquitectura del proyecto

El proyecto sigue una arquitectura moderna basada en:

- Server Components y Client Components con Next.js
- Separación clara entre lógica de servidor y presentación
- Base de datos PostgreSQL alojada en Supabase
- Prisma como ORM para modelado y consultas tipadas
- Organización modular por secciones (productos, contacto, nosotros)
- Preparado para escalabilidad y buenas prácticas de desarrollo fullstack

---

## Base de datos

La base de datos está implementada en Supabase utilizando PostgreSQL como motor principal.

Prisma se encarga de:

- Definir los modelos de datos
- Generar el cliente tipado
- Ejecutar migraciones
- Gestionar relaciones entre entidades
- Realizar consultas seguras desde el servidor

Ejemplo de modelo en `schema.prisma`:

```prisma
model Product {
  id          String   @id @default(uuid())
  name        String
  description String
  price       Float
  imageUrl    String
  createdAt   DateTime @default(now())
}
```

La conexión a la base de datos se realiza mediante la variable de entorno `DATABASE_URL`.

---

## Instalación del proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/luz-serena.git
cd luz-serena
```

2. Instalar dependencias

```bash
npm install
```

3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con:

```
DATABASE_URL="postgresql://usuario:password@host:puerto/database"
NEXT_PUBLIC_SUPABASE_URL="https://tu-proyecto.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu_clave_publica"
```

4. Ejecutar migraciones de Prisma

```bash
npx prisma migrate dev
```

5. Generar el cliente de Prisma

```bash
npx prisma generate
```

6. Levantar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:3000
```

---

## Funcionalidades actuales

- Página principal con diseño visual enfocado en branding
- Sección Nosotros
- Sección Productos conectada a base de datos
- Sección Contacto
- Integración con Supabase
- Prisma como capa de acceso a datos
- Arquitectura preparada para escalar a ecommerce completo

---

## Estructura del proyecto

```
app/
 ├── page.tsx
 ├── productos/
 ├── contacto/
 ├── nosotros/
 └── layout.tsx

prisma/
 └── schema.prisma

lib/
 └── prisma.ts

public/
 └── assets e imágenes
```

---

## Próximas mejoras

- Sistema de autenticación
- Carrito de compras
- Panel de administración
- Integración de pasarela de pagos
- Gestión de inventario
- Optimización SEO
- Implementación de roles de usuario
- Dashboard administrativo

---

## Objetivo del proyecto

Este proyecto forma parte del proceso de formación profesional como Frontend Developer, enfocándose en:

- Construcción de interfaces modernas y atractivas
- Integración con bases de datos reales
- Arquitectura escalable
- Buenas prácticas con TypeScript
- Uso de ORM en entornos reales
- Desarrollo de aplicaciones fullstack con fuerte enfoque visual

Luz Serena representa la combinación entre diseño, tecnología y artesanía, aplicando principios modernos de desarrollo web en un entorno ecommerce realista.

---

Desarrollado como proyecto para el emprendimiento de Luz Serena