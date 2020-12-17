import React from 'react';
import "./BuildControl.css";

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button disabled={props.disabled} onClick={props.less} className="Less">Less</button>
            <button onClick={props.add} className="More">More</button>
        </div>
    );
}

export default BuildControl;