const initState = {
    results: [],
  };
  
  const reducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "STORE_RESULT":
        newState.results = newState.results.concat({
          id: new Date(),
          value: action.res,
        });
        break;
      case "REMOVE_RESULT":
        newState.results = newState.results.filter((e) => e.id !== action.id);
        break;
      default:
        break;
    }
    return newState;
  };
  
  export default reducer;
  