import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import classes from "./BodyComponent.module.css";
import Form from "./Form";

function BodyComponent() {
  const info = useSelector((state) => state.info);
  const {pathname} = useLocation();


  let navLink = pathname === '/home' ? <><h3> Gallery</h3> <h3>→</h3>
  <h3> Design Templates</h3></> : <h3>{pathname.slice(1)}</h3>

  let showcaseContainer = ['/contact', '/login', '/signup'].includes(pathname) ? <Form path={pathname.slice(1)}/> : <img src='https://picsum.photos/1280/720' alt="" />

  return (
    <div className={classes.bodyContainer}>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <section className={classes.linkFlow}>
            {navLink}
          </section>
          <section className={classes.flexColumnBox}>
            <h1>{info.heading}</h1>
            <p>{info.desc}</p>
          </section>
        </div>

        <div className={classes.flexRight}>
          {showcaseContainer}
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
