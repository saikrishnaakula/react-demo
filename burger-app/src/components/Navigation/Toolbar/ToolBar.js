import React from "react";
import "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDraw/DrawerToggle/DrawToggle";

const ToolBar = (props) => (
  <header className="ToolBar">
    <DrawerToggle clicked={props.drawToggleClicked}/>
    <div style={{ height: "80%" }}>
      <Logo />
    </div>
    <nav className="desktoponly">
      <NavigationItems isAuth={props.auth}/>
    </nav>
  </header>
);

export default ToolBar;
