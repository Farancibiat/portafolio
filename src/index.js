import React from 'react';
import { createRoot } from 'react-dom/client';
import { routes } from './js/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import injectContext from './js/store/appContext';

// Definir las futuras opciones que queremos habilitar
const futureOptions = {
  v7_startTransition: true,
  v7_relativeSplatPath: true
};

// Crear el router con las rutas definidas en layout.js
const router = createBrowserRouter(routes, {
  basename: process.env.BASENAME || "",
  future: futureOptions
});

// Crear un componente contenedor para el RouterProvider y aplicarle el contexto
const AppWithRouter = () => {
  return (
    <RouterProvider 
      router={router} 
      future={futureOptions}
    />
  );
};

// Aplicar el contexto al componente contenedor
const AppWithContext = injectContext(AppWithRouter);

const renderApp = () => {
  // Usar el nuevo método createRoot de React 18
  const root = createRoot(document.getElementById('root'));
  
  // Renderizar con el contexto aplicado
  root.render(
    <React.StrictMode>
      <AppWithContext />
    </React.StrictMode>
  );
};

// Iniciar la aplicación
renderApp();


