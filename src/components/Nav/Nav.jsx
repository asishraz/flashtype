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
      <div className="nav-right">
        <a
          href="www.youtube.com"
          target="_blank"
          className="nav-aam-link"
          rel="noreferrer"
        >
          Gareeb
        </a>
      </div>
    </div>
  );
};

export default Nav;
