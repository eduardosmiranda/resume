import React from "react";

function FooterSocialMedia () {

    return <div className="FooterSocialMediaDiv">
        <ul className="SocialMediaList">
            <li className="item">
                <a href="https://www.instagram.com/_edu_sm" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram icon"></i>
                </a>
            </li>

            <li className="item">
                <a href="https://www.linkedin.com/in/eduardo-miranda-674a89208/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin icon"></i>
                </a>
            </li>

            <li className="item">
                <a href="https://github.com/eduardosmiranda" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github icon"></i>
                </a>
            </li>

            <li className="item">
                <a href="https://www.facebook.com/edu.miranda.1700/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook icon"></i>
                </a>
            </li>
        </ul>
    </div>
}

export default FooterSocialMedia;