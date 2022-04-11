import React from "react";
import BodyFooter from "../component/bodyFooter";
import { Link } from "react-router-dom";

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
                    Me gusta trabajar en equipo, generar lazos de confianza que
                    facilitenel trabajo colaborativo y trabajar en ambientes
                    distendidos.
                    <br />
                    <br />
                    Me acomoda t rabajar enfocado en metas y analizo
                    constantemente mientorno en busca de oportunidades que me
                    ayuden a obtener mayorbienestar y mejores resultados, me
                    gusta enseñar y valoro el consejode mis colegas.
                    <br />
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
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <b>Educación</b>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse "
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      <b>FULL STACK WEB DEVELOPER</b>{" "}
                      <p>4Geeks Academy | Diciembre 2020 - Mayo 2021</p>
                    </p>

                    <p>
                      <b>
                        ADMINISTRACIÓN DE EMPRESAS - LICENCIATURA EN TURISMO
                      </b>
                      <p>Universidad Austral de Chile | 2013 - 2016</p>
                    </p>

                    <p>
                      <b>INGENIERÍA COMERCIAL</b>
                      <p>
                        Universidad Técnica Federico Santa María | 2009 - 2012
                        <p>
                          <em>Incompleta </em>
                        </p>
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
                    <p>
                      <b>DESARROLLADOR WEB FULL STACK</b>
                      <p>MoveApps | Agosto 2021 - Actualidad</p>
                    </p>
                    <p>
                      Trabajo con metodología scrum agile, uso de Bitbucket y
                      Azure.
                    </p>
                    <ul>
                      <li>
                        Desarrollo de features para API, sitio de administración
                        y website para{" "}
                        <a
                          className="text-danger"
                          href="https://plataforma.chileconverge.cl/"
                        >
                          Chile Converge
                        </a>
                        .
                      </li>
                      <li>
                        Desarrollo de features para website de{" "}
                        <a className="text-danger" href="https://uno.cl/">
                          AFP Uno
                        </a>
                        .
                      </li>
                      <li>
                        Desarrollo front para proyecto de atención de clientes
                        de MOVICARE.
                      </li>
                    </ul>
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
                    href="https://drive.google.com/file/d/1hZq3nHyhrF1wWlby3E2_2TOvNNOskdte/view?usp=sharing"
                    download
                  >
                    <div className="cv mx-auto" />
                    Español
                  </a>
                </div>
                <div className="col-12 text-center col-sm-2">
                  <a
                    href="https://drive.google.com/file/d/17bB6WH9tQWb7nE_hIALjIVZDAYZ6hSF_/view?usp=sharing"
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
