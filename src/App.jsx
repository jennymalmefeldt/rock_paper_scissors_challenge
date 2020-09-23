import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'

let weapons = ["rock", "paper", "scissors"];

class App extends React.Component {
  state = {
    userChoice: "",
    computerChoice: "",
    winner: ""
  };

  chooseUserWeapon = (event) => {
    this.setState({ userChoice: event.target.name });
  };

  playGame = async () => {
    let userWeapon = this.state.userChoice;
    let computerWeapon = this.state.computerChoice;
    let winner = await this.theWinnerIs(userWeapon, computerWeapon);

    this.setState({
      computerChoice: weapons[Math.floor(Math.random() * weapons.length)],
      winner: winner
    });
  };

  theWinnerIs = (userWeapon, computerWeapon) => {
    if (userWeapon !== computerWeapon) {
      return "USER WINS!";
    } else {
      return "ITS A TIE!";
    }
  };
  render() {
    return (
      <div>
        <button class="ui button"
        name="rock" onClick={this.chooseUserWeapon}>
          Rock 
          </button>
        <button class="ui button"
        name="paper" onClick={this.chooseUserWeapon}>
          Paper
        </button>
        <button class="ui button"
        name="scissor" onClick={this.chooseUserWeapon}>
          Scissor
        </button>
        <h1> Choose you weapon {this.state.userChoice}</h1>
        <button class="ui button" onClick={this.playGame}>Play Game!</button>

        <h1>{this.state.winner}</h1>
      </div>
    );
  }
}

export default App;
