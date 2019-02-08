import React, { Component } from 'react';
import './App.css';

var wisdoms = [
  "So we beat on, boats against the current, borne back ceaselessly into the past.",
  "Let us learn to show our friendship for a man when he is alive and not after he is dead.",
  "There are only the pursued, the pursuing, the busy and the tired.",
  "Reserving judgements is a matter of infinite hope.",
  "Can’t repeat the past?…Why of course you can!",
  "So we drove on toward death through the cooling twilight.",
  "Angry, and half in love with her, and tremendously sorry, I turned away."
]


class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
  }
  
  setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.setState({
      wisdom: wisdoms[index]
    });
  }
  
  addWisdom() {
    wisdoms.push(prompt("What new quote do you offer?"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.wisdom}
        <button className="more" onClick={this.setRandomWisdom}>Another</button>
        <button className="more" onClick={this.addWisdom}>Add quotes</button>
 </div>
    );
  }
}

export default App;
