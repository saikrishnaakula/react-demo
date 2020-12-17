import React from 'react';
import "./NavigationItems.css";
import { NavLink } from 'react-router-dom';
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <li className="NavigationItem"><NavLink to="/" exact >Burger Builder</NavLink></li>
        {props.isAuth? <li  className="NavigationItem"><NavLink to="/orders" >Orders</NavLink></li>:null}
        { !props.isAuth ? 
        <li className="NavigationItem"><NavLink to="/auth" >Login</NavLink></li>:
        <li className="NavigationItem"><NavLink to="/logout" >Logout</NavLink></li>
        }
    </ul>
);


export default NavigationItems;