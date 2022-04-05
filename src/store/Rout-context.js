import React from "react";

const RoutContext = React.createContext({
  route: "Home",
  ad: "ad",
  username: "username",
  onAd: () => {},
  onSignin: () => {},
  onRegister: () => {},
  onMain: () => {},
  onHome: () => {},
  onId: () => {},
});

export default RoutContext;
