import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userNameAtom } from "./models";
import "./styles/home.css";
import { tokenAtom } from "./models";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { commonUrlAtom } from "./models";
import Menu from "./Menu";
const Home = () => {
  const [userName, setUserName] = useAtom(userNameAtom);
  const [token, setToken] = useAtom(tokenAtom);
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

  /** This is for naviate menu page */

  const handleClickMenu = (value) => {
    if (value === "products") {
      navigate("/product");
    }
    if (value === "customers") {
      navigate("/customer");
    }
    if (value === "orders") {
      navigate("/order");
    }
  };
  return (
    <>
      <div className="homeContainer">
        <div className="welComeUserName">
          <div className="userName">
            Welcome, <span className="userspan">{userName}</span>
          </div>
          <div className="carouselContainer">
            <Carousel
              autoPlay={true}
              centerMode={true}
              width="200px"
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
            >
              <div className="producsMenu">
                <Menu
                  menu="Products"
                  handleClickMenu={() => handleClickMenu("products")}
                />
              </div>
              <div className="producsMenu">
                <Menu
                  menu="Customers"
                  handleClickMenu={() => handleClickMenu("customers")}
                />
              </div>
              <div className="producsMenu">
                <Menu
                  menu="Orders"
                  handleClickMenu={() => handleClickMenu("orders")}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
