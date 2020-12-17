import React from 'react';

import burgerLog from "../../assets/images/burger-logo.png";
import "./Logo.css"

const Logo = () => (
<div className="Logo">
    <img src={burgerLog} alt="MyBurger"/>
</div>
); 

export default Logo;