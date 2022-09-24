import React from "react";
import "./styles/input.css";
const Button = ({ btnName, buttonHandller }) => {
  return (
    <div className="btnContainer">
      <button className="signuploginbtn" onClick={buttonHandller}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
