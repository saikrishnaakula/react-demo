import React, { Fragment } from "react";
import BackDrop from '../backdrop/BackDrop'
import "./Model.css";

function Model (props) {

      return (
        <Fragment>
          <BackDrop show={props.show} modelClosed={props.modelClosed}/>
          <div
            className="Modal"
            style={{
              transform: props.show ? "translateY(0)" : "translateY(-100vh)",
              opacity: props.show ? "1" : "0",
            }}
          >
            {props.children}
          </div>
        </Fragment>
      );
} 


export default React.memo(Model,(prevPops,nextPops) => {
  return nextPops.show === prevPops.show && nextPops.children === prevPops.children;
});
