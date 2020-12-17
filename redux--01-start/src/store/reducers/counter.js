const initState = {
    counter: 0,
  };
  
  const reducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "INC_COUNTER":
        newState.counter += 1;
        break;
      case "DEC_COUNTER":
        newState.counter -= 1;
        break;
      case "INC_COUNTER_VALUE":
        newState.counter += action.value;
        break;
      case "DEC_COUNTER_VALUE":
        newState.counter -= action.value;
        break;
      default:
        break;
    }
    return newState;
  };
  
  export default reducer;
  