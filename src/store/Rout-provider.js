import React, { useState } from "react";
import RoutContext from "./Rout-context";

const RoutProvider = (props) => {
  const [route, setRoute] = useState("Home");
  const [ad, setAd] = useState(true);

  const signinHandler = () => {
    setRoute("Login");
  };

  const registerHandler = () => {
    setRoute("Register");
  };

  const mainHandler = () => {
    setRoute("mainpage");
  };

  const adHandler = () => {
    setAd(false);
  };

  const homeHandler = () => {
    setRoute("Home");
  };

  return (
    <RoutContext.Provider
      value={{
        route: route,
        ad: ad,
        onAd: adHandler,
        onSignin: signinHandler,
        onRegister: registerHandler,
        onMain: mainHandler,
        onHome:homeHandler
      }}
    >
      {props.children}
    </RoutContext.Provider>
  );
};

export default RoutProvider;
