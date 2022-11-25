import React from "react";
import "../css/header.css";
import DarkMode from "@mui/icons-material/DarkMode";
import { Menu, MenuOpen } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Header = () => {
  const [mode, setMode] = useState("light");
  const [menu, setMenu] = useState(false);
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

  const toggleMenu = () => {
    if(menu === false) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }

  const toggleDropDown = () => {
    const items = document.getElementsByClassName("dropdown-items")[0].classList;
    items.toggle("items-display")
  }


  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="/" className="logo">3ohh9</a>
        <a href="#about" className="nav-links">About</a>
        <a href="#services" className="nav-links">Services</a>
        <a href="#works" className="nav-links">Works</a>
        <a href="#contact" className="nav-links">Contact</a>
        <DarkMode className="dark-mode" onClick={toggleMode} />
      </div>
      <div className="mobile-nav-container">
        <h1 className="logo">3ohh9</h1>
        <DarkMode className="dark-mode" onClick={toggleMode} />
        <div className="dropdown" onClick={toggleMenu}>
          {(menu === true) ? <MenuOpen sx={{ 
                      display: 'block',
                      marginLeft: 'auto',
                      fontSize: '2.5rem'
                    }} onClick={toggleDropDown}/> : <Menu sx={{ 
                      display: 'block',
                      marginLeft: 'auto',
                      fontSize: '2.5rem'
                    }} onClick={toggleDropDown}/>}
          <div className="dropdown-items">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
