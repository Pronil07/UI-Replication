import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
function NavBar() {
  return (
    <ul className={classes.flexList}>
      <li>
        <NavLink to="/about">Why Asana?</NavLink>
      </li>
      <li>
        <NavLink to="/features">Features</NavLink>
      </li>
      <li>
        <NavLink to="/resources">Resources</NavLink>
      </li>
      <li>
        <NavLink to="/enterprise">Enterprise</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
