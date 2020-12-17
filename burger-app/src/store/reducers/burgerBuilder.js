import * as actionTypes from "../actions/actionsTypes";

const initState = {
  ingredients: null,
  price: 4,
  error: false,
  purchaseInpro:false
};

const INGR_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGRE:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingr]: state.ingredients[action.ingr] + 1,
        },
        purchaseInpro:true,
        price: state.price + INGR_PRICE[action.ingr],
      };

    case actionTypes.RM_INGRE:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingr]: state.ingredients[action.ingr] - 1,
        },
        purchaseInpro:true,
        price: state.price - INGR_PRICE[action.ingr],
      };
    case actionTypes.SET_INGRE:
      return {
        ...state,
        ingredients: action.ingr,
        price: 4,
        purchaseInpro:false,
        error:false
      };
    case actionTypes.FETCH_INGR_ERROR:
      return {
        ...state,
        error:true
      };
    default:
      break;
  }
  return state;
};

export default reducer;
