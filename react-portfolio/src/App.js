import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <Portfolio />
          </Route>
          <Route>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
