import React from "react";

import "./Signin.css";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("  https://stormy-forest-91643.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => console.log("response ", response))
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <React.Fragment>
        <h1 className="title">Sign In</h1>
        <div className="container">
          <div className="card">
            <div className="left" />
            <div className="right">
              <form>
                <div className="form-input">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    placeholder="email"
                  />

                  <label htmlFor="email-address">Email</label>
                </div>
                <div className="form-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <input
                  onClick={this.onSubmitSignIn}
                  className="btn"
                  type="submit"
                  value="Sign in"
                />
                <p
                  onClick={() => onRouteChange("register")}
                  className="forgot-password white"
                >
                  Register
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
