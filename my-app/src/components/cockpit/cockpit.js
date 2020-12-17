import React, { Fragment } from 'react';
import './cockpit.css';

export const Cockpit = (props) => {
    const classes = ['red','bold'];
    const btnClasses = ["btn"];
    if(props.toggle) {
        btnClasses.push("btn-new");
    }
    return (
        <Fragment>
        <p className={classes.join(" ")}>welcome to: </p>
        <button className={btnClasses.join(" ")} onClick={props.togglePerson}>
          click me
        </button>
        </Fragment>
    );
}