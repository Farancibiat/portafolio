import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../context/LanguageContext";
import { 
  FileEarmarkPerson, 
  LaptopFill, 
  EnvelopeFill, 
  ArrowRightCircle,
  Database,
  Tools,
  Kanban,
  Folder
} from "react-bootstrap-icons";
import BodyFooter from "../component/bodyFooter";
import profile from "../../assets/img/profile.jpg";
import "../styles/common.css"; // Import common styles

export const About = () => {
  const { t } = useTranslations();
  
  // Efecto para cambiar el título del documento (opcional, pero bueno para SEO y UX)
  React.useEffect(() => {
    document.title = t('aboutPage.pageTitle') + " - Felipe Arancibia"; // Añade tu nombre o el de tu sitio
  }, [t]);

  return (
    <>
      <div className="bodyFrame">
        <div className="contentScroller">
          <div className="px-4 py-4 bg-dark card" style={{ border: "none", borderRadius: "15px" }}>
            {/* Hero Section */}
            <div className="row align-items-center mb-4">
              <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center">
                <div className="profile-container">
                  <img 
                    src={profile} 
                    alt={t('aboutPage.heroName')}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-9 col-md-8 text-center text-md-start">
                <h1 className="display-4 fw-bold text-warning mb-3">
                  {t('aboutPage.heroName')}
                </h1>
                <p className="lead text-light mb-4">
                  {t('aboutPage.heroSubtitle')}
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <Link to="/projects" className="btn btn-warning px-4 py-2 text-dark">
                    {t('aboutPage.heroViewProjects')} <ArrowRightCircle className="ms-2" />
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light px-4 py-2">
                    {t('aboutPage.heroContact')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-warning mb-0">{t('aboutPage.skillsTitle')}</h2>
                    <small className="text-light opacity-75">
                      {t('aboutPage.skillsDisclaimer')} <Link to="/experience" className="text-warning">{t('aboutPage.skillsDisclaimerLink')}</Link>
                    </small>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <LaptopFill size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">{t('aboutPage.skillsFrontendTitle')}</h5>
                          <p className="text-light opacity-75 mb-0">{t('aboutPage.skillsFrontendDesc')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Database size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">{t('aboutPage.skillsBackendTitle')}</h5>
                          <p className="text-light opacity-75 mb-0">{t('aboutPage.skillsBackendDesc')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Tools size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">{t('aboutPage.skillsToolsTitle')}</h5>
                          <p className="text-light opacity-75 mb-0">{t('aboutPage.skillsToolsDesc')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="d-flex align-items-center">
                        <div className="bg-warning p-2 rounded-circle me-3">
                          <Kanban size={20} className="text-dark" />
                        </div>
                        <div>
                          <h5 className="text-light mb-1">{t('aboutPage.skillsMethodologiesTitle')}</h5>
                          <p className="text-light opacity-75 mb-0">{t('aboutPage.skillsMethodologiesDesc')}</p>
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
                      <h3 className="card-title mb-0">{t('aboutPage.cardExperienceTitle')}</h3>
                    </div>
                    <p className="card-text text-dark">
                      {t('aboutPage.cardExperienceText')}
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/experience" className="btn btn-warning px-4 text-dark">
                        {t('aboutPage.cardExperienceButton')} <ArrowRightCircle className="ms-2" />
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
                        <Folder size={24} className="text-dark" />
                      </div>
                      <h3 className="card-title mb-0">{t('aboutPage.cardProjectsTitle')}</h3>
                    </div>
                    <p className="card-text text-dark">
                      {t('aboutPage.cardProjectsText')}
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/projects" className="btn btn-warning px-4 text-dark">
                        {t('aboutPage.cardProjectsButton')} <ArrowRightCircle className="ms-2" />
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
                      <h3 className="card-title mb-0">{t('aboutPage.cardContactTitle')}</h3>
                    </div>
                    <p className="card-text text-dark">
                      {t('aboutPage.cardContactText')}
                    </p>
                    <div className="mt-auto pt-3">
                      <Link to="/contact" className="btn btn-warning px-4 text-dark">
                        {t('aboutPage.cardContactButton')} <ArrowRightCircle className="ms-2" />
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
