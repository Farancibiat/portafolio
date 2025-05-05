import React, { useState, useEffect, useRef } from "react";
import BodyFooter from "../component/bodyFooter";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";
import "../styles/common.css";
import "../styles/experience.css";
import { 
  Briefcase, 
  PersonBadge, 
  Calendar, 
  Download, 
  GeoAlt, 
  Translate, 
  Award, 
  Mortarboard, 
  Tools,
  CodeSquare,
  Building,
} from "react-bootstrap-icons";

export const Experience = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSticky, setIsSticky] = useState(false);
  const contentScrollerRef = useRef(null);
  const subnavRef = useRef(null);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const contentScroller = contentScrollerRef.current;
    const subnavElement = subnavRef.current;
    const headerElement = headerRef.current;

    if (!contentScroller || !subnavElement || !headerElement) return;

    const subnavOriginalOffsetTop = subnavElement.offsetTop;
    const headerHeight = headerElement.offsetHeight;
    const stickyPoint = subnavOriginalOffsetTop - headerHeight - 20;
    
    const handleScroll = () => {
      const scrollPosition = contentScroller.scrollTop;

      setIsSticky(scrollPosition >= stickyPoint);
      
      const sections = ['profile', 'careerDev', 'careerAdmin', 'education', 'skills', 'download'];
      let currentSection = 'profile';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const scrollerRect = contentScroller.getBoundingClientRect();

        const offsetTopRelativeToScroller = rect.top - scrollerRect.top;
        
        const detectionOffset = 150;

        if (offsetTopRelativeToScroller < detectionOffset) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };
    
    contentScroller.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      contentScroller.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bodyFrame">
        <div className="container contentScroller" ref={contentScrollerRef}>
          <div className="container px-4 py-4 bg-dark card inner-content-card">
            {/* Header Section */}
            <div className="row mb-3" ref={headerRef}>
              <div className="col-12 text-center">
                <h1 className="text-center text-warning mb-4 experience-title">
                  <Briefcase className="me-2" /> Experiencia
                </h1>
              </div>
            </div>
            
            {/* Subnav Menu Container - Este es el que se hará sticky */}
            <div 
              className={`subnav-container ${isSticky ? 'sticky' : ''}`}
              ref={subnavRef} 
              style={isSticky ? { top: '0' } : {}}
            >
              <div className="subnav">
                <a 
                  href="#profile"
                  className={`subnav-link ${activeSection === 'profile' ? 'active' : ''}`}
                >
                  Perfil
                </a>
                <a 
                  href="#careerDev"
                  className={`subnav-link ${activeSection === 'careerDev' ? 'active' : ''}`}
                >
                  Desarrollo TI
                </a>
                <a 
                  href="#careerAdmin" 
                  className={`subnav-link ${activeSection === 'careerAdmin' ? 'active' : ''}`}
                >
                  Administración
                </a>
                <a 
                  href="#education"
                  className={`subnav-link ${activeSection === 'education' ? 'active' : ''}`}
                >
                  Educación
                </a>
                <a 
                  href="#skills"
                  className={`subnav-link ${activeSection === 'skills' ? 'active' : ''}`}
                >
                  Habilidades
                </a>
                <a 
                  href="#download"
                  className={`subnav-link ${activeSection === 'download' ? 'active' : ''}`}
                >
                  CV
                </a>
              </div>
            </div>

            {/* Profile Section */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="profile"
            >
              <div className="d-flex align-items-center mb-3">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <PersonBadge size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Perfil</h2>
              </div>
              <p className="text-light">
                Me gusta trabajar en equipo, generar lazos de confianza que faciliten el trabajo colaborativo 
                y trabajar en ambientes distendidos.
              </p>
              <p className="text-light">
                Me acomoda trabajar enfocado en metas y analizo constantemente mi entorno en busca de 
                oportunidades que me ayuden a obtener mayor bienestar y mejores resultados. 
                Me gusta enseñar y valoro el consejo de mis colegas.
              </p>
            </div>

            {/* IT Career Section */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="careerDev"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <CodeSquare size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Trayectoria en Desarrollo TI</h2>
              </div>

              {/* Timeline format for IT work experience */}
              <div className="timeline">
                {/* Siigroup-Scotiabank */}
                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> Ene 2023 - Actualidad</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Remoto</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Desarrollador Full-Stack Senior</h4>
                      <h5 className="text-light mb-3">Siigroup - Scotiabank</h5>
                      <p className="text-light mb-2">
                        Desarrollador Senior en equipo Agile SCRUM. Proyecto principal: aplicación de atención al cliente para Scotiabank.
                      </p>
                      <ul className="text-light">
                        <li>Desarrollo y mantenimiento de plataforma de servicio al cliente usando Angular y .NET.</li>
                        <li>Implementación de nuevas funcionalidades y mejoras en la interfaz de usuario.</li>
                        <li>Colaboración en equipo multidisciplinario siguiendo metodología Agile SCRUM.</li>
                        <li>Resolución de incidencias y optimización de rendimiento en aplicaciones existentes.</li>
                        <li>Trabajo con bases de datos SQL Server y servicios REST.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AFP UNO */}
                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> May 2022 - Dic 2022</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Remoto</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Desarrollador Frontend</h4>
                      <h5 className="text-light mb-3">AFP UNO</h5>
                      <p className="text-light mb-2">
                        Desarrollador Frontend en el equipo de web pública y plataformas internas.
                      </p>
                      <ul className="text-light">
                        <li>Desarrollo y mantenimiento del sitio web corporativo usando React y NextJS.</li>
                        <li>Implementación de landing pages y micrositios para campañas específicas.</li>
                        <li>Optimización de rendimiento y experiencia de usuario en plataformas digitales.</li>
                        <li>Colaboración con equipos de diseño y marketing para implementar nuevas funcionalidades.</li>
                        <li>Desarrollo de componentes reutilizables y mantenimiento de la biblioteca de UI.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* MoveApps */}
                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> Ago 2021 - Abr 2022</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Remoto</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Desarrollador Full-Stack</h4>
                      <h5 className="text-light mb-3">MoveApps</h5>
                      <p className="text-light mb-2">
                        Programador en equipo ágil SCRUM. Trabajo con Azure DevOps y Bitbucket.
                      </p>
                      <ul className="text-light">
                        <li>Desarrollo de proyectos/microservicios de apps web y API REST diversos con equipos multidisciplinarios.</li>
                        <li>Desarrollo y mantención de proyectos de mediana complejidad.</li>
                        <li>Cooperación y seguimiento de sprint junto a equipo de diseñadores, QA, product owner y scrum master.</li>
                        <li>Desarrollo de features para API (Node.js/Java), sitio de administración (React) y website (PHP) para proyecto Chile Converge.</li>
                        <li>Desarrollo de features y mantenimiento de sitio web de AFP UNO.</li>
                        <li>Participación en proyecto MOVICARE, desarrollo frontend con React-Typescript.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Administrative Career Section */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="careerAdmin"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <Building size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Trayectoria en Administración</h2>
              </div>

              {/* Timeline format for administrative work experience */}
              <div className="timeline">
                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> Jun 2020 - Mar 2021</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Chile</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Administrador</h4>
                      <h5 className="text-light mb-3">Pesquera Wendtfish</h5>
                      <ul className="text-light">
                        <li>Desarrollo y operación de sistema de control financiero.</li>
                        <li>Análisis y gestión de brechas administrativas.</li>
                        <li>Implementación de sistema G-suite para mejora de procesos.</li>
                        <li>Negociación y gestión de proveedores.</li>
                        <li>Supervisión de equipos operativos y administrativos.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> Ago 2019 - Nov 2019</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Chiloé, Chile</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Director Ejecutivo</h4>
                      <h5 className="text-light mb-3">Corporación Chiloé Convention Bureau</h5>
                      <ul className="text-light">
                        <li>Evaluación de desempeño del proyecto.</li>
                        <li>Regularización de brechas para rendición de PROFO.</li>
                        <li>Rendición anual de fondos.</li>
                        <li>Coordinación de actividades de promoción turística.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item mb-4">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> Oct 2016 - Oct 2018</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> Chile</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">Jefe de Desarrollo y Finanzas</h4>
                      <h5 className="text-light mb-3">Turismo Pehuén</h5>
                      <ul className="text-light">
                        <li>Desarrollo, proyección y control de la gestión financiera y contable.</li>
                        <li>Rediseño de sistema de gestión administrativa.</li>
                        <li>Gestor de proyecto web y digitalización de procesos.</li>
                        <li>Desarrollo y mantención de Manual de operación institucional.</li>
                        <li>Estructuración departamental de la empresa.</li>
                        <li>Responsable de gestión de Recursos Humanos.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="education"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <Mortarboard size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Educación</h2>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="d-flex align-items-center mb-2">
                    <Calendar className="text-warning me-2" />
                    <p className="text-light mb-0">Feb 2020 - Dic 2020</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="text-warning">Full Stack Web Developer</h4>
                  <p className="text-light">4Geeks Academy</p>
                  <ul className="text-light">
                    <li>Desarrollo frontend con HTML, CSS, JavaScript y React</li>
                    <li>Desarrollo backend con Python, Flask y SQL</li>
                    <li>Control de versiones con Git y GitHub</li>
                    <li>Metodologías ágiles y gestión de proyectos</li>
                  </ul>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="d-flex align-items-center mb-2">
                    <Calendar className="text-warning me-2" />
                    <p className="text-light mb-0">2013 - 2016</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="text-warning">Administración de Empresas - Licenciatura en Turismo</h4>
                  <p className="text-light">Universidad Austral de Chile</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="d-flex align-items-center mb-2">
                    <Calendar className="text-warning me-2" />
                    <p className="text-light mb-0">2009 - 2012</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="text-warning">Ingeniería Comercial</h4>
                  <p className="text-light">Universidad Técnica Federico Santa María <span className="text-warning">(Incompleta)</span></p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="skills"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <Tools size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Habilidades Técnicas</h2>
              </div>

              <div className="row g-3">
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-laptop-code me-2"></i> Frontend
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">React</span>
                      <span className="badge skill-badge">JavaScript</span>
                      <span className="badge skill-badge">TypeScript</span>
                      <span className="badge skill-badge">HTML5</span>
                      <span className="badge skill-badge">CSS3</span>
                      <span className="badge skill-badge">SCSS</span>
                      <span className="badge skill-badge">Bootstrap</span>
                      <span className="badge skill-badge">Material UI</span>
                      <span className="badge skill-badge">Angular</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-server me-2"></i> Backend
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">Node.js</span>
                      <span className="badge skill-badge">Express</span>
                      <span className="badge skill-badge">Python</span>
                      <span className="badge skill-badge">Flask</span>
                      <span className="badge skill-badge">Spring Boot</span>
                      <span className="badge skill-badge">Java</span>
                      <span className="badge skill-badge">RESTful APIs</span>
                      <span className="badge skill-badge">SQL</span>
                      <span className="badge skill-badge">.NET</span>
                      <span className="badge skill-badge">C#</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-database me-2"></i> Base de Datos
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">PostgreSQL</span>
                      <span className="badge skill-badge">MySQL</span>
                      <span className="badge skill-badge">MongoDB</span>
                      <span className="badge skill-badge">SQLite</span>
                      <span className="badge skill-badge">Firebase</span>
                      <span className="badge skill-badge">SQL Server</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-tools me-2"></i> DevOps & Herramientas
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">Git</span>
                      <span className="badge skill-badge">Azure DevOps</span>
                      <span className="badge skill-badge">CI/CD</span>
                      <span className="badge skill-badge">Docker</span>
                      <span className="badge skill-badge">Bitbucket</span>
                      <span className="badge skill-badge">Jira</span>
                      <span className="badge skill-badge">GitHub</span>
                      <span className="badge skill-badge">Jest</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-sitemap me-2"></i> Metodologías
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">Agile</span>
                      <span className="badge skill-badge">Scrum</span>
                      <span className="badge skill-badge">Kanban</span>
                      <span className="badge skill-badge">CI/CD</span>
                      <span className="badge skill-badge">TDD</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="skill-container">
                    <h4 className="text-warning mb-3">
                      <i className="fas fa-language me-2"></i> Idiomas
                    </h4>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge skill-badge">Español (Nativo)</span>
                      <span className="badge skill-badge">Inglés (Avanzado)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Section */}
            <div 
              className="p-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="download"
            >
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <Download size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Curriculum Vitae</h2>
              </div>
              
              <div className="card bg-dark p-3 mb-3 border-0 rounded">
                <div className="row g-0">
                  <div className="col-md-2 col-sm-3 text-center d-flex align-items-center justify-content-center">
                    <Award className="text-warning" size={44} />
                  </div>
                  <div className="col-md-7 col-sm-9">
                    <div className="card-body ps-md-0 py-md-1">
                      <h4 className="card-title text-warning mb-2">Español</h4>
                      <p className="card-text text-light mb-2">Versión completa en español de mi currículum vitae</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
                    <a
                      href={cvEsp}
                      download="Felipe_Arancibia_CV_Esp.pdf"
                      className="btn btn-warning px-4 text-dark"
                    >
                      Descargar <Download className="ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card bg-dark p-3 border-0 rounded">
                <div className="row g-0">
                  <div className="col-md-2 col-sm-3 text-center d-flex align-items-center justify-content-center">
                    <Translate className="text-warning" size={44} />
                  </div>
                  <div className="col-md-7 col-sm-9">
                    <div className="card-body ps-md-0 py-md-1">
                      <h4 className="card-title text-warning mb-2">English</h4>
                      <p className="card-text text-light mb-2">Full English version of my curriculum vitae</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
                    <a
                      href={cvEng}
                      download="Felipe_Arancibia_CV_Eng.pdf"
                      className="btn btn-warning px-4 text-dark"
                    >
                      Download <Download className="ms-2" />
                    </a>
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

export default Experience;
