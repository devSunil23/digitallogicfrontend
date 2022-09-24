import React from "react";
import "./styles/input.css";
const Commoninput = ({
  labelName,
  name,
  placeholder,
  onInputChange,
  value,
  type,
  inputName,
}) => {
  return (
    <div className="commonInput">
      <label htmlFor={labelName} className="labelName">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={labelName}
        onChange={onInputChange}
        value={value}
        name={inputName}
        className="inputName"
      />
    </div>
  );
};

export default Commoninput;
