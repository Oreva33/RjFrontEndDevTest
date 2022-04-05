import React, { useContext} from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import "./App.css";
import RoutContext from "./store/Rout-context";
import Mainpage from "./components/Mainpage/Mainpage";

function App() {
  const ctx = useContext(RoutContext);
  return (
    <div className="App">
      {ctx.route === "Home"?<Home />: ctx.route ==="Login"?<Login />: ctx.route ==="Register"?<Register/>:ctx.route ==="mainpage"?<Mainpage/>:""}
      
      
      
    </div>
  );
}

export default App;
