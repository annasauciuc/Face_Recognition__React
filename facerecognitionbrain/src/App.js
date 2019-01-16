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
  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "0a1e98a0704e48b1819834889921647e",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function(response) {
          // do something with response
        },
        function(err) {
          // there was an error
        }
      );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {}
      </div>
    );
  }
}

export default App;
