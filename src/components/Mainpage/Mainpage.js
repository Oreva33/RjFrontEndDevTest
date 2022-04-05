import React,{useContext} from "react";
import classes from "./Mainpage.module.css";
import logo from "../image/Vector.png";
import arrow from "../image/arrow-up.png";
import frame22 from "../image/Frame 22.png";
import frame25 from "../image/Frame 25.png";
import RoutContext from "../../store/Rout-context";

const Mainpage = () => {
    const ctx = useContext(RoutContext);
    const mainpageHandler =()=>{
        ctx.onHome()
        }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes["header-col1"]}>
          <img src={logo} alt={logo} />
          <h1>Rodufy</h1>
        </div>
        <div className={classes["header-col2"]}>
          <h1>Hi $email</h1>
          <button onClick={mainpageHandler}>Logout</button>
        </div>
      </div>
      <div className={classes.main1}>
        <div className={classes["main1-row1"]}>
          <img src={arrow} alt="arrow" />
          <h1>Top post</h1>
        </div>
        <div className={classes["main1-row2"]}>
          <img src={frame22} alt="frame22" />
          <img src={frame25} alt="frame25" />
        </div>
      </div>
      <div className={classes.main2}>
      <div className={classes["main2-row1"]}>
          <img src={arrow} alt="arrow" />
          <h1>Top post</h1>
        </div>
        <div className={classes["main2-row2"]}>
          <img src={frame22} alt="frame22" />
          <img src={frame25} alt="frame25" />
        </div>
        <div className={classes["main2-row3"]}>
          <img src={frame22} alt="frame22" />
          <img src={frame25} alt="frame25" />
        </div>
        <div className={classes["main2-row4"]}>
          <img src={frame22} alt="frame22" />
          <img src={frame25} alt="frame25" />
        </div>
        <div className={classes["main2-row5"]}>
          <img src={frame22} alt="frame22" />
          <img src={frame25} alt="frame25" />
        </div>
        <div className={classes["main2-row6"]}>
        <button className={classes["row6-item1"]}>Load more</button>
        </div>
        
      </div>
    </div>
  );
};

export default Mainpage;
