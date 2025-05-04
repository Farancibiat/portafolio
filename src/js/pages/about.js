import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Github, 
  FileEarmarkPerson, 
  LaptopFill, 
  EnvelopeFill, 
  ArrowRightCircle,
  Database,
  Tools,
  Kanban
} from "react-bootstrap-icons";
import BodyFooter from "../component/bodyFooter";

export const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <>
      <div className="bodyFrame" style={{ maxWidth: isHomePage ? "100%" : "" }}>
        <div className="container contentScroller">
          <div className="container my-4 px-4 py-5 bg-dark card" style={{ border: "none", borderRadius: "15px" }}>
            {/* Hero Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-10 mx-auto text-center">
                <h1 className="display-4 fw-bold text-warning mb-3">
                  Felipe Arancibia Torres
                </h1>
                <p className="lead text-light mb-4">
                  Desarrollador Full Stack enfocado en transformar las necesidades del negocio en soluciones web modernas y multiplataforma.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/projects" className="btn btn-warning px-4 py-2 text-dark">
                    Ver Proyectos <ArrowRightCircle className="ms-2" />
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light px-4 py-2">
                    Contacto
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-warning mb-0">Habilidades</h2>
                    <small className="text-light opacity-75">* Ver perfil técnico completo en <Link to="/experience" className="text-warning">Experiencia</Link></small>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <LaptopFill size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">Frontend</h5>
                          <p className="text-light opacity-75 mb-0">React, Next.js, TypeScript</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Database size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">Backend</h5>
                          <p className="text-light opacity-75 mb-0">Spring, Express, Flask</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Tools size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">Herramientas</h5>
                          <p className="text-light opacity-75 mb-0">Git, CI/CD, Azure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Kanban size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">Metodologías</h5>
                          <p className="text-light opacity-75 mb-0">Agile, Scrum, Kanban</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Sections - Ahora en 3 columnas para mejor aprovechamiento */}
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning p-2 rounded me-3">
                        <FileEarmarkPerson size={24} className="text-dark" />
                      </div>
                      <h3 className="card-title mb-0">Experiencia</h3>
                    </div>
                    <p className="text-muted">
                      Amplia experiencia en desarrollo de aplicaciones web, metodologías ágiles y trabajo en equipo. Revisa mi CV completo en inglés y español.
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/experience" className="btn btn-warning px-4 text-dark">
                        Ver Experiencia <ArrowRightCircle className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning p-2 rounded me-3">
                        <Github size={24} className="text-dark" />
                      </div>
                      <h3 className="card-title mb-0">Proyectos</h3>
                    </div>
                    <p className="text-muted">
                      Portfolio de proyectos desarrollados con diversas tecnologías. Incluye creación de APIs, implementación de soluciones y herramientas de código abierto.
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/projects" className="btn btn-warning px-4 text-dark">
                        Ver Proyectos <ArrowRightCircle className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning p-2 rounded me-3">
                        <EnvelopeFill size={24} className="text-dark" />
                      </div>
                      <h3 className="card-title mb-0">Contacto</h3>
                    </div>
                    <p className="text-muted">
                      ¿Interesado en trabajar juntos? Estoy disponible para proyectos freelance y nuevas oportunidades laborales.
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/contact" className="btn btn-warning px-4 text-dark">
                        Contáctame <ArrowRightCircle className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};

export default About;
