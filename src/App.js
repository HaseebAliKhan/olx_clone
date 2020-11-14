import React from 'react';
import './App.css';
import "./Props.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./comps/HomePage";
import Header from "./comps/Header";
import Footer from "./comps/Footer";

import Details from "./comps/Details"
import UpAds from './comps/UpAds';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Header />
          <UpAds />
          <HomePage />
          <Footer />
        </Route>
        <Route path="/Details" >
          <div className="app" id="app">
            <div className="app1" id="container">
              <Header />
              <Details />
              <Footer />
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
