import React from "react";
import phoneGif from "../../filesAndStyles/files/phoneGif.gif"
import PortugalFlag from "../../filesAndStyles/files/portugal-flag-circular-17871.svg"


function Phone () {
    return <div className="phoneDiv">
        <div className = "socialIcon Phone">
            <img className="phoneGif" src={phoneGif} />
        </div>
        <div className="phoneAndFlag">
            <img className="portugalFlag" src={PortugalFlag} />
             <p className = "phoneText"> +351 912736402 </p>
        </div>
    </div>
}

export default Phone;