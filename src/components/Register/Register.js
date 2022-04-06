import React, { Fragment, useReducer, useContext } from "react";
import classes from "./Register.module.css";
import line3 from "../image/Line 3.png";
import line4 from "../image/Line 4.png";
import line5 from "../image/Line 5.png";
import icon from "../image/Vector.png";
import Button from "../UI/Button/Button";
import RoutContext from "../../store/Rout-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};



const Register = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const ctx = useContext(RoutContext);

  const emailChangeHanbler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (!emailState.isValid) {
      return
     }
 
     if(!passwordState.isValid){
       return;
     }

    const formvalue = {
      email: emailState.value,
      password: passwordState.value,
    };

    const id = (email) => {
      const userId = email;
      let firstIndex = 0;
      let lastIndex = 0;
      if (userId.includes(".") && userId.indexOf(".") < userId.indexOf("@")) {
        lastIndex = lastIndex + userId.indexOf(".");
        return userId.slice(firstIndex, lastIndex);
      }
      for (let x = 0; x < userId.length; x++) {
        if (userId[x] === "@") {
          lastIndex = lastIndex + x;
        }
      }
      //console.log(typeof lastIndex)
      return userId.slice(firstIndex, lastIndex);
    };

    ctx.onId(id(formvalue.email));
    ctx.onMain();
  };

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
                emailState.isValid === false
                  ? `${classes["email-input"]} ${classes["invalid"]}`
                  : classes["email-input"]
              }
            >
              <input
                onChange={emailChangeHanbler}
                type="email"
                placeholder="Email"
                onBlur={validateEmailHandler}
                value={emailState.value}
              />
            </div>
            {emailState.isValid === false && (
              <p className={classes["inval"]}>Enter valid Email</p>
            )}
            <div
              className={
                passwordState.isValid === false
                  ? `${classes["password-input"]} ${classes["invalid"]}`
                  : classes["password-input"]
              }
            >
              <input
                onChange={passwordChangeHandler}
                type="password"
                placeholder="Password"
                onBlur={validatePasswordHandler}
                value={passwordState.value}
              />
            </div>
            {passwordState.isValid === false && (
              <p className={classes["inval"]}>Enter valid Password</p>
            )}
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
