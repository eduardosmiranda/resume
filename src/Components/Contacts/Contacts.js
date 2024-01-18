import React from "react";
import SocialMedia from "./SocialMedia";
import MenuIcon from "../Home/MenuIcon";
import Methods from "./Methods";
import Footer from "../Footer/Footer";

function Contacts () {
    return <div className="container">
        <MenuIcon />
        <div className="center">
            <div className = "neurophormismContacts">
            <div className = "transparentDiv">
                <div className = "faceContacts backContacts">
                    <h3 className="contactsH3"> If you're interested in hiring me, please contact me via any option below: </h3>
                    <div className="contactInfo">
                        <Methods />
                        <SocialMedia />
                    </div>
                </div>
                <div className="faceContacts frontContacts">
                    <h1 className = "hireMeH1"> HIRE ME! </h1>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Contacts;