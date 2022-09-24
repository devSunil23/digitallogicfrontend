import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/login.css";
const CommonDescription = ({ description, login, navigateTo }) => {
  return (
    <>
      <p className="commonDescription">
        {description} ?{" "}
        <NavLink to={navigateTo} className="creatAccount">
          {login}
        </NavLink>
      </p>
    </>
  );
};

export default CommonDescription;
