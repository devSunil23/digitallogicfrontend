import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/home.css";
import { tokenAtom } from "./models";
import { commonUrlAtom } from "./models";
const Customer = () => {
  const [token] = useAtom(tokenAtom);
  const [commonUrl] = useAtom(commonUrlAtom);
  const navigate = useNavigate();
  /** This is for check authentication  */
  const welcomeFunc = async () => {
    try {
      const response = await axios.get(`${commonUrl}/welecome`, {
        headers: { Authorization: `${token}` },
      });
      if (response.status === 200) {
      } else {
        window.alert("Authentication failed !");
        navigate("/login");
      }
    } catch (error) {
      window.alert("Authentication failed !");
      navigate("/login");
    }
  };
  useEffect(() => {
    welcomeFunc();
  });
  return (
    <div className="pageProduct">
      <p className="ordderMenu">Customer</p>
    </div>
  );
};

export default Customer;
