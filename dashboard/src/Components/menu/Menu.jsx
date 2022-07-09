import React from "react";
import "./Menu.scss";
import Menu_Items from "./menu-items/menu-items";

const Menu = () => {
  return (
    <div className="Menu-wrapper">
      <div className="Menu">
        <Menu_Items/>
      </div>
    </div>
  );
};

export default Menu;
