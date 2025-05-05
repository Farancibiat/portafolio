import React from "react";
import BodyFooter from "../component/bodyFooter";
import { Github, Folder } from "react-bootstrap-icons";
import projects from "../store/projectsData";
import "../styles/common.css"; 
import "../styles/projects.css";

export const Projects = () => {
  // Function to render project cards in rows of 3
  const renderProjectRows = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
      const rowProjects = projects.slice(i, i + 3);
      rows.push(
        <div className="row project-row" key={`row-${i}`}>
          {rowProjects.map((project) => (
            <div className="col-12 col-sm-4 project-col" key={project.id}>
              <div className="styledCard">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div>
                  {project.hasLiveDemo && (
                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                      <button>Visitar Proyecto &gt;&gt;</button>
                    </a>
                  )}
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Fill empty spots in the last row if needed */}
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
          <div className="px-4 py-4 bg-dark card" style={{ border: "none", borderRadius: "15px" }}>
            <h1 className="text-center text-warning mb-4" style={{ fontSize: "2rem", fontWeight: "500" }}>
              <Folder className="me-2" /> Proyectos
            </h1>
            <p className="text-light mb-4">
              Selección de proyectos desarrollados utilizando distintas tecnologías y frameworks.
              <br /><br />
              Todos los proyectos están disponibles en{" "}
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

