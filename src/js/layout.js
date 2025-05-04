import React from "react";
import { 
  Outlet,
  useLocation
} from "react-router-dom";
import NavigationBar from "./component/navigationBar";
import SideBar from "./component/sideBar";

import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import About from "./pages/about";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Componente de layout que se utilizará en las rutas
const AppLayout = () => {
  const location = useLocation();
  
  // Desplazarse al inicio al cambiar de ruta
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <SideBar />
          </div>
          <div className="col-12 col-lg-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

// Exportar componentes y rutas para que se usen en index.js
export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/experience", element: <Experience /> },
      { path: "/projects", element: <Projects /> }
    ]
  }
];

// Exportar el componente principal con contexto inyectado
export default injectContext(AppLayout);

