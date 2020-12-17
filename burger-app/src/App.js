import React, { useEffect, Suspense } from "react";

import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Layout from "../src/container/layout/layout";
import { Route, Switch, Redirect } from "react-router-dom";
import logout from "./container/Auth/logout/logout";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";

const asyncCheckout = React.lazy(() => {
  return import("./container/CheckOut/CheckOut");
})
const asyncOrders = React.lazy(() => {
  return import("./container/Orders/orders");
})
const asyncAuth = React.lazy(() => {
  return import("./container/Auth/auth");
})

function App(props) {
  const {onTryAutoSignUp} = props
  useEffect(() => {
    onTryAutoSignUp();
  }, [onTryAutoSignUp]);
  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" component={BurgerBuilder} />
      <Redirect to="/"/>
    </Switch>
  );

  if(props.isAuth) {
    routes = (
      <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={logout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
    );
  }
  return (
    <div>
      <Layout>
      <Suspense fallback={<p>loading....</p>}>
        {routes}
      </Suspense>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
