import React from "react";
import { NavLink } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import classes from "./ActionBar.module.css";


function ActionBar() {
  return (
    <div>
      <ul className={classes.flexlist}>
        <li>
          <GlobeAltIcon className={classes.icon}/>
        </li>
        <li>
          <NavLink to="/contact">Contact Sales</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Get Started</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ActionBar;
