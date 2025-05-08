import React, { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { useTranslations } from "../context/LanguageContext";
import BodyFooter from "../component/bodyFooter";
import { 
  itExperienceData,
  adminExperienceData,
  educationData,
  skillsData,
  cvData,
  sectionIcons,
  detailIcons,
  profileDataKey,
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

// --- NUEVA FUNCIÓN AUXILIAR ---
const spanishMonthMap = {
  "Enero": "ene", "Febrero": "feb", "Marzo": "mar", "Abril": "abr", 
  "Mayo": "may", "Junio": "jun", "Julio": "jul", "Agosto": "ago", 
  "Septiembre": "sep", "Octubre": "oct", "Noviembre": "nov", "Diciembre": "dic"
};

const translateDateString = (dateString, t) => {
  if (!dateString || typeof dateString !== 'string') return dateString; // Manejar casos inválidos
  const parts = dateString.split(' ');
  if (parts.length !== 2) return dateString; // Formato inesperado

  const monthNameEs = parts[0];
  const year = parts[1];
  const monthKey = spanishMonthMap[monthNameEs];

  if (monthKey) {
    const translatedMonth = t(`common.months.${monthKey}`);
    return `${translatedMonth} ${year}`;
  } else {
    // Si el mes no se reconoce, devolver el string original
    return dateString;
  }
};
// --- FIN FUNCIÓN AUXILIAR ---

export const Experience = () => {
  const { t, language } = useTranslations();
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

  React.useEffect(() => {
    document.title = t('experiencePage.pageTitle') + " - Felipe Arancibia";
  }, [t, language]);

  const handleDownloadCV = (cvLanguage) => {
    ReactGA.event({
      category: "CV Download",
      action: "Click",
      label: `Experience CV ${cvLanguage}`
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
                  <Briefcase className="me-2" /> {t('experiencePage.pageTitle')}
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
                <a href="#profile" className={`subnav-link ${activeSection === 'profile' ? 'active' : ''}`}>{t('experiencePage.navProfile')}</a>
                <a href="#careerDev" className={`subnav-link ${activeSection === 'careerDev' ? 'active' : ''}`}>{t('experiencePage.navDevCareer')}</a>
                <a href="#careerAdmin" className={`subnav-link ${activeSection === 'careerAdmin' ? 'active' : ''}`}>{t('experiencePage.navAdminCareer')}</a>
                <a href="#education" className={`subnav-link ${activeSection === 'education' ? 'active' : ''}`}>{t('experiencePage.navEducation')}</a>
                <a href="#skills" className={`subnav-link ${activeSection === 'skills' ? 'active' : ''}`}>{t('experiencePage.navSkills')}</a>
                <a href="#download" className={`subnav-link ${activeSection === 'download' ? 'active' : ''}`}>{t('experiencePage.navCv')}</a>
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
                <h2 className="text-warning mb-0">{t('experiencePage.profileSectionTitle')}</h2>
              </div>
              {/* Mapear los párrafos desde profileData */} 
              <p className="text-light">{t(profileDataKey)}</p>
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
                <h2 className="text-warning mb-0">{t('experiencePage.itExperienceSectionTitle')}</h2>
              </div>
              <div className="timeline">
                {itExperienceData.map((job) => (
                  <div className="timeline-item mb-4" key={job.id}>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="d-flex">
                          <div className="bg-warning timeline-marker"></div>
                          <div>
                            <p className="text-light mb-1"><DetailCalendarIcon className="me-2" /> {translateDateString(job.startDate, t)} - {translateDateString(job.endDate, t)}</p>
                            <p className="text-light mb-0"><DetailLocationIcon className="me-2" /> {job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <h4 className="text-warning">{job.titleKey ? t(job.titleKey) : job.title}</h4>
                        <h5 className="text-light mb-3">{job.company}</h5>
                        { (job.descriptionKey) && 
                          <p className="text-light mb-2">{t(job.descriptionKey)}</p>
                        }
                        {job.responsibilitiesKeys && renderList(job.responsibilitiesKeys.map(key => t(key)))}
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
                <h2 className="text-warning mb-0">{t('experiencePage.adminExperienceSectionTitle')}</h2>
              </div>
              <div className="timeline">
                {adminExperienceData.map((job) => (
                  <div className="timeline-item mb-4" key={job.id}>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="d-flex">
                          <div className="bg-warning timeline-marker"></div>
                          <div>
                            <p className="text-light mb-1"><DetailCalendarIcon className="me-2" /> {translateDateString(job.startDate, t)} - {translateDateString(job.endDate, t)}</p>
                            <p className="text-light mb-0"><DetailLocationIcon className="me-2" /> {job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <h4 className="text-warning">{job.titleKey ? t(job.titleKey) : job.title}</h4>
                        <h5 className="text-light mb-3">{job.company}</h5>
                        {job.responsibilitiesKeys && renderList(job.responsibilitiesKeys.map(key => t(key)))}
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
                <h2 className="text-warning mb-0">{t('experiencePage.educationSectionTitle')}</h2>
              </div>
              {educationData.map((edu, index) => (
                <div className={`row ${index < educationData.length - 1 ? 'mb-4' : ''}`} key={edu.id}>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center mb-2">
                      <DetailCalendarIcon className="text-warning me-2" />
                      <p className="text-light mb-0">{translateDateString(edu.startDate, t)} - {translateDateString(edu.endDate, t)}</p>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="text-warning">{edu.titleKey ? t(edu.titleKey) : edu.title}</h4>
                    <p className="text-light">
                        {edu.institutionKey ? t(edu.institutionKey) : edu.institution}
                        {edu.statusKey && <span className="text-warning ms-2">({t(edu.statusKey)})</span>}
                    </p>
                    {edu.detailsKeys && edu.detailsKeys.length > 0 && renderList(edu.detailsKeys.map(key => t(key)))}
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
                <h2 className="text-warning mb-0">{t('experiencePage.skillsSectionTitle')}</h2>
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
                <h2 className="text-warning mb-0">{t('experiencePage.cvDownloadSectionTitle')}</h2> {/* <--- Revertido: texto original */}
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
                        <p className="card-text text-light mb-2">{t(cv.descriptionKey)}</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-12 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
                      <a
                        href={cv.downloadLink}
                        download={cv.downloadFilename}
                        className="btn btn-warning px-4 text-dark" // <--- Revertido: clases originales del botón
                        onClick={() => handleDownloadCV(cv.language)} // <--- Mantenido/Reaplicado: Evento GA
                      >
                        {t(cv.buttonTextKey)} <Download className="ms-2" /> {/* Icono del botón */}
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
