import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/modal/Model";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler";
import { connect } from "react-redux";
import * as burgerBuilderActions from "../../store/actions/index";
import { useEffect } from "react";

function BurgerBuilder(props) {
  const [purchasing, setPurchasing] = useState(false);

  const { onInitIngre } = props;
  useEffect(() => {
    onInitIngre();
  }, [onInitIngre]);

  const updatePurchase = (ingre) => {
    const sum = Object.keys(ingre)
      .map((k) => ingre[k])
      .reduce((prev, curr) => (prev += curr), 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuth) {
      setPurchasing(true);
    } else {
      props.onRedirecturl("/checkout");
      props.history.push("/auth");
    }
  };
  const modelClosed = () => {
    setPurchasing(false);
  };
  const purchaseContinue = () => {
    props.onInitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = { ...props.ings };
  for (const k in disabledInfo) {
    if (disabledInfo.hasOwnProperty(k)) {
      disabledInfo[k] = disabledInfo[k] <= 0;
    }
  }
  let orderSummary = (
    <OrderSummary
      ingredients={props.ings}
      price={props.price}
      cancel={modelClosed}
      continue={purchaseContinue}
    />
  );

  let burger = props.error ? <p>Ingredients cant be loaded</p> : <Spinner />;
  if (props.ings) {
    burger = (
      <Fragment>
        <Model show={purchasing} modelClosed={modelClosed}>
          {orderSummary}
        </Model>
        <Burger ingredients={props.ings} />
        <BuildControls
          price={props.price}
          disabledInfo={disabledInfo}
          add={props.onIngreAdd}
          less={props.onIngreRm}
          isAuth={props.isAuth}
          purchasable={updatePurchase(props.ings)}
          purchasing={purchaseHandler}
        />
      </Fragment>
    );
  }

  return <Fragment>{burger}</Fragment>;
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngreAdd: (ingr) => dispatch(burgerBuilderActions.addIngre(ingr)),
    onIngreRm: (ingr) => dispatch(burgerBuilderActions.rmIngre(ingr)),
    onInitIngre: (ingr) => dispatch(burgerBuilderActions.initIngre()),
    onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
    onRedirecturl: (path) => dispatch(burgerBuilderActions.redirecturl(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
