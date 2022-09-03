import React from "react";
import ActionBar from "./ActionBar";
import classes from "./HeaderComponent.module.css";
import Logo from "./Logo";
import NavBar from "./NavBar";

function HeaderComponent() {
  return (
    <div className={classes.widthFull}>
      <div className={classes.flexbar}>
        {/* left */}
        <div className={classes.flexrow}>
          <Logo />
          <NavBar />
        </div>

        {/* right */}
        <ActionBar />
      </div>
    </div>
  );
}

export default HeaderComponent;
