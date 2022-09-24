import React, { useState } from "react";
import Button from "./Button";
import Commoninput from "./Commoninput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CommonDescription from "./CommonDescription";
import "./styles/login.css";
import Required from "./Required";
import { tokenAtom } from "./models";
import { useAtom } from "jotai";
import { commonUrlAtom } from "./models";
const Signup = () => {
  const [dataInfo, setDataInfo] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  const [token, setToken] = useAtom(tokenAtom);
  const [showValid, setShowValid] = useState(false);
  const [formRegistrationError, setformRegistrationError] = useState({});
  const [commonUrl] = useAtom(commonUrlAtom);
  const navigate = useNavigate();
  /** This function for handle name input change */
  let names, value;
  const inputChange = (e) => {
    names = e.target.name;
    value = e.target.value;
    setDataInfo({ ...dataInfo, [names]: value });
  };
  /** This function for save input field */
  const signupBtnHandller = async (e) => {
    e.preventDefault();
    setformRegistrationError(validate(dataInfo));
    try {
      const response = await axios.post(`${commonUrl}/signup`, {
        userFullName: dataInfo.fullName,
        username: dataInfo.userName,
        password: dataInfo.password,
      });
      if (response.status === 200) {
        setToken(response.data.token);
        navigate("/login");
        window.alert("Registration Success !");
      } else if (response.status === 409) {
        window.alert("User is already exist !");
      } else {
        setDataInfo({
          fullName: "",
          userName: "",
          password: "",
        });
        setShowValid(true);
      }
    } catch (error) {
      setDataInfo({
        fullName: "",
        userName: "",
        password: "",
      });
      setShowValid(true);
    }
  };
  /**This function for validation */
  const validate = (values) => {
    const error = {};
    if (!values.fullName) {
      error.fullName = "Full Name is required";
    }
    if (!values.userName) {
      error.userName = "Username is required";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };
  return (
    <div className="signupContainer">
      <div className="SignupBox">
        <p className="signup">Sign up</p>
        <Commoninput
          labelName="FullName"
          name="Full Name"
          placeholder="Enter your Name"
          onInputChange={inputChange}
          value={dataInfo.fullName}
          type="text"
          inputName="fullName"
        />
        <Required error={formRegistrationError.fullName} />
        <Commoninput
          labelName="userName"
          name="Username"
          placeholder="Enter User Name"
          onInputChange={inputChange}
          value={dataInfo.userName}
          type="text"
          inputName="userName"
        />
        <Required error={formRegistrationError.userName} />
        <Commoninput
          labelName="password"
          name="Password"
          placeholder="Enter Password"
          onInputChange={inputChange}
          value={dataInfo.password}
          type="password"
          inputName="password"
        />
        <Required error={formRegistrationError.password} />
        <Button btnName="SIGN UP" buttonHandller={signupBtnHandller} />
        {showValid ? (
          <div className="failedShow">
            <Required error="Registration Failed" />
          </div>
        ) : (
          ""
        )}
        <CommonDescription
          description="if you have already registerd"
          login="Please Login"
          navigateTo="/login"
        />
      </div>
    </div>
  );
};

export default Signup;
