import React from "react";
import classes from "./Main2.module.css";
import rasheed from "../image/rasheed-kemy-oqY09oVTa3k-unsplash 1.png"

const Main2 =()=>{
    return(
        <div className={classes.main2}>
        <div className={classes["main2-col1"]}>
            <div className={classes["col1-item1"]}>
                <h1>Everything you'll</h1>
                <h1>nedd to <span>excel</span> in life</h1>
            </div>
            <div className={classes["col1-item2"]}>
                <p>We've curated a list of valuable resources</p>
                <p>nto get you going in life, all for free</p>
            </div>
            <div className={classes["col1-item3"]}>
               <button>Get Started</button>
            </div>

        </div>
        <div className={classes["main2-col2"]}>
            <img src={rasheed} alt="rasheed"/>
        </div>
    </div>
    )
}

export default Main2