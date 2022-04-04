import React, { Fragment } from "react";
import classes from "./Main1.module.css";
import logo from "../image/Vector.png";
import apple from "../image/apple.png";
import playstore from "../image/playstore.png";
import sharath from "../image/sharath-kumar-hari-Mb2LErousEY-unsplash 1.png";

const Main1 = () => {
  return (
      <div className={classes.main1}>
        <div className={classes["main1-col1"]}>
          <div className={classes["col1-item1"]}>
            <img src={logo} alt="logo" />
            <span>Rodufy</span>
          </div>
          <div className={classes["col1-item2"]}>
            <h1>Our mission is to</h1>
            <h1>
              <span>advance</span> humanity
            </h1>
          </div>
          <div className={classes["col1-item3"]}>
            <span>We would strive to achieve that through </span>
            <span>providing education and quality health</span>
          </div>
          <div className={classes["col1-item4"]}>
            <div>
              <span>DOWNLOAD</span>
              <span>APP</span>
            </div>
            <img src={playstore} alt={playstore} />
            <img src={apple} alt={apple} />
          </div>
        </div>
        <div className={classes["main1-col2"]}>
          <div className={classes["col2-item1"]}>
            <button>Register</button>
            <button className={classes["but-2"]}>Login</button>
          </div>
          <div className={classes["col2-item2"]}>
            <img src={sharath} alt={sharath} />
          </div>
        </div>
      </div>
  );
};

export default Main1;
