import React, { Component } from 'react';

class App extends React.Component {
    state = {
      userChoice: '',
      winner: ''
    };

  chooseUserWeapon = (event) => {
    this.setState({userChoice: event.target.name})
  }

  playGame = async () => {
    let userWeapon = this.state.userChoice
    let computerWeapon = 'rock'
    debugger
    let winner = await this.theWinnerIs(userWeapon, computerWeapon)
    debugger
    this.setState({winner: winner})
  }

  theWinnerIs = (userWeapon, computerWeapon) => {
if (userWeapon !== computerWeapon) {
  return 'USER WINS!'
} else {
  return 'ITS A TIE!'
}
  }
  render() {
    return ( 
      <div>
     
      {/* <h2>
        User {this.props.rock} 
      </h2> */}
      <button
      id="button"
      name='rock'
        onClick={this.chooseUserWeapon}>
          Rock
      </button>
      <button
      id="button"
      name='paper'
        onClick={this.chooseUserWeapon}>
          Paper
      </button>
      <button
      id="button"
      name='scissor'
        onClick={this.chooseUserWeapon}>
          Scissor
      </button>
      <h1> User chose {this.state.userChoice}</h1>
      <button
      onClick={this.playGame}>Play Game!</button>

      <h1>{this.state.winner}</h1>
    </div>
    )
  }
}

export default App;
