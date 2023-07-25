import React from "react" 
import Troll from "../images/Troll Face.png"
export default function Navbar(){

    return(
        <header className="header">
            <img src={Troll} className="header-image"></img>
            <h1 className="header-title">Meme Generator</h1>
            <h3 className="header-project">React Couce - Project 3</h3>

        </header>
    )
}