import React from "react";
import brand from "../../img/brand.jpg";
import { Link } from "react-router-dom";
import "../styles/navigationBar.css";

export const NavigationBar = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light navigationBar">
        <Link className="navbar-brand d-flex" to="/">
          <img className="brandImage" src={brand} alt="" width="60" />
          <h3 className="brandText my-auto">Portafolio</h3>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mx-auto "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
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
      </nav>
    </div>
  );
};
export default NavigationBar;
