import React from "react";
import "./BuildControls.css";
import BuildControl from "../BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="build-controls">
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((c) => <BuildControl disabled={props.disabledInfo[c.type]} less={()=> props.less(c.type)} add={()=> props.add(c.type)} key={c.label}  label={c.label} />)}
      <button onClick={props.purchasing} disabled={!props.purchasable} className="OrderButton">{props.isAuth? "Order Now":"Login"}</button>
    </div>
  );
};

export default BuildControls;
