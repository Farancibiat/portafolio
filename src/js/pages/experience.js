import React from "react";
import BodyFooter from "../component/bodyFooter";
import { Link } from "react-router-dom";;

export const Experience = () => {
  return (
    <>
      <div className=" bodyFrame">
        <div className="container contentScroller">
          <div className="container my-4 px-5 pb-5  bg-dark card">
            <h1 className="display-4 fw-bold text-center text-warning my-4">
              Experiencia
            </h1>

            <div className="accordion" id="accordionExample">

            <div className="card ">
                <div className="card-header p-0" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left p-3 alert-warning  bg-light"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <b> Perfil</b>
                    </button>
                  </h2>
                </div>
                 
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                Soy un profesional con interés en aprender herramientas de
                trabajo que mejoren la eficiencia de los recursos a través de
                herramientas digitales.
                <br />
                <br />
                Me gusta trabajar en equipo, generar lazos de confianza que
                faciliten el trabajo colaborativo y trabajar en ambientes
                distendidos.
                <br />
                <br />
                Me acomoda trabajar enfocado en metas y analizo constantemente
                mi entorno en busca de oportunidades que me ayuden a obtener
                mayor bienestar y mejores resultados, me gusta enseñar y valoro
                el consejo de mis colegas.
                <br />
                <br />
                Mis fortalezas están en el desarrollo lógico de aplicaciones y
                front-end. Ya sea back-end, front-end o full-stack, siempre
                prefiero los ambientes desafiantes con trabajo colectivo. <br />
                <br />
                <Link
                  to="/experience"
                  className="btn btn-sm btn-warning text-dark"
                >
                  Ver Experiencia
                </Link>
              </div>
            </div>
          </div>


              <div className="card ">
                <div className="card-header p-0" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left p-3 alert-warning  bg-light"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <b>Educación</b>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseTwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <b>FULL STACK WEB DEVELOPER</b>{" "}
                      <p>4Geeks Academy | Diciembre 2020 - Mayo 2021</p>
                    </p>

                    <p>
                      <b>ADMINISTRACIÓN DE EMPRESAS - LICENCIATURA EN TURISMO</b>
                      <p>Universidad Austral de Chile | 2013 - 2016</p>
                    </p>

                    <p>
                      <b>INGENIERÍA COMERCIAL</b>
                      <p>
                        Universidad Técnica Federico Santa María | 2009 - 2013<p><em>Incompleta </em></p>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed p-3 alert-warning bg-light"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <b>Desarrollador Web Full Stack</b>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body ">
                    Si quieres invertir en tu empresa,{" "}
                    <b>
                      <Link to="/contact" className="text-danger">
                        escribeme{" "}
                      </Link>
                    </b>
                    antes de que ya no esté disponible.
                    <br /> Si quieres ver mis códigos antes, revisalos{" "}
                    <b>
                      <Link to="/contact" className="text-danger">
                        aquí.
                      </Link>
                    </b>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed p-3 alert-warning bg-light"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <b>Administrador de Empresas / Licenciado en Turismo</b>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <b>ADMINISTRADOR</b>
                      <p>Pesquera Wendtfish | Junio 2020 - Marzo 2021</p>
                    </p>
                    <ul>
                      <li>
                        Desarrollo y operación de sistema de control financiero.
                      </li>
                      <li>Análisis y gestión de brechas administrativas.</li>
                      <li>Implementación de sistema G-suite.</li>
                      <li>Negociación y gestión de proveedores.</li>
                    </ul>
                    <p>
                      <b>DIRECTOR EJECUTIVO</b>
                      <p>
                        Corporación Chiloé Convention Bureau | Agosto 2019 -
                        Noviembre 2019
                      </p>
                    </p>
                    <ul>
                      <li>Evaluación de desempeño del proyecto.</li>
                      <li>
                        Regularización de brechas para rendición de PROFO.
                      </li>
                      <li>Rendición anual de fondos.</li>
                    </ul>
                    <p>
                      <b>JEFE DE DESARROLLO Y FINANZAS</b>
                      <p>Turismo Pehuén | octubre 2016 - Octubre 2018 </p>
                    </p>
                    <ul>
                      <li>
                        Desarrollo, proyección y control de la gestión
                        financiera y contable.
                      </li>
                      <li>Rediseño de sistema de gestión administrativa.</li>
                      <li>Gestor de proyecto web.</li>
                      <li>
                        Desarrollo y mantención de Manual de operación
                        institucional.
                      </li>
                      <li>Estructuración departamental de la empresa.</li>
                      <li>Responsable de gestión de Recursos Humanos. </li>
                    </ul>

                    <p>
                      <b>GERENTE DE OPERACIONES</b>
                      <p>Grupo Prioridad | Enero 2015 - Octubre 2016 </p>
                    </p>
                    <ul>
                      <li>Negociación y gestión de proveedores.</li>
                      <li>
                        Responsable de implementación de pantallas informativas
                        TERVAL.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-warning py-4">
              <h4 className="pb-4">Descargar CV</h4>
              <div className="row">
                <div className="col-0 col-sm-4"></div>
                <div className="col-12 col-sm-2">
                  <a
                    href="https://drive.google.com/file/d/1xnn89woj-6h8xrdZeIHeGsgfYnWE7FNO/view?usp=sharing"
                    download
                  >
                    <div className="cv mx-auto" />
                    Español
                  </a>
                </div>
                <div className="col-12 text-center col-sm-2">
                  <a
                    href="https://drive.google.com/file/d/1-QLFFzI1iu8sqvCjILiuyMXYqFtrv2ly/view?usp=sharing"
                    download
                  >
                    <div className="cv mx-auto" />
                    English
                  </a>
                </div>
                <div className="col-0 col-sm-4"></div>
              </div>
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};
export default Experience;
