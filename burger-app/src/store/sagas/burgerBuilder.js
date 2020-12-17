import axios from "../../axios-order";
import { put } from "redux-saga/effects";
import { setIngre, fetchIngrError } from "../actions/burgerBuilder";

export function* initIngreSaga() {
  try {
    const resp = yield axios.get("/ingredients.json");
    yield put(setIngre(resp.data));
  } catch (error) {
    yield put(fetchIngrError());
  }
}
