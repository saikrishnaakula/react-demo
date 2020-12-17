import "./input.css";
import React from "react";

const Input = (props) => {
  let iE = null;
  const ipC = ["IE"];

  if(props.inValid && props.shouldValidate && props.touched) {
    ipC.push("invalid")
  }
  switch (props.elementType) {
    case "input":
      iE = (
        <input className={ipC.join(" ")} {...props.elementConfig} value={props.value} onChange={props.onValueChange} />
      );
      break;
    case "text-area":
      iE = (
        <textarea className={ipC.join(" ")} {...props.elementConfig} value={props.value} onChange={props.onValueChange} />
      );
      break;
    case "select":
      iE = <select className={ipC.join(" ")} value={props.value} onChange={props.onValueChange}>
          {props.elementConfig.options.map(e=> <option key={e.value} value={e.value}>{e.displayName}</option>)}
      </select>;
      break;

    default:
      iE = (
        <input className={ipC.join(" ")} {...props.elementConfig} value={props.value} onChange={props.onValueChange} />
      );
      break;
  }
  return (
    <div className="Input">
      <label className="Label" htmlFor="">
        {props.label}
      </label>
      {iE}
    </div>
  );
};

export default Input;
