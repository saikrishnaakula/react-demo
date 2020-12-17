import React, { Component, useEffect } from "react";

import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Logout(props) {
  const {logout } = props;
  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
