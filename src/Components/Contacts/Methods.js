import React from "react";
import Phone from "./Phone";
import Email from "./Email";
import Adress from "./Adress"

function Methods () {
    return <div className = "Methods">
        <div className = "phoneAndEmail">
        <Email />
        <Phone />
        </div>
        <Adress />
    </div>
}


export default Methods;