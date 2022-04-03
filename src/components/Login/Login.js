import React, { Fragment } from "react";
import classes from "./Login.module.css";
import line3 from "../image/Line 3.png";
import line4 from "../image/Line 4.png";
import line5 from "../image/Line 5.png";
import icon from "../image/Vector.png";
import Button from "../UI/Button/Button";
const Login = () => {
  return (
    <Fragment>
      <div className={classes.bar}>
          <p className={classes.name}>  Rodufy</p>
      <img className={classes.icon}src={icon} alt="icon"/>
        <img className={classes.line3} src={line3} alt="line3" />
        <img className={classes.line4} src={line4} alt="line4" />
        <img className={classes.line5} src={line5} alt="line5" />
      </div>
      <div className={classes.Form}>
        <h1>Login</h1>
        <form className={classes["wrapper-form"]}>
          <div className={classes['inner-form']}>
          <input type="test" placeholder="Email"/>
          <input type="test" placeholder="Password"/>
          <Button>Login</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
