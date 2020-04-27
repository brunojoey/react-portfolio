import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import './App.css';

function App() {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <Header />
      <div className="content">
      <Router>
        <Switch>
          <Route exact path = {path + ["/", "/Home"]} component={Home} />
          <Route exact path = {path + "/Portfolio"} component={Portfolio} />
          <Route exact path = {path + "/Contact"} component={Contact} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
