import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import buildRoutes from "./utils/buildRoutes";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Resume from "../src/pages/Resume";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="content">
        <Router>
          <Header />
          <Switch>
            <Route exact path={buildRoutes("/", "/home")} component={Home} />
            <Route exact path={buildRoutes("/portfolio")} component={Portfolio} />
            <Route exact path={buildRoutes("/resume")} component={Resume} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
