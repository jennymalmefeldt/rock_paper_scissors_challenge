import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

let weapons = ["rock", "paper", "scissor"];

class App extends React.Component {
  state = {
    userChoice: "",
    computerChoice: "",
    winner: "",
  };

  chooseUserWeapon = (event) => {
    this.setState({ userChoice: event.target.name });
  };

  playGame = async () => {
    let userWeapon = this.state.userChoice;
    let computerWeapon = this.state.computerChoice;

    let winner = await this.theWinnerIs(userWeapon, computerWeapon);

    let computer = weapons[Math.floor(Math.random() * weapons.length)];

    this.setState({
      computerChoice: computer,
      winner: winner,
    });
  };

  theWinnerIs = (userWeapon, computerWeapon) => {
    if (userWeapon === computerWeapon) {
      return "IT'S A TIE";
    } else if (
      (userWeapon === "rock" && computerWeapon === "scissor") ||
      (userWeapon === "paper" && computerWeapon === "rock") ||
      (userWeapon === "scissor" && computerWeapon === "paper")
    ) {
      return "USER WINS!";
    } else {
      return "COMPUTER WINS!";
    }
  };

  render() {
    return (
      <div>
        <h1 id="message">
          {" "}
          Computer {" picked: " + this.state.computerChoice}
        </h1>
        <h1 id="message">
          {" "}
          Choose you weapon! {"You picked: " + this.state.userChoice}
        </h1>
        <br></br>
        <button
          id="rock"
          class="ui button"
          name="rock"
          onClick={this.chooseUserWeapon}
        >
          Rock
        </button>
        <button
          id="paper"
          class="ui button"
          name="paper"
          onClick={this.chooseUserWeapon}
        >
          Paper
        </button>
        <button
          id="scissor"
          class="ui button"
          name="scissor"
          onClick={this.chooseUserWeapon}
        >
          Scissor
        </button>
        <br></br>
        <br></br>
        <button id="play-game" class="ui button" onClick={this.playGame}>
          Play Game!
        </button>

        <h1>{this.state.winner}</h1>
      </div>
    );
  }
}

export default App;
