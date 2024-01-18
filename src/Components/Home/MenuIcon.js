import React from "react";
import SocialMedia from "../Contacts/SocialMedia";

function MenuIcon() {

    function toggleMenu() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    }


    return <div>
        <div className="menu-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" fill="black">
                <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
            </svg>
        </div>

        <div className="sidebar">
            <ul className = "sidebarUL">
                <li><a className = "link" href="/">Home</a></li>
                <li><a className = "link" href="/career">Career</a></li>
                <li><a className = "link" href="/contacts">Contacts</a></li>
                <li><a className = "link" href="/aboutme">About Me</a></li>
            </ul>

            

        </div>
    </div>
}

export default MenuIcon;