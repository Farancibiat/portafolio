import React from "react";
import BodyFooter from "../component/bodyFooter";
import cvEsp from "../../assets/Felipe Arancibia Esp.pdf";
import cvEng from "../../assets/Felipe Arancibia Eng.pdf";
export const Experience = () => {
  return (
    <>
      <div className="bodyFrame">
        <div className="container contentScroller">
          <div className="container my-4 px-5 pb-5 bg-dark card" style={{ border: "none" }}>
            <h1 className="text-center text-warning my-4" style={{ fontSize: "2rem", fontWeight: "500" }}>
              Experiencia
            </h1>

            <div className="accordion" id="accordionExperience">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ color: "rgb(133, 100, 4)", fontWeight: "bold" }}
                  >
                    Perfil
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExperience"
                >
                  <div className="accordion-body">
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ color: "rgb(133, 100, 4)", fontWeight: "bold" }}
                  >
                    Educación
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExperience"
                >
                  <div className="accordion-body">
                    <p>
                      <b>FULL STACK WEB DEVELOPER</b>
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ color: "rgb(133, 100, 4)", fontWeight: "bold" }}
                  >
                    Desarrollador Web Full Stack
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExperience"
                >
                  <div className="accordion-body">
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ color: "rgb(133, 100, 4)", fontWeight: "bold" }}
                  >
                    Administrador de Empresas / Licenciado en Turismo
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExperience"
                >
                  <div className="accordion-body">
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
        </div>
        <BodyFooter />
      </div>
    </>
  );
};
export default Experience;
