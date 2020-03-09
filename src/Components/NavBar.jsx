import React from 'react';
import logo from './react-brands.svg';
import { Link } from 'react-router-dom';
import '../App.css'




const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-nav ml-5" href="https://reactjs.org/">
          <img src={logo} alt="logo"  className="App-logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link text-white text-uppercase ml-5" href="#">
                
                <i className="fas fa-home"></i>&nbsp; <Link className="links" to="/" >Header</Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase ml-5" href="#">
                <Link className="links" to="/ToDoList"  >ToDo List</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase ml-5" href="#">
                <Link className="links" to="/FormList" >Form</Link>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
