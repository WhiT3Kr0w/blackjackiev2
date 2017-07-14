import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import "./App.css";
import Card from "./components/Card";
const deck = require("./data/deck");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Black Jackie v2</h2>
        </div>
        <div>
          <Card image={deck.default[2].image} />
        </div>


      </div>
    );
  }
}

export default App;
