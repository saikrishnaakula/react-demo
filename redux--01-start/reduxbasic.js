const redux = require("redux");
const createStore = redux.createStore;
const initState = {
  counter: 0,
};

//reducer
const rootReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "INC_COUNTER":
      newState.counter += 1;
      break;
    case "ADD_COUNTER":
      newState.counter += action.value;
      break;
    default:
      break;
  }
  return newState;
};

//Store

const store = createStore(rootReducer);
console.log(store.getState());

//subscription

store.subscribe(()=> {
    console.log("[dispatch]",store.getState());
});


//dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());

