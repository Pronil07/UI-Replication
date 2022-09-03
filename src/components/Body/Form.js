import React from "react";
import classes from "./Form.module.css";

function Form({ path }) {
  var secondInput =
    path === "contact" ? (
      <section>
        <label>Message</label>
        <textarea type="text" placeholder="Please write your requirement" />
      </section>
    ) : (
      <section>
        <label>{`${path==='login' ? 'password' : 'new password'}`}</label>
        <input type="password" placeholder={`${path==='login' ? 'Enter your password' : 'Create a new password'}`} />
      </section>
    );

  return (
    <form className={classes.formContainer}>
      <section>
        <label>Email</label>
        <input type="email" placeholder="Enter your mail id" />
      </section>
      {secondInput}
      <button> Submit </button>
    </form>
  );
}

export default Form;
