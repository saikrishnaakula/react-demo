import React, { Component } from "react";
import "./App.css";
import { Cockpit } from "../components/cockpit/cockpit";
import { Persons } from "../components/Person/persons";
import { AuthContext } from "../context/auth.context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[appjs]");
  }

  static getDerivedStateFromProps(props,state) {
    console.log("props");
    return state;
    
  }

  componentDidMount() {
    console.log("mount");
    
  }
  state = {
    person: [
      { id: "ads", name: "Akula Sai Krishna", age: 25 },
      { id: "adsfd", name: "Poojari Sai Sanvi", age: 4 },
      { id: "adsddd", name: "Dandi Varsha", age: 26 },
    ],
    toggle: false,
  };

  deletePerson = (id) => {
    const person = [...this.state.person];
    person.splice(id, 1);
    this.setState({
      person: person,
    });
  };
  changeName = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id === id);
    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      person: persons,
    });
  };
  togglePerson = () => {
    const curr = !this.state.toggle;
    this.setState({
      toggle: curr,
    });
  };

  render() {
    let person = null;
    if (this.state.toggle) {
      person = (
        <Persons
          person={this.state.person}
          typed={this.changeName}
          clicked={this.deletePerson}
        ></Persons>
      );
    }
    return (
      <main className="App">
        <AuthContext.Provider value={{auth: true}}>
        <Cockpit toggle={this.state.toggle} togglePerson={this.togglePerson} />
        {person}
        </AuthContext.Provider>
      </main>
    );
  }
}

export default App;
