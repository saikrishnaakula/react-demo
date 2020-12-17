import * as actionTypes from "./actionsTypes";

export const addIngre = (ingr) => {
  return {
    type: actionTypes.ADD_INGRE,
    ingr,
  };
};
export const rmIngre = (ingr) => {
  return {
    type: actionTypes.RM_INGRE,
    ingr,
  };
};

export const setIngre = (ingr) => {
  return {
    type: actionTypes.SET_INGRE,
    ingr,
  };
};

export const fetchIngrError = () => {
  return {
    type: actionTypes.FETCH_INGR_ERROR,
  };
};

export const initIngre = () => {
  return {
    type: actionTypes.Fetch_INGRE_START,
  };
};
