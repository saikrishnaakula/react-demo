import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDraw.css";
import BackDrop from "../../UI/backdrop/BackDrop";

const SideDraw = (props) => {
  const attClass = ["SideDraw"];
  if (props.show) attClass.push("Open");
  else attClass.push("Close");
  return (
    <Fragment>
      <BackDrop modelClosed={props.clicked} show={props.show} />
      <div className={attClass.join(" ")} onClick={props.clicked}>
        <div style={{ height: "11%", marginBottom: "32px" }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.auth}/>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDraw;
