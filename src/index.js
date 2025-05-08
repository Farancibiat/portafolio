import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from "react-ga4";
import App from './js/layout';

ReactGA.initialize('G-GW5FL22XZN'); 

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


