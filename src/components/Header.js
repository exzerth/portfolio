import React from "react";
import DarkMode from "@mui/icons-material/DarkMode";
import { useState, useEffect } from "react";

const Header = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    document.body.id = mode;
  }, [mode]);

  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="logo">3ohh9</h1>
        <p>About</p>
        <p>Services</p>
        <p>Works</p>
        <p>Contact</p>
        <DarkMode className="dark-mode" onClick={toggleMode} />
      </div>
    </nav>
  );
};

export default Header;
