import * as actionType from "./actionsTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    id,
    orderData,
  };
};
export const purchaseBurgerFail = (error) => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionType.PURCHASE_BURGER_START,
  };
};
export const purchaseInit = () => {
  return {
    type: actionType.PURCHASE_INIT,
  };
};

export const purchaseBurger = (order, token) => {
  return {
    type: actionType.BURGER_PURCHASE_INIT,
    order,
    token,
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionType.FETCH_ORDERS_FAIL,
    error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionType.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionType.FETCH_ORDERS_INIT,
    token,
    userId,
  };
};
