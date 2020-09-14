import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: "",
  };
  
  render() {
    return (
      <div className="AddPerson">
        <input placeholder="Enter your name"></input>
        <input placeholder="Enter your age"></input>
        <button onClick={this.props.personAdded}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
