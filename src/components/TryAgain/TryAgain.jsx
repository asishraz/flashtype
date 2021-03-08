import React from "react";
import "./TryAgain.css";
// url = "https://www.facebook.com/asish.buck/";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="try-again-container">
      <h1> Test Results </h1>

      <div className="result-container">
        <p>
          <b>characters:</b> {characters}
        </p>

        <p>
          <b>words:</b> {words}
        </p>

        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-buttons start-again-btn"
        >
          Retry
        </button>

        <button
          className="end-buttons share-again-btn"
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=asish.buck",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
        >
          Share
        </button>

        <button
          className="end-buttons twitter-again-btn"
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
              "Twitter",
              "width=800,height=600"
            );
          }}
        >
          Twitter
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
