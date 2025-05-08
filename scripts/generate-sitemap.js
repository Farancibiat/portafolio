const { SitemapGenerator } = require('react-router-sitemap-generator');
const path = require('path');

// Define tu URL base
const baseUrl = 'TU_URL_BASE'; // <--- REEMPLAZA ESTO!

// Define tus rutas
const paths = [
  '/',
  '/experience',
  '/projects',
  '/contact'
];

// Configuración del generador
const config = {
  baseUrl: baseUrl,
  paths: paths,
  ignorePaths: [], // Puedes añadir rutas a ignorar aquí si es necesario
  outputDir: path.join(__dirname, '../public'), // Guarda en la carpeta public
  changefreq: 'monthly', // Frecuencia de cambio estimada
  priority: '0.8',      // Prioridad general de las páginas
  prettify: true        // Formatea el XML para que sea legible
};

// Crear instancia y generar sitemap
const generator = new SitemapGenerator(config);
generator.generate();

console.log('Sitemap generado exitosamente en public/sitemap.xml'); 