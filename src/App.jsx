import React, { Component } from "react";
import { playGame, randomizeWeapon } from "./modules/rpsGame";

class App extends Component {
  state = {
    userChoice: "",
    computerChoice: "",
    winner: "",
  };

  chooseUserWeapon = (event) => {
    this.setState({ userChoice: event.target.name });
  };
  
  play = () => {
    let userWeapon = this.state.userChoice;
    let computerWeapon = randomizeWeapon();
    let results = playGame(userWeapon, computerWeapon);
    this.setState({ winner: results.winner, computerChoice: computerWeapon });
  };

  render() {
    return (
      <>
        <h1>Choose you weapon!</h1>
        {this.state.userChoice && (
          <h1 id="player-choice-message">
            {"You picked: " + this.state.userChoice}
          </h1>
        )}
        {this.state.computerChoice && (
          <h1 id="computer-choice-message">
            Computer picked: {this.state.computerChoice}
          </h1>
        )}
        <div>
          <button
            id="rock"
            className="ui button"
            name="rock"
            onClick={this.chooseUserWeapon}
          >
            Rock
          </button>
          <button
            id="paper"
            className="ui button"
            name="paper"
            onClick={this.chooseUserWeapon}
          >
            Paper
          </button>
          <button
            id="scissor"
            className="ui button"
            name="scissor"
            onClick={this.chooseUserWeapon}
          >
            Scissor
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            id="play-game"
            className="ui button"
            onClick={() => this.play()}
          >
            Play Game!
          </button>
        </div>

        <h1 id="result-message">{this.state.winner}</h1>
      </>
    );
  }
}

export default App;