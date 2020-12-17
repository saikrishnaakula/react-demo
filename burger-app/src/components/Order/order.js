import React from "react";
import "./order.css";

const order = (props) => {
  let transformaedIn = [];
  for (const i in props.ingredients) {
    transformaedIn.push({ name: i, amount: props.ingredients[i] });
  }

  transformaedIn = transformaedIn.map((i) => (
    <span
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding:'5px'
      }}
      key={i.name}
    >
      {i.name} ({i.amount})
    </span>
  ));

  return (
    <div className="Order">
      <p>Ingredients : {transformaedIn}</p>
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </div>
  );
};

export default order;
