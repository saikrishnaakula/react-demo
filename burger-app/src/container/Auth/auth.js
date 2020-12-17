import React, { Component } from "react";
import "./auth.css";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as authActions from "../../store/actions/index";
// import withErrorHandler from "../../hoc/withErrorHandler";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "email",
        },
        validation: {
          required: true,
        },
        value: "",
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
    },
    isSignUp: false,
  };

  componentDidMount() {
    if (!this.props.purchaseInpro && this.props.redirecturl !== "/") {
      this.props.onRedirecturl();
    }
  }

  checkValidity = (value, rule) => {
    let isValid = true;
    if (rule.required) {
      isValid = value.trim().length > 0 && isValid;
    }
    return isValid;
  };
  ipChanged = (event, id) => {
    const formData = { ...this.state.loginForm };
    const updatedFormData = { ...formData[id] };
    updatedFormData.value = event.target.value;
    updatedFormData.touched = true;
    updatedFormData.valid = this.checkValidity(
      updatedFormData.value,
      updatedFormData.validation
    );
    formData[id] = updatedFormData;

    this.setState({ loginForm: formData });
  };
  checkLogin = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignUp
    );
  };

  swicthAuthMode = () => {
    this.setState((prev) => {
      return { isSignUp: !prev.isSignUp };
    });
  };
  render() {
    const formEl = [];
    for (const k in this.state.loginForm) {
      formEl.push({ id: k, config: this.state.loginForm[k] });
    }
    let form = (
      <form onSubmit={this.checkLogin}>
        {formEl.map((e) => (
          <Input
            touched={e.config.touched}
            shouldValidate={e.config.validation}
            inValid={!e.config.valid}
            onValueChange={(event) => {
              this.ipChanged(event, e.id);
            }}
            elementType={e.config.elementType}
            value={e.config.value}
            key={e.id}
            elementConfig={e.config.elementConfig}
          />
        ))}
        <Button btnType="Success">SUBMIT</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMsg = null;
    if (this.props.error) {
      errorMsg = (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {this.props.error.message}
        </p>
      );
    }
    return (
      <div className="auth">
        {this.props.isAuth ? <Redirect to={this.props.redirecturl} /> : null}
        <h4>Enter your login details</h4>
        {errorMsg}
        {form}
        <Button clicked={this.swicthAuthMode} btnType="Danger">
          SWITCH TO {this.state.isSignUp ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    purchaseInpro: state.burgerBuilder.purchaseInpro,
    redirecturl: state.auth.redirecturl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, method) =>
      dispatch(authActions.auth(email, password, method)),
    onRedirecturl: () => dispatch(authActions.redirecturl("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//withErrorHandler(
