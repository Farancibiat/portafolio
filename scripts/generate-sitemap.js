const path = require('path');
// Asegúrate de que la ruta a AppRoutes sea correcta.
// Si src/routes.js está en el mismo nivel que la carpeta scripts, sería ../src/routes
const AppRoutes = require('../src/routes');

const SitemapGeneratorPackage = require('react-router-sitemap-generator');
const SitemapGenerator = SitemapGeneratorPackage.default || SitemapGeneratorPackage;

const baseUrl = 'https://www.farancibiat.cl';

// Las opciones ahora se pasan como el tercer argumento al constructor
const sitemapOptions = {
  lastmod: new Date().toISOString().slice(0, 10),
  changefreq: 'monthly',
  priority: '0.8',
  // La documentación de clh161 no menciona outputPath directamente en las opciones del constructor,
  // sino que el path de guardado se especifica en el método .save().
  // Tu código anterior usaba .generate() y un outputDir en un objeto 'config' que ya no se usa directamente.
  // Vamos a usar el método .save() como en el ejemplo de clh161 para mayor claridad.
};

const generator = new SitemapGenerator(
  baseUrl,
  AppRoutes(),      // Rutas de React ejecutadas
  sitemapOptions    // Opciones
);

// Usar el método .save() para especificar dónde guardar el archivo
generator.save(path.join(__dirname, '../public', 'sitemap.xml'));

console.log('Sitemap generado exitosamente en public/sitemap.xml'); 