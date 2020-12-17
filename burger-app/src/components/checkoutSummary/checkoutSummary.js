import "./checkoutSummary.css";
import React from "react";
import Burger from "../Burger/Burger";
import Button from '../UI/Button/Button';

const checkoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCan}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutCon}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
