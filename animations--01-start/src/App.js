import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition, CSSTransition } from "react-transition-group";

const animationTiming = {
  enter:300,
  exit:1000
};

class App extends Component {
  state = {
    show: false,
  };

  showModel = () => {
    this.setState({ show: true });
  };
  closeModel = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <CSSTransition mountOnEnter unmountOnExit in={this.state.show} timeout={animationTiming} classNames="fade-slide">
          {(state) => <Modal show={state} closed={this.closeModel} />}
        </CSSTransition>
        <Backdrop show={this.state.show} />
        <button onClick={this.showModel} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
