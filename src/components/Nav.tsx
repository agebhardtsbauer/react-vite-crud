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
          <NavLink to="/posts">posts</NavLink>
          <br />
          <NavLink to="/about">about</NavLink>
          <br />
          <NavLink to="/contact">contact</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Nav;
