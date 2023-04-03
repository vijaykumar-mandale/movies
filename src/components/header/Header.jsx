import React from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movies-logo-new.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return (
        <header className="header">
          <ContentWrapper>
            <div className="logo" onClick={()=>navigate("/")}>
              <img src={logo} alt=""/>
            </div>
          </ContentWrapper>
        </header>
    );
};

export default Header;