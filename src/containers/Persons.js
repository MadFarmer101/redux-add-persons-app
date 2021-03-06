import React from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

const Persons = (props) => {
  return (
    <div>
      <AddPerson personAdded={props.onAddPerson} />
      {props.persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => props.onDeletePerson(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) =>
      dispatch({
        type: "ADD_PERSON",
        payload: {
          id: Math.random(),
          name: name,
          age: age,
        },
      }),
    onDeletePerson: (id) => dispatch({ type: "DELETE_PERSON", payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
