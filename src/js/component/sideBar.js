import React from "react";
import "../styles/sideBar.css";
import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
import {
  Check,
  Github,
  Linkedin,
  EnvelopeFill,
  TelephoneFill,
} from "react-bootstrap-icons";

// import { LinkContainer } from "react-router-bootstrap";

export const SideBar = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <div className="sideBar bg-dark">
        <div className="topSideBar pb-2">
          <div className="row pt-3">
            <div className="prof-foto mx-auto"></div>
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
            <h5 className="  py-2">Idiomas</h5>
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
            <h5 className="text-light text-center">Stack</h5>
            <div className="container">
              <div className="row text-light">
                <div className="col-12 col-md-6">
                  <ul className="pl-0 text-left">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Next Js</li>
                    <li>Tailwind</li>
                    <li>Ant Design</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li></li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="pl-0 text-left">
                    <li>REST API's</li>
                    <li>Sails JS</li>
                    <li>FLASK</li>
                    <li>SQLAlchemy</li>
                    <li>MYSQL</li>
                    <li>Python</li>
                    <li>Heroku</li>
                    <li>Netifly</li>
                    <li>Vercel</li>
                    <li>Jenkins</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6"></div>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="knoledgeblock text-light px-4">
            <div className="row text-light">
              <div className="col-12">
                <h5 className="text-center">Stack adicional</h5>
                <ul className="pl-0 text-left">
                  <li>
                    <Check className="text-warning mr-2" />
                    GIT - Github - Bitbucket
                  </li>
                  <li>
                    <Check className="text-warning mr-2" />
                    Azure
                  </li>
                  <li>
                    <Check className="text-warning mr-2" />
                    Metodología Scrum Agile
                  </li>
                  <li>
                    <Check className="text-warning mr-2" />
                    Administración Google Workspace
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
                  href="https://drive.google.com/file/d/1hZq3nHyhrF1wWlby3E2_2TOvNNOskdte/view?usp=sharing"
                  download
                >
                  <div className="cv mx-auto" />
                  Español
                </a>
              </div>
              <div className="col-12 text-center col-sm-6">
                <a
                  href="https://drive.google.com/file/d/17bB6WH9tQWb7nE_hIALjIVZDAYZ6hSF_/view?usp=sharing"
                  download
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
            <div className="col-3 ">
              <a href="https://www.linkedin.com/in/farancibiat/">
                <Linkedin />
              </a>
            </div>
            <div className="col-3 ">
              <a href="https://github.com/Farancibiat">
                <Github />
              </a>
            </div>
            <div className="col-3 ">
              <a href="tel:+56957097420">
                <TelephoneFill />
              </a>
            </div>
            <div className="col-3 ">
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
