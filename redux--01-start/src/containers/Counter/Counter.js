import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    counter: 0,
  };

  

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onIncrementByValCounter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onDecrementByValCounter}
        />
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((e) => (
            <li key={e.id} onClick={()=>this.props.onRemoveResult(e.id)}>{e.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INC_COUNTER" }),
    onDecrementCounter: () => dispatch({ type: "DEC_COUNTER" }),
    onIncrementByValCounter: () =>
      dispatch({ type: "INC_COUNTER_VALUE", value: 5 }),
    onDecrementByValCounter: () =>
      dispatch({ type: "DEC_COUNTER_VALUE", value: 5 }),
    onStoreResult: (res) => dispatch({ type: "STORE_RESULT",res }),
    onRemoveResult: (id) => dispatch({ type: "REMOVE_RESULT",id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
