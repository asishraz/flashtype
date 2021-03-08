import React from "react";
import flashlogo from "./../../assets/flashlogo.png";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={flashlogo} alt="logo" />
        <p className="flash-logo-text">Flash type</p>
      </div>
      <h1 className="scrolldown">Scroll-Down</h1>
      <div className="nav-right">
        <a
          href="https://asishraz.medium.com/"
          target="_blank"
          className="nav-aam-link"
          rel="noreferrer"
        >
          My Medium Profile
        </a>
      </div>
    </div>
  );
};

export default Nav;
