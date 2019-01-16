import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  onInputChange = event => {
    console.log("event :", event.target.value);
  };
  onSubmit = () => {};
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />>
        <ImageLinkForm onInputChange={this.onInputChange} />
        {}
      </div>
    );
  }
}

export default App;
