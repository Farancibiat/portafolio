import React, { useState, useEffect } from "react";
import { 
  useLocation,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import ReactGA from "react-ga4";
import NavigationBar from "./component/navigationBar";
import SideBar from "./component/sideBar";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./store/LanguageContext";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";

import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import About from "./pages/about";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/layout.css";
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </motion.div>
  );
};


const AppLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname === "/projects" || location.pathname === "/contact";
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search, title: document.title });
    return () => setMounted(false);
  }, [location.pathname, location.search]);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);
  

  const sidebarVariants = {
    hidden: isMobile ? {
      x: "-100%",
      opacity: 0,
    } : {
      width: 0,
      opacity: 0,
      scaleX: 0,
      originX: 0,
    },
    visible: isMobile ? {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
      }
    } : {
      width: "auto",
      opacity: 1,
      scaleX: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
      }
    },
    exit: isMobile ? {
      x: "-100%",
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn",
      }
    } : {
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

  if (!mounted) return null;

  return (
    <>
      <div className="navbar-container">
        <NavigationBar />
      </div>
      <div className="navbar-spacer"></div>
      

      {isMobile && mobileSidebarOpen && (
        <div 
          className="mobile-sidebar-overlay"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
      <div className="container-fluid" style={{ position: 'relative' }}>

        {isMobile && showSidebar && (
          <button
            className="mobile-sidebar-toggle"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {mobileSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
        <div className="app-layout-row">
          <AnimatePresence mode="wait">
            {showSidebar && (!isMobile || mobileSidebarOpen) && (
              <motion.div 
                className="sidebar-column"
                key="sidebar"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...(isMobile && {
                    position: 'fixed',
                    top: '110px',
                    left: 0,
                    zIndex: 50,
                    width: '100%',
                    maxWidth: '350px',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)'
                  })
                }}
              >
                <SideBar />
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div 
            className={`content-column ${!showSidebar || (isMobile && showSidebar) ? 'full-width' : ''}`}
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


const AppWithContext = injectContext(AppLayout);


const App = () => {
  return (
    <BrowserRouter basename={process.env.BASENAME || ""}>
      <LanguageProvider>
        <AppWithContext />
      </LanguageProvider>
    </BrowserRouter>
  );
};


export const routes = [
  {
    path: "*",
    element: <App />
  }
];

export default App;

