import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                
                <div className="infoText">
                    Copyright &copy; 2023. All rights reserved.
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;