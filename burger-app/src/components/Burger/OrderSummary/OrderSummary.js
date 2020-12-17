import React, { Fragment, Component } from "react";
import Button from "../../UI/Button/Button";
// import './Model.css';

class OrderSummary extends Component {
  render() {
    const ingreSum = this.props.ingredients;
    const listSum = Object.keys(ingreSum).map((k) => (
      <li key={k}>
        <span style={{ textTransform: "capitalize" }}>{k}</span>:{" "}
        {this.props.ingredients[k]}
      </li>
    ));
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>{listSum}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.continue}>
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
