const initialState = {
  persons: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      }
        
    default:
      return state
  }
}

export default rootReducer