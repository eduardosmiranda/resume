import React from "react";

function FooterNavBar () {
    return <div className="FooterNavBar">
            <ul className = "FooterSidebar">
                <li><a className = "FooterLink" href="/">Home</a></li>
                <li><a className = "FooterLink" href="/career">Career</a></li>
                <li><a className = "FooterLink" href="/contacts">Contacts</a></li>
                <li><a className = "FooterLink" href="/aboutme">About Me</a></li>
            </ul>
    </div>
}

export default FooterNavBar;