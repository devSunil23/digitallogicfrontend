import React from "react";
import "./styles/home.css";
const Menu = ({ menu, handleClickMenu }) => {
  return (
    <>
      <div className="menuContainer">
        <p className="menu" onClick={handleClickMenu}>
          {menu}
        </p>
      </div>
    </>
  );
};

export default Menu;
