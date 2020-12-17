import React, { Component } from "react";
import "./orders.css";
import Order from "../../components/Order/order";
import Axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actions";
import { useEffect } from "react";

function Orders(props) {
  useEffect(() => {
    props.onInitOrders(props.token, props.userId);
  }, []);
  let orders = <p>Loading.....</p>;
  if (props.orders.length > 0) {
    orders = props.orders.map((e) => {
      return <Order key={e.id} ingredients={e.ingredients} price={e.price} />;
    });
  }
  return <div className="orders">{orders}</div>;
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, Axios));
