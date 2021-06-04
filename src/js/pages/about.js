import React from "react";
import CvCard from "../../img/cv-card.png";
import PichCard from "../../img/pichangapp-card.png";
import BodyFooter from "../component/bodyFooter";
import { PersonLinesFill} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className=" bodyFrame">
        <div className="container contentScroller">
          <div className="container my-4 px-5 pb-5  bg-dark card">
            <h1 className="display-4 fw-bold text-center text-warning my-4">
             ¡Bienvenid@!
            </h1>
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <img src={CvCard} className="card-img-top" alt="Cv" />
                <div className="card-body">
                  <h5 className="card-title">Experiencia</h5>
                  <p className="card-text">
                    Revisa mi CV online o descargalo ¡Está en <b>inglés</b> y{" "}
                    <b>español</b>!
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/experience"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Ver CV
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <img src={PichCard} className="card-img-top" alt="Proyectos" />
                <div className="card-body">
                  <h5 className="card-title">Proyectos</h5>
                  <p className="card-text">
                    Revisa proyectos desarrollados en Github y activos.
                  </p>
                </div>

                <div className="card-footer">
                  <Link
                    to="/projects"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Ver Proyectos
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <div className="card-img-top bg-warning text-center py-4">
                  <PersonLinesFill
                    className="text-danger"
                    size={70}
                  ></PersonLinesFill>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Contacto</h5>
                  <p className="card-text text-light"></p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/contact"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Contacto
                  </Link>
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
