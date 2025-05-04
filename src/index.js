import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './js/layout';

const renderApp = () => {
  // Usar el nuevo método createRoot de React 18
  const root = createRoot(document.getElementById('root'));
  
  // Renderizar la aplicación directamente
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Iniciar la aplicación
renderApp();


