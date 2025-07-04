import React, { useState, useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { useTranslations } from "../store/LanguageContext";
import BodyFooter from "../component/bodyFooter";
import { Award, Translate, Briefcase, Tools, PersonBadge, Calendar, Download, GeoAlt, Building, Mortarboard, CodeSquare } from "react-bootstrap-icons";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";
import "../styles/common.css";
import "../styles/experience.css";
import { translations } from "../store/translations";

const cvData=[
  { icon:Award,
    link:cvEsp
   },
   {
    icon:Translate,
    link:cvEng
   }
];

const sections = ['profile', 'careerDev', 'careerAdmin', 'education', 'skills', 'download'];

export const Experience = () => {
  const { t, language } = useTranslations();
  const [activeSection, setActiveSection] = useState('profile');
  const contentScrollerRef = useRef(null);
  
  React.useEffect(() => {
    document.title = t('experiencePage.pageTitle') + " - Felipe Arancibia";
  }, [t, language]);

  const handleDownloadCV = (cvLanguage) => {
    ReactGA.event({
      category: "CV Download",
      action: "Click",
      label: `Experience CV ${cvLanguage}`
    });
  };
  



  useEffect(() => {
    const contentScroller = contentScrollerRef.current;
    if (!contentScroller) return;

    const observerOptions = {
      root: contentScroller,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="bodyFrame">
        <div className="contentScroller" ref={contentScrollerRef}>
          <div className="row mb-4 px-4 mt-4">
            <div className="col-12 text-center">
              <h1 className="text-center text-warning mb-4 experience-title">
                <Briefcase className="me-2" /> {t('experiencePage.pageTitle')}
              </h1>
            </div>
          </div>
          

          <div className="subnav-container">
            <div className="subnav">
             { translations[language].experiencePage.navItems.map((item, index) => (
              <a href={`#${sections[index]}`} className={`subnav-link ${activeSection === sections[index] ? 'active' : ''}`} key={item}>{item}</a>
             ))}
            </div>
          </div>


          <div 
            className="px-4 py-4 mb-4 rounded experience-section" 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            id="profile"
          >
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning p-2 rounded-circle me-3">
                <PersonBadge size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.profile.title')}</h2>
            </div>
            <p className="text-light">{t('experiencePage.sectionContent.profile.description')}</p>
          </div>


          <div 
            className="px-4 py-4 mb-4 rounded experience-section" 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            id="careerDev"
          >
            <div className="d-flex align-items-center mb-4">
              <div className="bg-warning p-2 rounded-circle me-3">
                <CodeSquare size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.itExperience.title')}</h2>
            </div>
            <div className="timeline">
              {translations[language].experiencePage.sectionContent.itExperience.exp.map((job) => (
                <div className="timeline-item mb-4" key={job.id}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> {job.startDate} - {job.endDate}</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> {job.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">{job.title}</h4>
                      <h5 className="text-light mb-3">{job.company}</h5>                      
                        <p className="text-light mb-2">{job.description}</p>
                        <ul className="text-light">
                          {job.tasks.map((item, index) =>
                            <li key={`${job.id}task${index}`}>{item}</li>
                          )}
                        </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="px-4 py-4 mb-4 rounded experience-section" 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            id="careerAdmin"
          >
            <div className="d-flex align-items-center mb-4">
              <div className="bg-warning p-2 rounded-circle me-3">
                <Building size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.adminExperience.title')}</h2>
            </div>
            <div className="timeline">
              {translations[language].experiencePage.sectionContent.adminExperience.exp.map((job) => (
                <div className="timeline-item mb-4" key={job.id}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="bg-warning timeline-marker"></div>
                        <div>
                          <p className="text-light mb-1"><Calendar className="me-2" /> {job.startDate} - {job.endDate}</p>
                          <p className="text-light mb-0"><GeoAlt className="me-2" /> {job.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-warning">{job.title}</h4>
                      <h5 className="text-light mb-3">{job.company}</h5>
                      <ul className="text-light">
                      {job.tasks.map((item, index) =>
                            <li key={`${job.id}task${index}`}>{item}</li>
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="px-4 py-4 mb-4 rounded experience-section" 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            id="education"
          >
            <div className="d-flex align-items-center mb-4">
              <div className="bg-warning p-2 rounded-circle me-3">
                <Mortarboard size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.education.title')}</h2>
            </div>
            {translations[language].experiencePage.sectionContent.education.exp.map((edu, index,arr) => (
              <div className={`row ${index < arr.length - 1 ? 'mb-4' : ''}`} key={edu.id}>
                <div className="col-md-3">
                  <div className="d-flex align-items-center mb-2">
                    <Calendar className="text-warning me-2" />
                    <p className="text-light mb-0">{edu.startDate} - {edu.endDate}</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="text-warning">{edu.title}</h4>
                  <p className="text-light">
                      {edu.institutionKey ? t(edu.institutionKey) : edu.institution}
                      {edu.statusKey && <span className="text-warning ms-2">({t(edu.statusKey)})</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>


          <div 
            className="px-4 py-4 mb-4 rounded experience-section" 
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            id="skills"
          >
            <div className="d-flex align-items-center mb-4">
              <div className="bg-warning p-2 rounded-circle me-3">
                <Tools size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.skills.title')}</h2>
            </div>
            <div className="row g-3">
              {Object.entries(translations[language].experiencePage.sectionContent.skills.skillsData).map(([category, skills]) => (
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


          <div 
            className="px-5 py-5 rounded experience-section" 
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(10px)"
            }}
            id="download"
          >
            <div className="d-flex align-items-center mb-5">
              <div className="bg-warning p-2 rounded-circle me-3">
                <Download size={20} className="text-dark" />
              </div>
              <h2 className="text-warning mb-0">{t('experiencePage.sectionContent.cv.title')}</h2>
            </div>

            <div className="row justify-content-center g-4">
              {translations[language].general.languages.map((cv, index) => (
                <div className="col-md-6" key={cv.id}>
                  <div 
                    className="p-4 rounded-4 text-center" 
                    style={{
                      background: "linear-gradient(45deg, rgba(33,37,41,0.95) 0%, rgba(33,37,41,0.8) 100%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <a
                      href={cvData[index].link}
                      download={cvData[index].downloadFilename}
                      onClick={() => handleDownloadCV(cv.language)}
                      className="btn w-100 position-relative overflow-hidden py-3 px-4"
                      style={{
                        background: "linear-gradient(45deg, #ffc107 0%, #ff9800 100%)",
                        border: "none",
                        color: "#000",
                        fontWeight: "600",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span className="d-flex align-items-center justify-content-center gap-3">
                        {React.createElement(cvData[index].icon, {
                          size: 24,
                          className: "text-dark"
                        })}
                        <span className="fw-bold">{cv.language}</span>
                        <Download size={20} />
                      </span>
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 100%)",
                          opacity: "0",
                          transition: "opacity 0.3s ease"
                        }}
                      ></div>
                    </a>
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