import React, { useState, useEffect } from "react";
import { 
  useLocation,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavigationBar from "./component/navigationBar";
import SideBar from "./component/sideBar";
import { motion, AnimatePresence } from "framer-motion";

import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import About from "./pages/about";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/layout.css"; // Importamos un nuevo CSS específico para el layout

// Componente de transición para cada página individual
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// Componente de layout que se utilizará en las rutas
const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mounted, setMounted] = useState(false);
  
  // Aseguramos que los componentes se monten correctamente
  useEffect(() => {
    setMounted(true);
    // Scroll to top on route change
    window.scrollTo(0, 0);
    return () => setMounted(false);
  }, [location.pathname]);
  
  // Variante para la animación del sidebar
  const sidebarVariants = {
    hidden: { 
      width: 0,
      opacity: 0,
      scaleX: 0,
      originX: 0,
    },
    visible: { 
      width: "auto",
      opacity: 1,
      scaleX: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
      }
    },
    exit: { 
      width: 0,
      opacity: 0,
      scaleX: 0,
      originX: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn",
      }
    }
  };

  if (!mounted) return null; // Evita renderizados antes de que el componente esté listo

  return (
    <>
      <div className="navbar-container">
        <NavigationBar />
      </div>
      <div className="navbar-spacer"></div>
      <div className="container-fluid">
        <div className="app-layout-row">
          {/* Sidebar con animación de expansión/contracción */}
          <AnimatePresence mode="wait">
            {/* Hide sidebar on home AND experience page */}
            {!isHomePage && location.pathname !== "/experience" && (
              <motion.div 
                className="sidebar-column"
                key="sidebar"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: 'hidden' }}
              >
                <SideBar />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Contenido principal con transición mejorada */}
          <motion.div 
            className={`content-column ${isHomePage ? 'full-width' : ''}`}
            layout="position"
            transition={{ 
              type: "tween",
              duration: 0.3
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route index element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="/experience" element={<AnimatedPage><Experience /></AnimatedPage>} />
                <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

// Componente principal con contexto inyectado
const AppWithContext = injectContext(AppLayout);

// Componente App con BrowserRouter que contiene el contexto
const App = () => {
  return (
    <BrowserRouter basename={process.env.BASENAME || ""}>
      <AppWithContext />
    </BrowserRouter>
  );
};

// Exportar componentes y rutas para que se usen en index.js
export const routes = [
  {
    path: "*",
    element: <App />
  }
];

export default App;

