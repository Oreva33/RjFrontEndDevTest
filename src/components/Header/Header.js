import React from "react";
import classes from "./Header.module.css";
import cancel from "../image/cancel.png"

const Header = () => {
  return (
      <div className={classes.header}>
          <div className={classes["header-col"]}>
              <div className={classes["header-item1"]}>
                  New!
              </div>
              <div className={classes["header-item2"]}>
                 <h1>Announcing our $15 million series A funding!</h1>
              </div>
               <div className={classes["header-item3"]}>
                 <button><img src={cancel} alt="cancel button"/></button>
              </div>
          </div>
      </div>
  );
};

export default Header;
