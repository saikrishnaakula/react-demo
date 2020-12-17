import React, { Fragment, Component, useState } from "react";
import "./layout.css";

import ToolBar from "../../components/Navigation/Toolbar/ToolBar";
import SideDraw from "../../components/Navigation/SideDraw/SideDraw";
import { connect } from "react-redux";

function Layout(props) {
  const [side, setSide] = useState(false);

  const close = () => {
    setSide(false);
  };

  const toggle = () => {
    setSide((prev) => {
      return !prev;
    });
  };

  return (
    <Fragment>
      <ToolBar auth={props.isAuth} drawToggleClicked={toggle} />
      <SideDraw
        auth={props.isAuth}
        show={side}
        clicked={close}
      />
      <main className="Content">{props.children}</main>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
