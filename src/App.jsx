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
    this.setState({result: "rock" });
  }
  render() {
    return
    <div>
      <h1> User {this.state.rock}</h1>
      <p>
        It is a {this.state.paper}
      </p>
      <button
      type="button"
        onClick={this.changeResult}>
          Play Game
      </button>
    </div>;
  }
}

export default App;
