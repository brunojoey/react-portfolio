import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/HomePage/Home";
import Portfolio from "../src/pages/Portfolio";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = {["/", "/Home"]}>
            <Home />
          </Route>
          <Route exact path = "/About">
            <About />
          </Route>
          <Route exact path = "/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path = "/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
