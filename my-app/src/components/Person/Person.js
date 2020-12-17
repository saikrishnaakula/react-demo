import React from "react";
// #npx generate-react-cli component sample
import "./person.css";
import { AuthContext } from "../../context/auth.context";

const Person = (props) => {
  return (
    <div className="person">
      <AuthContext.Consumer>
        {(context) => context.auth ? <p>Authenticated</p> : <p>false</p>
        }
      </AuthContext.Consumer>
      <p onClick={props.click}>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
