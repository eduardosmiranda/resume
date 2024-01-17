import React from "react";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterNavBar from "./FooterNavBar";

function Footer () {
    return <div className = "footer">
        <h1 className="FooterEduardo">
            Eduardo Miranda
        </h1>

        <FooterSocialMedia/>

        <p className="copyright">
            Copyright 2024 ©  <FooterNavBar/>
        </p>
    </div>
}

export default Footer;