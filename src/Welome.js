import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import { userNameAtom } from "./models";
import { tokenAtom } from "./models";
import { commonUrlAtom } from "./models";
import axios from "axios";
const Welome = () => {
  const [userName] = useAtom(userNameAtom);
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
    <>
      {" "}
      <div className="homeContainer">
        <div className="welComeUserName">
          <div className="userName">
            Welcome, <span className="userspan">{userName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welome;
