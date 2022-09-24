import React from "react";
import "./styles/home.css";
import { NavLink } from "react-router-dom";
const Menu = ({ menu, destinationPath }) => {
  return (
    <>
      <div className="menuContainer">
        <NavLink className="menu" to={destinationPath}>
          {menu}
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
