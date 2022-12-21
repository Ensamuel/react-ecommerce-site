import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="companylogo.png" alt="company logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to = '/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/products'>
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/'>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/'>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-secondary me-1">
              <i className="fa fa-sign-in"> </i> Sign in
              </a>
              <a href="" className="btn btn-outline-secondary me-1">
              <i className="fa fa-sign-out"></i> Sign out
              </a>
              <a href="" className="btn btn-outline-secondary me-1">
              <i className="fa fa-shopping-cart"></i> Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}