import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* details section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* chars typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* speed  */}
        <ChallengeDetailsCard cardName="SPEED" cardValue={wpm} />
      </div>

      {/* the real challenge section */}
      <div className="typewriter-container">
        <TypingChallenge
          testInfo={testInfo}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
