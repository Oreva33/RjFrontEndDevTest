import React, { useContext } from "react";
import classes from "./Home.module.css";
import Main1 from "../Main1/Main1";
import Main2 from "../Main2/Main2";
import Main3 from "../Main3/Main3";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RoutContext from "../../store/Rout-context";

const Home = () => {
  const ctx = useContext(RoutContext);

  return (
    <div className={classes.wrapper}>
      {ctx.ad && <Header />}
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </div>
  );
};

export default Home;
