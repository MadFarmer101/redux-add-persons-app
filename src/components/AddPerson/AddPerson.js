import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: "",
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeNameHandler}
          placeholder="Enter your name"
        ></input>
        <input
          type="number"
          value={this.state.age}
          onChange={this.changeAgeHandler}
          placeholder="Enter your age"
        ></input>
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
