import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            <h1>Alan's CRUD</h1>
          </Link>
          <NavLink to="/posts">Articles</NavLink>
          <br />
          <NavLink to="/about">About</NavLink>
          <br />
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Nav;
