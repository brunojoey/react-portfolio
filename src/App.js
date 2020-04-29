import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import buildRoutes from "./utils/buildRoutes";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
      <Router>
        <Switch>
          <Route exact path = {buildRoutes("/"), buildRoutes("/home")} component={Home} />
          <Route exact path = {buildRoutes("/portfolio")} component={Portfolio} />
          <Route exact path = {buildRoutes("/contact")} component={Contact} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
