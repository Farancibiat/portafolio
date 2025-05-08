const React = require('react');
const { Route, Routes } = require('react-router-dom');

// En este archivo, solo necesitamos las definiciones de las rutas (paths)
// para que el generador de sitemap pueda leerlas.
// No es necesario importar los componentes de las páginas aquí.

const AppRoutes = () => (
  <Routes>
    <Route path="/" />
    <Route path="/experience" />
    <Route path="/projects" />
    <Route path="/contact" />
  </Routes>
);

module.exports = AppRoutes; 