import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Commoninput from "./Commoninput";
import axios from "axios";
import CommonDescription from "./CommonDescription";
import "./styles/login.css";
import Required from "./Required";
import { useAtom } from "jotai";
import { userNameAtom } from "./models";
import { tokenAtom } from "./models";
import { commonUrlAtom } from "./models";
const Login = () => {
  const [formRegistrationError, setformRegistrationError] = useState({});
  const [commonUrl] = useAtom(commonUrlAtom);
  const [showValid, setShowValid] = useState(false);
  const [setUserName] = useAtom(userNameAtom);
  const [setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();
  const [dataInfo, setDataInfo] = useState({
    userName: "",
    password: "",
  });

  /** This function for handle name input change */
  let names, value;
  const inputChange = (e) => {
    names = e.target.name;
    value = e.target.value;
    setDataInfo({ ...dataInfo, [names]: value });
  };

  /** This function for login */
  const loginBtnHandller = async (e) => {
    e.preventDefault();
    setformRegistrationError(validate(dataInfo));
    try {
      const response = await axios.post(`${commonUrl}/login`, {
        username: dataInfo.userName,
        password: dataInfo.password,
      });
      if (response.status === 200) {
        setUserName(response.data.userFullName);
        setToken(response.data.token);
        window.alert("Login succesfull !");
        navigate("/home");
      } else {
        setDataInfo({
          userName: "",
          password: "",
        });
        setShowValid(true);
      }
    } catch (error) {
      setDataInfo({
        userName: "",
        password: "",
      });
      setShowValid(true);
    }
  };

  /**This function for validation */
  const validate = (values) => {
    const error = {};
    if (!values.userName) {
      error.userName = "Username is required";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <p className="login">Login</p>
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
        <Button btnName="Login" buttonHandller={loginBtnHandller} />
        {showValid ? (
          <div className="failedShow">
            <Required error="Login Failed" />
          </div>
        ) : (
          ""
        )}
        <CommonDescription
          description="if you have not registerd yet"
          login="Please Sign up"
          navigateTo="/"
        />
      </div>
    </div>
  );
};

export default Login;
