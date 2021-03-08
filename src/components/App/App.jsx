import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";

import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraph";

import "./App.css";

const TotalTime = 60;

const ServiceUrl = "http://www.metaphorpsum.com/paragraphs/1/10";
const DefaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallBack = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
  };

  fetchNewParagraph = () => {
    fetch(ServiceUrl)
      .then((response) => response.text())
      .then((data) => {
        this.setState({ selectedParagraph: data });
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
      });
  };

  componentDidMount() {
    this.fetchNewParagraphFallBack();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // change the WPM
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => this.fetchNewParagraphFallBack();

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();

    //
    //  1. Handle the userflow case(when we type nothing) - all the chars should be shown not attempted - also early exit
    // 2. Handle the overflow case - early exit
    // 3. Handle the backspace key
    //      - mark the [index + 1] element as not attempted (irrespective of whether the index is less than zero)
    //      - but don't forget to chekc for the overflow case here
    //        {index + 1} -> can go out of bound, when the index === length -1
    // 4. update the status in the testInfo
    //      - find out the last char in the inputValue  and it's index
    //      - check if the char at the same index in the test info (state) mathces or not
    //      - "Yes" -> "correct"
    //      - "NO" -> "incorrect"
    // 5. Irrespective of the case, characters , words and  speed (wpm) can be update

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    //  first underflow case
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    // second overflow case
    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //  make a copy of test Info
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "not Attempted";
    }

    // check for the correct typed letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // update the test info
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    console.log("testinfo", this.state.testInfo);
    // fetch(ServiceUrl)
    //   .then((response) => response.text())
    //   .then((information) => {
    //     console.log("API information: ", information);
    //   });
    return (
      <div className="app">
        {/* {Nav section} */}
        <Nav />

        {/* {Landing page} */}
        <Landing />

        {/* {Challenge section} */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* {footer} */}
        <Footer />
      </div>
    );
  }
}

export default App;
