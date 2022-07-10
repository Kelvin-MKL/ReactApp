import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = {
    dishes: [],
    cuisine: [],
  };
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
