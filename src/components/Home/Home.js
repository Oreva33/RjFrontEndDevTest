import React from "react";
import classes from "./Home.module.css";
import Main1 from "../Main1/Main1";
import Main2 from "../Main2/Main2";
import Main3 from "../Main3/Main3";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </div>
  );
};

export default Home;
