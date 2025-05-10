import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslations } from "../store/LanguageContext";
import flagES from "../../assets/img/flag-es.svg";
import flagGB from "../../assets/img/flag-gb.svg";
import "../styles/navigationBar.css";
import { Github, Linkedin, House, Briefcase, Folder, Envelope } from "react-bootstrap-icons";

export const NavigationBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { t, setLanguage, language } = useTranslations();

  // Estilos para las banderas (puedes moverlos a tu CSS)
  const flagStyle = {
    width: "24px",
    height: "auto",
    cursor: "pointer",
    margin: "0 5px",
    borderRadius: "3px",
    border: language === 'es' ? "2px solid #ffc107" : "2px solid transparent", // Ejemplo de resaltado para la bandera activa
  };
  const flagStyleEn = {
    ...flagStyle,
    border: language === 'en' ? "2px solid #ffc107" : "2px solid transparent",
  }

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determinar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navigationBar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid py-2">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <div className="brand-wrapper d-flex align-items-center">
              <div className="brand-container">
                <h3 className="brandText fw-bold mb-0">
                  <span className="brand-highlight">F</span>arancibiat
                </h3>
                <div className="brand-subtitle">{t('general.title')}</div>
              </div>
            </div>
          </Link>
          <div className="brand-separator mx-3"></div>
          <div className="social-brand-icons">
            <a href="https://github.com/Farancibiat" className="social-icon me-2" target="_blank" rel="noreferrer">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/farancibiat/" className="social-icon" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <button
          className="navbar-toggler border-0"
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
          <div className="navbar-nav ms-auto align-items-center">
            <Link className={`nav-link navigationText ${isActive('/')}`} to="/">
              <House className="nav-icon me-1" /> {t('navigationBar.home')}
            </Link>
            <Link className={`nav-link navigationText ${isActive('/experience')}`} to="/experience">
              <Briefcase className="nav-icon me-1" /> {t('navigationBar.experience')}
            </Link>
            <Link className={`nav-link navigationText ${isActive('/projects')}`} to="/projects">
              <Folder className="nav-icon me-1" /> {t('navigationBar.projects')}
            </Link>
            <Link className={`nav-link navigationText ${isActive('/contact')}`} to="/contact">
              <Envelope className="nav-icon me-1" /> {t('navigationBar.contact')}
            </Link>
            <div className="d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
              <img 
                src={flagES} 
                alt="Español" 
                style={flagStyle} 
                onClick={() => setLanguage('es')} 
              />
              <img 
                src={flagGB} 
                alt="English" 
                style={flagStyleEn} 
                onClick={() => setLanguage('en')} 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
