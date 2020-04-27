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
          <Route exact path = {["/", "/Home"]} component={Home} />
          <Route exact path = "/About" component={About} />
          <Route exact path = "/Portfolio" component={Portfolio} />
          <Route exact path = "/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
