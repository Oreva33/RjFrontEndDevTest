import React, { useContext } from "react";
import classes from "./Header.module.css";
import cancel from "../image/cancel.png";
import RoutContext from "../../store/Rout-context";

const Header = () => {
  const ctx = useContext(RoutContext);

  const adremoveHandler = () => {
    ctx.onAd();
  };
  return (
    <div className={classes.header}>
      <div className={classes["header-col"]}>
        <div className={classes["header-item1"]}>New!</div>
        <div className={classes["header-item2"]}>
          <h1>Announcing our $15 million series A funding!</h1>
        </div>
        <div className={classes["header-item3"]}>
          <button onClick={adremoveHandler}>
            <img src={cancel} alt="cancel button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
