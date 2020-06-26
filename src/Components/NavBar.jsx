import React from "react";
import logo from "./react-brands.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <i className="far fa-home-heart"></i>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "black" }}
      >
        <a className="navbar-nav ml-4" href="https://reactjs.org/">
          <img src={logo} alt="logo" className="App-logo" />
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

        <div id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <div className="nav-link text-white  ml-5">
                <div className="fas fa-home"></div>&nbsp;
                <Link className="links" to="/">
                  Food
                </Link>
                <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white  ml-1">
                <Link className="links" to="/HouseholdGoods">
                  Household Goods
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Tableware
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Clothes
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Shoes
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Bags and accessories
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Jawerly
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/ToDoList">
                  Cosmetics and perfumes
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/FormList">
                  Toys
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/FormList">
                  Stationary Accessories
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/FormList">
                  Electronics
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/FormList">
                  Furniture
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white ml-1">
                <Link className="links" to="/FormList">
                  Tour Packages
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-link text-white ml-1"></div>
        <i className="large material-icons" type="button">home</i>
      </nav>
    </div>
  );
};

export default NavBar;
