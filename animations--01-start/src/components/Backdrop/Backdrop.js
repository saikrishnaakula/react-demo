import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
    const bcClasses = props.show ? 'Backdrop BackdropOpen' : 'Backdrop BackdropClose';
  return <div className={bcClasses}></div>;
};

export default backdrop;
