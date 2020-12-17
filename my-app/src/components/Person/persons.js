import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";

export const Persons = (props) =>
  props.person.map((p, i) => {
    return (
      <Person
        click={() => props.clicked(i)}
        name={p.name}
        age={p.age}
        key={p.id}
        changed={(event) => props.typed(event, p.id)}
      />
    );
  });

Person.propTypes = {
  click : PropTypes.func,
  name: PropTypes.string
};
