import React from "react";
import "./styles/input.css";
const Required = ({ error }) => {
  return (
    <>
      <p className="errorRed">{error}</p>
    </>
  );
};

export default Required;
