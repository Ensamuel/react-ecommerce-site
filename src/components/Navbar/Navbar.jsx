import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink to='/' className="navbar-brand">
            LACREED
          </NavLink>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" style={{ textDecoration: "none" }}>
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
