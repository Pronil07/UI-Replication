import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={classes.flexBox}>
      <SparklesIcon className={classes.icon} />
      <Link to="/home">
        <h1 className={classes.name}>asana</h1>
      </Link>
    </div>
  );
}

export default Logo;
