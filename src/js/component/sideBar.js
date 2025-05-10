import React from "react";
import ReactGA from "react-ga4";
import { useTranslations } from "../store/LanguageContext";
import "../styles/sideBar.css";
import { Link } from "react-router-dom";
import {
  Award,
  Translate,
  Check,
  Github,
  Linkedin,
  EnvelopeFill,
  FileEarmarkPerson,
  Globe,
  Code,
  CloudUpload,
  Tools,
  Download
} from "react-bootstrap-icons";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";
import flagES from "../../assets/img/flag-es.svg";
import flagGB from "../../assets/img/flag-gb.svg";
import { translations } from "../store/translations";

export const SideBar = () => {
  const { t, language } = useTranslations();

  const flags=[flagES, flagGB];

  const handleDownloadCV_ES = () => {
    ReactGA.event({
      category: "CV Download",
      action: "Click",
      label: "Sidebar CV ES"
    });
  };

  const handleDownloadCV_EN = () => {
    ReactGA.event({
      category: "CV Download",
      action: "Click",
      label: "Sidebar CV EN"
    });
  };

  return (
    <div className="sideBar bg-dark">
      {/* Header Section */}
      <div className="topSideBar pb-2 pt-3">
        <div className="text-center text-light">
          <h3 className="fw-bold mb-1">{t('general.name')}</h3>
          <p className="mb-1 text-warning">{t('general.title')}</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="sidebar-content px-3 py-2">
        {/* Language Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <Globe size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{t('sideBar.languagesTitle')}</h5>
            </div>
            <div className="row">
              {translations[language].general.languages.map((lang, index) => (
                <div className="col-6">
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <img src={flags[index]} alt={lang.language} className="flag-icon" />
                    <span className="fw-bold text-warning">{lang.level}</span>
                  </div>  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <Code size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{t('sideBar.techStackTitle')}</h5>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h6 className="text-warning mb-2 small text-center">{translations[language].sideBar.techStack[0].title}</h6>
                <ul className="tech-list">
                  {translations[language].sideBar.techStack[0].description.split(', ').map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="text-warning mb-2 small text-center">{translations[language].sideBar.techStack[1].title}</h6>
                <ul className="tech-list">
                  {translations[language].sideBar.techStack[1].description.split(', ').map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deploy Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <CloudUpload size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{translations[language].sideBar.techStack[2].title}</h5>
            </div>
            <ul className="tech-list">
              {translations[language].sideBar.techStack[2].description.split(', ').map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Methodologies Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <Tools size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{translations[language].sideBar.techStack[3].title}</h5>
            </div>
            <ul className="tech-list">
              {translations[language].sideBar.techStack[3].description.split(', ').map((tech, index) => (
                <li key={index}>
                  <Check className="text-warning me-2" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
           {/* CV Download Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <FileEarmarkPerson size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{t('sideBar.cvTitle')}</h5>
            </div>
            <div className="row justify-content-center g-4">
              {translations[language].general.languages.map((cv, index) => (
                <div className="col-6" key={cv.id}>
                  <div 
                    className="p-2 rounded-4 text-center" 
                    style={{
                      background: "linear-gradient(45deg, rgba(33,37,41,0.95) 0%, rgba(33,37,41,0.8) 100%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <a
                      href={index === 0 ? cvEsp : cvEng}
                      download={cv.filename}
                      onClick={() => index === 0 ? handleDownloadCV_ES() : handleDownloadCV_EN()}
                      className="btn w-100 position-relative overflow-hidden py-2 px-3"
                      style={{
                        background: "linear-gradient(45deg, #ffc107 0%, #ff9800 100%)",
                        border: "none",
                        color: "#000",
                        fontWeight: "600",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        {index === 0 ? <Award size={16} /> : <Translate size={16} />}
                        <span className="fw-bold small">{cv.language}</span>
                        <Download size={14} />
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
      </div>

      {/* Footer Section */}
      <div className="botSideBar">
        <div className="row px-5 py-3 text-center">
          <div className="col-4">
            <a href="https://www.linkedin.com/in/farancibiat/" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </div>
          <div className="col-4">
            <a href="https://github.com/Farancibiat" target="_blank" rel="noreferrer">
              <Github />
            </a>
          </div>
          <div className="col-4">
            <Link to="/contact">
              <EnvelopeFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
