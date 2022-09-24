import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useNavigate, Outlet } from "react-router-dom";
import "./styles/home.css";
import { tokenAtom } from "./models";
import axios from "axios";
import { commonUrlAtom } from "./models";
import Menu from "./Menu";
const Home = () => {
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
      <div className="HomePageContainer">
        <div className="siderLeft">
          <Menu menu="Order" destinationPath="/home/order" />
          <Menu menu="Products" destinationPath="/home/product" />
          <Menu menu="customers" destinationPath="/home/customer" />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
