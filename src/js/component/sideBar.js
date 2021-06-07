import React from "react";
import "../styles/sideBar.css";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png";
import jscript from "../../img/js.png";
import reactjs from "../../img/Reactjs.png";
import python from "../../img/python.png";
import postgresql from "../../img/postgresql.png";
import flask from "../../img/Flask.png";
import sqlAlchemy from "../../img/sqlAlchemy.png";
import sql from "../../img/sql.png";

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
            <h5 className="text-light text-center">Herramientas</h5>
            <div className="row mt-3">
              <div className="col-12 col-sm-4">
                <img src={html5} alt="HTML5" width="40" />
                <p className="text-light mb-1">HTML5</p>
              </div>
              <div className="col-12 col-sm-4">
                <img src={css3} alt="CSS3" width="40" />
                <p className="text-light">CSS3</p>
              </div>
              <div className="col-12 col-sm-4">
                <img src={jscript} alt="JS" width="37" />
                <p className="text-light">Javascript</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-4">
                <img src={reactjs} alt="reactjs" width="40" />
                <p className="text-light pt-3">React.js</p>
              </div>
              <div className="col-12 col-sm-4 pt-2">
                <img src={python} alt="Python" width="40" />
                <p className="text-light pt-1">Python</p>
              </div>
              <div className="col-12 col-sm-4">
                <img src={flask} alt="Flask" width="50" />
                <p className="text-light">Flask</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-4 pt-1">
                <img src={postgresql} alt="postgreSQL" width="40" />
                <p className="text-light">PostgreSql</p>
              </div>
              <div className="col-12 col-sm-4 pt-1">
                <img src={sql} alt="SQL" width="70" />
                <p className="text-light pt-1">SQL</p>
              </div>
              <div className="col-12 col-sm-4 pt-2">
                <img src={sqlAlchemy} alt="sqlAlchemy" width="100" />
                <p className="text-light text-center pt-2">SqlAlchemy</p>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="knoledgeblock text-light px-4">
            <div className="row">
              <div className="col-12">
                <h5 className="text-center">Conocimientos</h5>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  GIT - Github
                </p>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  Bootstrap
                </p>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  Flux/Context
                </p>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  Metodología Scrum Agile
                </p>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  Heroku
                </p>
                <p className="sbli">
                  <Check className="text-warning mr-2" />
                  Administración Google Workspace
                </p>
              </div>
            </div>
          </div>
          <hr className="bg-light mx-4" />
          <div className="cvblock text-center text-light pb-4">
            <h5 className="pb-4">Descargar CV</h5>
            <div className="row">
              <div className="col-12 col-sm-6">
                <a
                  href="https://drive.google.com/file/d/10Ar2INlDPyjfeghdNyfNVKbuccOPvm_1/view?usp=sharing"
                  download
                >
                  <div className="cv mx-auto" />
                  Español
                </a>
              </div>
              <div className="col-12 text-center col-sm-6">
                <a
                  href="https://drive.google.com/file/d/1fDSBJZO4O_dIQde8agTZ7J_o91ik1R_1/view?usp=sharing"
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
