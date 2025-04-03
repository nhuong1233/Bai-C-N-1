import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
       
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex me-10">
            <NavLink className="nav-link active" aria-current="page" to={"/"}>
              React router dom
            </NavLink>
            <NavLink className="nav-link" to={"/home"}>
                Home
            </NavLink>
            <NavLink className="nav-link" to={"/student/list"}>
              Student
            </NavLink>
            <a className="nav-link" to={"/"}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
