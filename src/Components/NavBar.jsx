import React from 'react'
import {Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function () {
    
const history = useNavigate();
const location = useLocation();
const logOutbtn = () => {
  localStorage.removeItem("token");
  navigateTo("/");
};
    
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/body">
            Navbar
          </Link>
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
                <Link
                  className={`nav-link  ${
                    location.path === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/body"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.path === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn btn-primary mx-2" to="/">
                  Login
                </Link>
                <Link className="btn btn-primary" to="/SignUp">
                  SignUp
                </Link>
              </form>
            ) : (
              <Link className="btn btn-primary" onClick={logOutbtn} to="/">
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
