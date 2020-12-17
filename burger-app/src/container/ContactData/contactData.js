import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import "./contatcData.css";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/input";
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler";
import * as actionType from "../../store/actions/index"

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "name",
        },
        validation: {
          required: true,
        },
        value: "",
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "street",
        },
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
      pincode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "pincode",
        },
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "country",
        },
        validation: {
          required: true,
        },
        valid: false,
        value: "",
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "email",
        },
        valid: false,
        validation: {
          required: true,
        },
        value: "",
        touched: false,
      },
      delivery: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayName: "Fastest" },
            { value: "normal", displayName: "Normal" },
          ],
        },
        validation: {},
        valid: true,
        value: "fastest",
      },
    },
    formIsvalid: false,
  };

  createOrder = (event) => {
    event.preventDefault();
    const formData = {};
    for (const k in this.state.orderForm) {
      formData[k] = this.state.orderForm[k].value;
    }
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    };
    this.props.onOrderBurger(order,this.props.token);
  };

  checkValidity = (value, rule) => {
    let isValid = true;
    if (rule.required) {
      isValid = value.trim().length > 0 && isValid;
    }
    return isValid;
  };

  ipChanged = (event, id) => {
    const formData = { ...this.state.orderForm };
    const updatedFormData = { ...formData[id] };
    updatedFormData.value = event.target.value;
    updatedFormData.touched = true;
    updatedFormData.valid = this.checkValidity(
      updatedFormData.value,
      updatedFormData.validation
    );
    formData[id] = updatedFormData;
    let formIsvalid = true;
    for (const k in formData) {
      formIsvalid = formData[k].valid && formIsvalid;
    }
    this.setState({ orderForm: formData, formIsvalid: formIsvalid });
  };

  render() {
    const formEl = [];
    for (const k in this.state.orderForm) {
      formEl.push({ id: k, config: this.state.orderForm[k] });
    }
    let form = (
      <form onSubmit={this.createOrder}>
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
        <Button disabled={!this.state.formIsvalid} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger : (order,t) => dispatch(actionType.purchaseBurger(order,t))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));
