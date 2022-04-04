import React from "react";
import classes from "./Footer.module.css";
import logo from "../image/Vector.png";

const Footer =()=>{
    return(
        <div className={classes.footer}>
        <div className={classes["footer-col1"]}>
          <div className={classes["col1-item1"]}>
            <img src={logo} alt="logo" />
            <span>Rodufy</span>
          </div>
          <div className={classes["col1-item2"]}>
            <span>Blog</span>
            <span>Privacy Policy</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    )
}

export default Footer