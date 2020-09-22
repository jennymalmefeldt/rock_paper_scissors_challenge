import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rock: "win",
      paper: "it's a draw",
      scissor: "lose"
    };
  }
  changeResult = () => {
    this.setState({rock: "lose" });
  }
  render() {
    return ( 
      <div>
      <h1> User {this.state.rock}</h1>
      <h2>
        User {this.state.rock} 
      </h2>
      <button
      id="button"
        onClick={this.changeRock}>
          Rock
      </button>
      <button
      id="button"
        onClick={this.changePaper}>
          Paper
      </button>
      <button
      id="button"
        onClick={this.changeScissor}>
          Scissor
      </button>

    </div>
    )
  }
}

export default App;
