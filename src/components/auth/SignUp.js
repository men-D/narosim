import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="Input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange} />
          </div>
          <div className="Input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChange} />
          </div>
          <div className="Input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.onChange} />
          </div>
          <div className="Input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.onChange} />
          </div>
          <div className="Input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;