import React from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movies-logo-new.png";

const Header = () => {
    return (
        <header className="header">
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt=""/>
            </div>
          </ContentWrapper>
        </header>
    );
};

export default Header;