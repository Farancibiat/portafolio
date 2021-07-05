import React from "react";
import BodyFooter from "../component/bodyFooter";
import { Github } from "react-bootstrap-icons";
import "../styles/projects.css";
export const Projects = () => {
  return (
    <>
      <div className=" bodyFrame">
        <div className="container contentScroller">
          <div className="container my-4 px-5 pb-5  bg-dark card">
            <h1 className="display-4 fw-bold text-center text-warning my-4">
              Proyectos
            </h1>
            <p className="text-light">
              Esta es una selección de proyectos, pero puedes verlos todos en mi{" "}
              <a href="https://github.com/Farancibiat" className="text-danger">
                Github <Github />
              </a>
            </p>
            <div className="row">
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>Pichangapp</h4>
                  <p>
                    Aplicación Web en desarrollo para arrendar canchas de futbol
                    en Chile, implementada con url .cl y hosting de Heroku.
                  </p>
                  <a href="http://www.pichangapp.cl">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/farancibiat/pichangapp">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>Star Wars Blog</h4>
                  <p>
                    Blog de ejercicio para practicar manipulación de datos
                    utilizando fetch, react y flux/context.
                  </p>
                  {/* <a href="http://www.pichangapp.cl">
                  <button>Visitar Proyecto &gt;&gt;</button>
                  </a> */}
                  <a href="https://github.com/Farancibiat/exercise-starwars-blog-reading-list">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>Pokeapi Test</h4>
                  <p>
                    Este sitio es una pokedéx sencilla, usa la API
                    "pokepi.co", tiene un buscador y guarda favoritos, implementada en
                    Heroku
                  </p>
                  <a href="https://pokemon-houm-test.herokuapp.com/">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/Farancibiat/pokemon-site">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              
            </div>
            <div className="row">
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>BattleShip</h4>
                  <p>
                    Este es el clásico juego de Combate Naval, desarrollado para
                    un test laboral. El juego es básico y está implementado
                    Heroku.
                  </p>
                  <a href="http://farancibiat-battleship.herokuapp.com">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/farancibiat/battlefield-game">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>To Do List</h4>
                  <p>
                    Applicación Web para ejercitar manipulación de datos en
                    React y la modificación de datos en una Api externa (CRUD).
                  </p>
                  {/* <a href="http://www.pichangapp.cl">
                  <button>Visitar Proyecto &gt;&gt;</button>
                  </a> */}
                  <a href="https://github.com/farancibiat/todolist-fetch">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              

              <div className="col-12 col-sm-4 px-0"></div>
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};
export default Projects;

