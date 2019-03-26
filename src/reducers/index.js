
const initialState = {
  currentValue: "0",
  currentOperation: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_NUMBER") {
    // State is immutable!
    return Object.assign({}, state, {
      currentValue: state.currentValue.toString() + action.payload
    });
  }
  if (action.type === "APPLY_OPERATION") {
    return Object.assign({}, state, {
      currentOperation: action.payload
    });
  }

  return state;
}

export default rootReducer;