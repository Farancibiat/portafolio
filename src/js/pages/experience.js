import React, { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import BodyFooter from "../component/bodyFooter";
import { 
  itExperienceData,
  adminExperienceData,
  educationData,
  skillsData,
  cvData,
  sectionIcons,
  detailIcons,
  profileData,
} from "../data/experienceData";
import { Briefcase, Download } from "react-bootstrap-icons"; // Solo importar los que no vienen de data
import "../styles/common.css";
import "../styles/experience.css";

// Helper para renderizar listas de responsabilidades/detalles
const renderList = (items) => (
  <ul className="text-light">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const Experience = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSticky, setIsSticky] = useState(false);
  const contentScrollerRef = useRef(null);
  const subnavRef = useRef(null);
  const headerRef = useRef(null);
  
  // Íconos específicos para esta página (podrían moverse a data si se usan en más sitios)
  const DetailCalendarIcon = detailIcons.calendar;
  const DetailLocationIcon = detailIcons.location;
  const ProfileIcon = sectionIcons.profile;
  const CodeSquareIcon = sectionIcons.careerDev;
  const BuildingIcon = sectionIcons.careerAdmin;
  const MortarboardIcon = sectionIcons.education;
  const ToolsIcon = sectionIcons.skills;
  // Download icon for CV section title is imported directly

  const handleDownloadCV = (language) => {
    ReactGA.event({
      category: "CV Download",
      action: "Click",
      label: `Experience CV ${language}`
    });
    // La descarga es manejada por el href del tag <a>
  };

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
        <div className="contentScroller" ref={contentScrollerRef}>
          <div className="px-4 py-4 bg-dark card ">
            {/* Header Section */}
            <div className="row mb-3" ref={headerRef}>
              <div className="col-12 text-center">
                <h1 className="text-center text-warning mb-4 experience-title">
                  <Briefcase className="me-2" /> Experiencia
                </h1>
              </div>
            </div>
            
            {/* Subnav Menu */}
            <div 
              className={`subnav-container ${isSticky ? 'sticky' : ''}`}
              ref={subnavRef} 
              style={isSticky ? { top: '0' } : {}}
            >
              <div className="subnav">
                {/* Links podrían generarse desde un array si se desea más dinamismo */} 
                <a href="#profile" className={`subnav-link ${activeSection === 'profile' ? 'active' : ''}`}>Perfil</a>
                <a href="#careerDev" className={`subnav-link ${activeSection === 'careerDev' ? 'active' : ''}`}>Desarrollo TI</a>
                <a href="#careerAdmin" className={`subnav-link ${activeSection === 'careerAdmin' ? 'active' : ''}`}>Administración</a>
                <a href="#education" className={`subnav-link ${activeSection === 'education' ? 'active' : ''}`}>Educación</a>
                <a href="#skills" className={`subnav-link ${activeSection === 'skills' ? 'active' : ''}`}>Habilidades</a>
                <a href="#download" className={`subnav-link ${activeSection === 'download' ? 'active' : ''}`}>CV</a>
              </div>
            </div>

            {/* Profile Section - Mapeado desde profileData */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="profile"
            >
              <div className="d-flex align-items-center mb-3">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <ProfileIcon size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Perfil</h2>
              </div>
              {/* Mapear los párrafos desde profileData */} 
              {profileData.map((paragraph, index) => (
                <p className="text-light" key={index}>{paragraph}</p>
              ))}
            </div>

            {/* IT Career Section - Mapeado */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="careerDev"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <CodeSquareIcon size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Trayectoria en Desarrollo TI</h2>
              </div>
              <div className="timeline">
                {itExperienceData.map((job) => (
                  <div className="timeline-item mb-4" key={job.id}>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="d-flex">
                          <div className="bg-warning timeline-marker"></div>
                          <div>
                            <p className="text-light mb-1"><DetailCalendarIcon className="me-2" /> {job.startDate} - {job.endDate}</p>
                            <p className="text-light mb-0"><DetailLocationIcon className="me-2" /> {job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <h4 className="text-warning">{job.title}</h4>
                        <h5 className="text-light mb-3">{job.company}</h5>
                        {job.description && <p className="text-light mb-2">{job.description}</p>}
                        {renderList(job.responsibilities)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Career Section - Mapeado */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="careerAdmin"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <BuildingIcon size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Trayectoria en Administración</h2>
              </div>
              <div className="timeline">
                {adminExperienceData.map((job) => (
                  <div className="timeline-item mb-4" key={job.id}>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="d-flex">
                          <div className="bg-warning timeline-marker"></div>
                          <div>
                            <p className="text-light mb-1"><DetailCalendarIcon className="me-2" /> {job.startDate} - {job.endDate}</p>
                            <p className="text-light mb-0"><DetailLocationIcon className="me-2" /> {job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <h4 className="text-warning">{job.title}</h4>
                        <h5 className="text-light mb-3">{job.company}</h5>
                        {renderList(job.responsibilities)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section - Mapeado */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="education"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <MortarboardIcon size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Educación</h2>
              </div>
              {educationData.map((edu, index) => (
                <div className={`row ${index < educationData.length - 1 ? 'mb-4' : ''}`} key={edu.id}>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center mb-2">
                      <DetailCalendarIcon className="text-warning me-2" />
                      <p className="text-light mb-0">{edu.startDate} - {edu.endDate}</p>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="text-warning">{edu.title}</h4>
                    <p className="text-light">
                        {edu.institution}
                        {edu.status && <span className="text-warning ms-2">({edu.status})</span>}
                    </p>
                    {edu.details && edu.details.length > 0 && renderList(edu.details)}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section - Mapeado */}
            <div 
              className="p-4 mb-4 rounded experience-section" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="skills"
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning p-2 rounded-circle me-3">
                  <ToolsIcon size={20} className="text-dark" />
                </div>
                <h2 className="text-warning mb-0">Habilidades Técnicas</h2>
              </div>
              <div className="row g-3">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div className="col-md-6 mb-3" key={category}> 
                    <div className="skill-container">
                      <h4 className="text-warning mb-3">{category}</h4> 
                      <div className="d-flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span className="badge skill-badge" key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Section - Revertir cambios de estilo, mantener GA */}
            <div 
              className="p-4 rounded experience-section"  // <--- Revertido: quitado mb-4
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              id="download"
            >
              <div className="d-flex align-items-center justify-content-center mb-4"> {/* <--- Revertido: añadido justify-content-center */}
                <div className="bg-warning p-2 rounded-circle me-3">
                  <Download size={20} className="text-dark" /> {/* Icono del título (ya estaba bien) */}
                </div>
                <h2 className="text-warning mb-0">Curriculum Vitae</h2> {/* <--- Revertido: texto original */}
              </div>
              {cvData.map((cv) => ( // <--- Revertido: variable a `cv` y estructura original del map
                <div className="card bg-dark p-3 mb-3 border-0 rounded" key={cv.id}>
                  <div className="row g-0">
                    <div className="col-md-2 col-sm-3 text-center d-flex align-items-center justify-content-center">
                      {cv.icon} {/* Icono desde data */}
                    </div>
                    <div className="col-md-7 col-sm-9">
                      <div className="card-body ps-md-0 py-md-1">
                        <h4 className="card-title text-warning mb-2">{cv.language}</h4>
                        <p className="card-text text-light mb-2">{cv.description}</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
                      <a
                        href={cv.downloadLink}
                        download={cv.downloadFilename}
                        className="btn btn-warning px-4 text-dark" // <--- Revertido: clases originales del botón
                        onClick={() => handleDownloadCV(cv.language)} // <--- Mantenido/Reaplicado: Evento GA
                      >
                        {cv.buttonText} <Download className="ms-2" /> {/* Icono del botón */}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};

export default Experience;
