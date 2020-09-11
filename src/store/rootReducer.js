const initialState = {
  persons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        persons: state.persons.concat(action.payload),
      };
    case "DELETE_PERSON":
      const newPersonsArray = state.persons.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        persons: newPersonsArray,
      };
    default:
      return state;
  }
};

export default rootReducer;
