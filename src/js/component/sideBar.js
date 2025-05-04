import React from "react";
import "../styles/sideBar.css";
import { Link } from "react-router-dom";
import {
  Check,
  Github,
  Linkedin,
  EnvelopeFill,
} from "react-bootstrap-icons";
import profile from "../../assets/img/profile.jpg";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";

export const SideBar = () => {

  return (
    <>
      <div className="sideBar bg-dark">
        <div className="topSideBar pb-2">
          <div className="row pt-3 px-3">
            <div className="text-center">
              <img src={profile} alt="profile" className="prof-foto" />
            </div>
          </div>
          <div className="text-center text-light">
            <h3>Felipe Arancibia</h3>
            <p className="mb-1">Desarrollador Full Stack</p>
            <p>
              <em>Administrador de Empresas de turismo</em>
            </p>
          </div>
        </div>
        <div className="contentSideBar">
          <div className="idioma text-center px-4 text-light">
            <h5 className="py-2">Idiomas</h5>
            <div className="row">
              <div className="col-6">
                <div className="circle mb-2 mx-auto">
                  <h6 className="circleText text-light">100%</h6>
                </div>
                <p>Español - Nativo</p>
              </div>
              <div className="col-6 ">
                <div className="circle mb-2 mx-auto">
                  <h6 className="circleText text-light ">90%</h6>
                </div>
                <p>Inglés - C2</p>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="codeblock text-center px-4">
            <h5 className="text-light text-center">Stack Tecnológico</h5>
            <div className="container">
              <div className="row text-light">
                <div className="col-12 col-md-6">
                  <h6 className="text-warning mb-2">Frontend</h6>
                  <ul className="ps-0 text-start">
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
                <div className="col-12 col-md-6">
                  <h6 className="text-warning mb-2">Backend</h6>
                  <ul className="ps-0 text-start">
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
          <hr className="bg-light mx-4" />
          <div className="deployblock text-center px-4 text-light mb-3">
            <h5 className="text-center">Cloud & DevOps</h5>
            <div className="row">
              <div className="col-12">
                <ul className="ps-0 text-start">
                  <li>Azure</li>
                  <li>CI/CD Pipelines</li>
                  <li>Vercel / Netlify</li>
                  <li>Heroku</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="knoledgeblock text-light px-4">
            <div className="row text-light">
              <div className="col-12">
                <h5 className="text-center">Metodologías y Herramientas</h5>
                <ul className="ps-0 text-start">
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
          </div>
          <hr className="bg-light mx-4" />
          <div className="cvblock text-center text-light pb-4">
            <h5 className="pb-4">Descargar CV</h5>
            <div className="row">
              <div className="col-12 col-sm-6">
                <a
                  href={cvEsp}
                  download="Felipe_Arancibia_CV_Esp.pdf"
                  className="text-decoration-none"
                >
                  <div className="cv mx-auto" />
                  Español
                </a>
              </div>
              <div className="col-12 text-center col-sm-6">
                <a
                  href={cvEng}
                  download="Felipe_Arancibia_CV_Eng.pdf"
                  className="text-decoration-none"
                >
                  <div className="cv mx-auto" />
                  English
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="botSideBar">
          <div className="row px-5 py-3 text-center">
            <div className="col-4 ">
              <a href="https://www.linkedin.com/in/farancibiat/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </div>
            <div className="col-4 ">
              <a href="https://github.com/Farancibiat" target="_blank" rel="noreferrer">
                <Github />
              </a>
            </div>
           
            <div className="col-4 ">
              <Link to="/contact">
                <EnvelopeFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
