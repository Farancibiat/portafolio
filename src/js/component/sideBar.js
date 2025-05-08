import React from "react";
import ReactGA from "react-ga4";
import { useTranslations } from "../context/LanguageContext";
import "../styles/sideBar.css";
import { Link } from "react-router-dom";
import {
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

export const SideBar = () => {
  const { t } = useTranslations();

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
          <h3 className="fw-bold mb-1">{t('sideBar.title')}</h3>
          <p className="mb-1 text-warning">{t('sideBar.jobTitle')}</p>
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
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <img src={flagES} alt="Español" className="flag-icon" />
                  <span className="fw-bold text-warning">{t('sideBar.cvES')}</span>
                </div>
                <p className="text-center text-light small mb-0">{t('sideBar.levelNative')}</p>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <img src={flagGB} alt="Inglés" className="flag-icon" />
                  <span className="fw-bold text-warning">{t('sideBar.cvEN')}</span>
                </div>
                <p className="text-center text-light small mb-0">{t('sideBar.levelC2')}</p>
              </div>
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
                <h6 className="text-warning mb-2 small text-center">{t('sideBar.frontendTitle')}</h6>
                <ul className="tech-list">
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Tailwind</li>
                  <li>Ant Design</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>Shadcn UI</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="text-warning mb-2 small text-center">{t('sideBar.backendTitle')}</h6>
                <ul className="tech-list">
                  <li>Java / Spring</li>
                  <li>Express / Node.js</li>
                  <li>Flask / Python</li>
                  <li>REST APIs</li>
                  <li>PostgreSQL</li>
                  <li>SQLAlchemy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <CloudUpload size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{t('sideBar.deploymentTitle')}</h5>
            </div>
            <ul className="tech-list">
              <li>Azure</li>
              <li>CI/CD Pipelines</li>
              <li>Vercel / Netlify</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="card bg-dark border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="icon-circle bg-warning me-3">
                <Tools size={16} className="text-dark" />
              </div>
              <h5 className="text-light mb-0">{t('sideBar.methodologyTitle')}</h5>
            </div>
            <ul className="tech-list">
              <li>
                <Check className="text-warning me-2" />
                Git - Github - Bitbucket
              </li>
              <li>
                <Check className="text-warning me-2" />
                Agile - Scrum
              </li>
              <li>
                <Check className="text-warning me-2" />
                Jira - Project Management
              </li>
              <li>
                <Check className="text-warning me-2" />
                Testing (Jest, React Testing Library)
              </li>
              <li>
                <Check className="text-warning me-2" />
                Google Workspace Admin
              </li>
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
            <div className="row">
              <div className="col-6 text-center">
                <a
                  href={cvEsp}
                  download="Felipe_Arancibia_CV_Esp.pdf"
                  className="cv-button d-block text-center p-2"
                  onClick={handleDownloadCV_ES}
                >
                  <Download className="me-1" size={12} />
                  {t('sideBar.cvES')}
                </a>
              </div>
              <div className="col-6 text-center">
                <a
                  href={cvEng}
                  download="Felipe_Arancibia_CV_Eng.pdf"
                  className="cv-button d-block text-center p-2"
                  onClick={handleDownloadCV_EN}
                >
                  <Download className="me-1" size={12} />
                  {t('sideBar.cvEN')}
                </a>
              </div>
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
