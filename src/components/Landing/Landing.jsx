import React from "react";
import "./Landing.css";

import joker from "./../../assets/joker.png";

import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header"> Can you type </h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Quick?", "Correct?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img
          data-aos="fade-left"
          className="flash-image"
          src={joker}
          alt="alpha"
        />
      </div>
    </div>
  );
};

export default Landing;
