/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ESTO ES LO MÁS IMPORTANTE
  images: {
    unoptimized: true, // <--- Agrega esto para evitar errores con imágenes
  },
};

module.exports = nextConfig; // O "export default nextConfig" si usas .mjs
