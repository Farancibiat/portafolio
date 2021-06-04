import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import NavigationBar from "./component/navigationBar";
import SideBar from "./component/sideBar";

import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Experience from "./pages/experience"
import About from "./pages/about";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <SideBar />
            </div>
            <div className="col-12 col-sm-8">
                <Switch>
                  <Route exact path="/">
                    <About />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path="/Contact">
                    <Contact />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path="/experience">
                    <Experience />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path="/projects">
                    <Projects />
                  </Route>
                </Switch>

            </div>
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
