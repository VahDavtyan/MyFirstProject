import React from "react";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/HouseholdGoods"></Route>
          <Route path="/FormList"></Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
