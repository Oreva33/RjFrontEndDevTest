import React from "react";

const RoutContext = React.createContext({
  route: "Home",
  ad: "ad",
  onAd: () => {},
  onSignin: () => {},
  onRegister: () => {},
  onMain: () => {},
});

export default RoutContext;
