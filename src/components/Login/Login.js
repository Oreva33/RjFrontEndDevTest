import React, { Fragment, useState, useContext } from "react";
import classes from "./Login.module.css";
import line3 from "../image/Line 3.png";
import line4 from "../image/Line 4.png";
import line5 from "../image/Line 5.png";
import icon from "../image/Vector.png";
import Button from "../UI/Button/Button";
import RoutContext from "../../store/Rout-context";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const ctx = useContext(RoutContext);

  const emailChangeHanbler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setPasswordTouched(true);
    if (!enteredEmail.includes("@")) {
      setEnteredEmailIsValid(false);
    } else {
      setEnteredEmailIsValid(true);
    }

    if (enteredPassword.length <= 0) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
    console.log(passwordIsValid, enteredEmailIsValid);
    if (!passwordIsValid && enteredEmailIsValid) {
      return;
    }

    const formvalue = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(formvalue);
    ctx.onMain();
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordIsInvalid = !passwordIsValid && passwordTouched;

  return (
    <Fragment>
      <div className={classes.bar}>
        <p className={classes.name}> Rodufy</p>
        <img className={classes.icon} src={icon} alt="icon" />
        <img className={classes.line3} src={line3} alt="line3" />
        <img className={classes.line4} src={line4} alt="line4" />
        <img className={classes.line5} src={line5} alt="line5" />
      </div>
      <div className={classes.Form}>
        <h1>Login</h1>
        <form onSubmit={formHandler} className={classes["wrapper-form"]}>
          <div className={classes["inner-form"]}>
            <div
              className={
                emailInputIsInvalid
                  ? `${classes["email-input"]} ${classes["invalid"]}`
                  : classes["email-input"]
              }
            >
              <input
                onChange={emailChangeHanbler}
                type="email"
                placeholder="Email"
              />
            </div>
            {emailInputIsInvalid && (
              <p className={classes["inval"]}>Enter valid Email</p>
            )}
            <div
              className={
                passwordIsInvalid
                  ? `${classes["password-input"]} ${classes["invalid"]}`
                  : classes["password-input"]
              }
            >
              <input
                onChange={passwordChangeHandler}
                type="password"
                placeholder="Password"
              />
            </div>
            {passwordIsInvalid && (
              <p className={classes["inval"]}>Enter valid Password</p>
            )}
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
