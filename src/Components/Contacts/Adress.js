import React from "react";
import HomeSVG from "../../filesAndStyles/files/home.svg"
import pinLocation from "../../filesAndStyles/files/pinLocation.svg"


function Adress () {

    return <div className = "adressDiv">
        <div className = "orderAdress">
        <div className ="socialIcon HomeAdress">
            <img className = "adressIcons" src = {HomeSVG}/>
        </div>
        <p> Rua Januário de Almeida, 82 Areia-Árvore </p>
        </div>

        <div className = "orderAdress">
        <div className ="socialIcon pinLocation">
            <img className = "adressIcons"  src = {pinLocation}/>
        </div> 
        <p> Vila do Conde, Porto, Portugal </p>
        </div>
    </div>
}

export default Adress;