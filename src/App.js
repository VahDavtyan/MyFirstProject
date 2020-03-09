import React from 'react';
import './App.css';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import FormList from './Components/FormList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Route>
        <Switch>
          <Route path="/ToDoList">
            <ToDoList />
          </Route>
          <Route path="/FormList">
            <FormList />
          </Route>
          <Routecle path="/">
            <Header />
          </Routecle>
        </Switch>
      </Route>
    </div>
  );
}
