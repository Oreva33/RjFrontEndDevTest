import React from "react";
import classes from "./Main3.module.css";
import whatsapp from "../image/whatsapp.png"
import mail from "../image/mail.png"
import undraw from "../image/undraw_calling_re_mgft 1.png"
const Main3 =() =>{
    return(
        <div className={classes.main3}>
        <div className={classes["main3-col1"]}>
            <div className={classes["col1-item1"]}>
                <h1>Contact Us</h1>
            </div>
            <div className={classes["col1-item2"]}>
                <p>Got any questions, feedback, request and </p>
                <p>complains? Reach out....</p>
            </div>
            <div className={classes["col1-item3"]}>
                <img src={whatsapp} alt="whatsapp"/>
                <span>+2348232323892</span>
            </div>
            <div className={classes["col1-item4"]}>
            <img src={mail} alt="mail"/>
            <span>contact@us.com</span>
            </div>
        </div>
        <div className={classes["main3-col2"]}>
            <img src={undraw} alt="undraw_calling_re_mgft 1"/>
        </div>
    </div>
    )
}
export default Main3