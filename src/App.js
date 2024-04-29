import "./App.css";
// import About from "./components/About";
import Alerrt from "./components/Alerrt";
import Navbar from "./components/Navbar";
import TextFrm from "./components/TextFrm";
import React, { useState } from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setdmode] = useState("light");

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setdmode("dark");
      document.body.style.background = "#3a404c";
      showalert("dark mode enabled", "success");
      document.title = "textutils darkmode";
      setInterval(() => {
        document.title = "textutil is amazing";
      }, 1500);
      setInterval(() => {
        document.title = "light mode";
      }, 1400);
    } else {
      setdmode("light");
      document.body.style.background = "white";
      showalert("light mode enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="textutils2"
        mode={mode}
        togglemode={togglemode}
        abouttext="about"
      />
      <Alerrt alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextFrm heading="enter the text" mode={mode} showalert={showalert} />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
