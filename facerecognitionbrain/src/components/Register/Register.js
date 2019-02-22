import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://stormy-forest-91643.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Register</h1>
        <div className="container">
          <div className="card">
            <div className="left" />
            <div className="right">
              <form>
                <div className="form-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                  <label htmlFor="name">Name</label>
                </div>

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
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
