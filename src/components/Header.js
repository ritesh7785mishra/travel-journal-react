import React from "react"
import globeLogo from "../images/globe-icon.png"




export default function Header(){
    
    return(
        <div className="header">
            <img src ={globeLogo}  alt="icon"/>
            <h1 className="header-title">My travel-journal</h1>
        </div>
    )
}