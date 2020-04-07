import React, { Component } from "react";
import { connect } from "react-redux";
import { addName } from "../redux/actions";

class CatName extends Component {
  state = {
    textInput: "",
  };

  handleChange = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addName(this.state.textInput);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placholder="New Name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, { addName })(CatName);
