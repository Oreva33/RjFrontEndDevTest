import React, {useState} from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  const [route, setRoute] = useState("Home")
  return (
    <div className="App">
      {route === "Home"?<Home />: route ==="Login"?<Login />:<Register />}
      
      
      
    </div>
  );
}

export default App;
