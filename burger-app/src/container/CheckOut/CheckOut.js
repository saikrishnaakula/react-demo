import React from "react";
import CheckoutSummary from "../../components/checkoutSummary/checkoutSummary";
import ContactData from "../ContactData/contactData";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function CheckOut(props) {
  const onCheckoutCan = () => {
    props.history.goBack();
  };
  const onCheckoutCon = () => {
    props.history.replace("/checkout/contact-data");
  };
  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchaseRed = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchaseRed}
        <CheckoutSummary
          ingredients={props.ings}
          onCheckoutCan={onCheckoutCan}
          onCheckoutCon={onCheckoutCon}
        />
        <Route
          path={props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
  return summary;
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchase,
  };
};

export default connect(mapStateToProps)(CheckOut);
