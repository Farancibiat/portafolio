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
              <a href="https://github.com/Farancibiat" className="text-danger" target="_blank" rel="noreferrer">
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
                  <a href="http://www.pichangapp.cl" target="_blank" rel="noreferrer">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/farancibiat/pichangapp" target="_blank" rel="noreferrer">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>BattleShip</h4>
                  <p>
                    Este es el clásico juego de Combate Naval, desarrollado para
                    un test laboral. El juego es básico y está implementado
                    Heroku.
                  </p>
                  <a href="http://farancibiat-battleship.herokuapp.com" target="_blank" rel="noreferrer">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/farancibiat/battlefield-game" target="_blank" rel="noreferrer">
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
                  <a href="https://pokemon-houm-test.herokuapp.com/" target="_blank" rel="noreferrer">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/Farancibiat/pokemon-site" target="_blank" rel="noreferrer">
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
                  <h4>Agenda Dashboard</h4>
                  <p>
                   Este es un dashboard básico realizado con ANT DESIGN, lee informacion
                   de contactos desde una Api falsa gratuita. Implementado en Heroku.
                  </p>
                  <a href="https://moveapp-dashboard.herokuapp.com/" target="_blank" rel="noreferrer">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/Farancibiat/user-dashboard" target="_blank" rel="noreferrer">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="styledCard">
                  <h4>Movie Shopping Cart</h4>
                  <p>
                    Este proyecto es un carrito de compras básico, responsivo realizado con HTML, CSS y Javascript full Vanilla, deploy en Netlify
                  </p>
                  <a href="https://farancibiat-shoppingcart.netlify.app/" target="_blank" rel="noreferrer">
                    <button>Visitar Proyecto &gt;&gt;</button>
                  </a>
                  <a href="https://github.com/Farancibiat/ShopingCart-FullVanilla" target="_blank" rel="noreferrer">
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
                  
                  <a href="https://github.com/Farancibiat/exercise-starwars-blog-reading-list" target="_blank" rel="noreferrer">
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
                  <h4>To Do List</h4>
                  <p>
                    Applicación Web para ejercitar manipulación de datos en
                    React y la modificación de datos en una Api externa (CRUD).
                  </p>
                  <a href="https://github.com/farancibiat/todolist-fetch" target="_blank" rel="noreferrer">
                    <button className="btn2">
                      Repositorio <Github />
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0"></div>
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

