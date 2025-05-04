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
            <p className="mb-1">Desarrollador Web Full Stack Jr.</p>
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
            {/* <div className="row mt-2">
              <div className="col-12">
                <p className="small fst-italic">Experiencia en entornos laborales internacionales y comunicación técnica fluida en ambos idiomas.</p>
              </div>
            </div> */}
          </div>
          <hr className="bg-light mx-4" />
          <div className="codeblock text-center px-4">
            <h5 className="text-light text-center">Stack</h5>
            <div className="container">
              <div className="row text-light">
                <div className="col-12 col-md-6">
                  <ul className="ps-0 text-start">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Javascript</li>
                    <li>TypeScript</li>
                    <li>React JS</li>
                    <li>Redux</li>
                    <li>Next Js</li>
                    <li>Tailwind</li>
                    <li>Ant Design</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="ps-0 text-start">
                    <li>Java</li>
                    <li>Spring Framework</li>
                    <li>REST API's</li>
                    <li>Express</li>
                    <li>Sails JS</li>
                    <li>FLASK</li>
                    <li>SQLAlchemy</li>
                    <li>PostgreSQL</li>
                    <li>Python</li>
                    <li>CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="deployblock text-center px-4 text-light mb-3">
            <h5 className="text-center">Deployments</h5>
            <div className="row">
              <div className="col-12">
                <ul className="ps-0 text-start">
                  <li>Heroku</li>
                  <li>Netifly</li>
                  <li>Vercel</li>
                  <li>Jenkins</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="knoledgeblock text-light px-4">
            <div className="row text-light">
              <div className="col-12">
                <h5 className="text-center">Stack adicional</h5>
                <ul className="ps-0 text-start">
                  <li>
                    <Check className="text-warning me-2" />
                    Git - Github - Bitbucket - GitLab
                  </li>
                  <li>
                    <Check className="text-warning me-2" />
                    Azure
                  </li>
                  <li>
                    <Check className="text-warning me-2" />
                    Metodología Scrum Agile
                  </li>
                  <li>
                    <Check className="text-warning me-2" />
                    Administración Google Workspace
                  </li>
                  <li>
                    <Check className="text-warning me-2" />
                    Jira 
                  </li>
                  <li>
                    <Check className="text-warning me-2" />
                    Testing (Jest, React Testing Library)
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
              <a href="https://www.linkedin.com/in/farancibiat/">
                <Linkedin />
              </a>
            </div>
            <div className="col-4 ">
              <a href="https://github.com/Farancibiat">
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
