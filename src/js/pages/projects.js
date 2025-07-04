import { useEffect } from "react";
import { useTranslations } from "../store/LanguageContext";
import BodyFooter from "../component/bodyFooter";
import { Github, Folder } from "react-bootstrap-icons";
import "../styles/common.css"; 
import "../styles/projects.css";
import { translations } from "../store/translations";

export const Projects = () => {
  const { t, language } = useTranslations();

  useEffect(() => {
    document.title = t('projectsPage.pageTitle') + " - Felipe Arancibia";
  }, [t, language]);

  const renderProjectRows = () => {
    const rows = [];
    const projects = translations[language].projectsPage.projects;
    for (let i = 0; i < projects.length; i += 3) {
      const rowProjects = projects.slice(i, i + 3);
      rows.push(
        <div className="row project-row" key={`row-${i}`}>
          {rowProjects.map((project) => (
            <div className="col-12 col-sm-4 project-col" key={project.id}>
              <div className="styledCard">
                <h4>{project.titleKey ? t(project.titleKey) : project.title}</h4>
                <p>{project.descriptionKey ? t(project.descriptionKey) : project.description}</p>
                <div>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                      <button>{t('projectsPage.viewProjectButton')} &gt;&gt;</button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      <button className="btn2">
                        {t('projectsPage.viewRepoButton')} <Github />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          {rowProjects.length < 3 && 
            Array(3 - rowProjects.length).fill().map((_, index) => (
              <div className="col-12 col-sm-4" key={`empty-${index}`}></div>
            ))
          }
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <div className="bodyFrame">
        <div className="contentScroller">
          <div className="px-4 py-4">
            <h1 className="text-center text-warning mb-4" style={{ fontSize: "2rem", fontWeight: "500" }}>
              <Folder className="me-2" /> {t('projectsPage.pageTitle')}
            </h1>
            <p className="text-light mb-4">
              {t('projectsPage.pageDescriptionParagraph1')}
              <br /><br />
              {t('projectsPage.pageDescriptionParagraph2')}{" "}
              <a href="https://github.com/Farancibiat" className="text-warning" target="_blank" rel="noreferrer">
                Github <Github />
              </a>
            </p>
            {renderProjectRows()}
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};
export default Projects;

