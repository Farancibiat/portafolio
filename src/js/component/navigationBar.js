import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigationBar.css";

export const NavigationBar = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light navigationBar">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex" to="/">
            <div className="my-auto">
              <h3 className="brandText mb-0">Farancibiat</h3>
              <h6 className="text-start mt-1">Portafolio</h6>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link navigationText" to="/">
                Inicio
              </Link>
              <Link className="nav-link navigationText" to="/experience">
                Experiencia
              </Link>
              <Link className="nav-link navigationText" to="/projects">
                Proyectos
              </Link>
              <Link className="nav-link navigationText" to="/contact">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
