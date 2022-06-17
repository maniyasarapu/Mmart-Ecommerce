import React from "react";
import logo from "../images/images.jpg";
import "./Intro.css";
import { Link } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";

const Intro = () => {
  return (
    <div className="IntroMain">
       <div >
        <div className="Introimg">
        <img src={logo}></img>
        </div>
       </div>
       <div className="IntroPart">
        <p>
        Hurry up!
            MMart is a great Online shopping website to get whatever you want with high discounts.
            why are you late?
        </p>
        <Link to="/front">Let's go</Link>
        
       </div>
    </div>
  )
}

export default Intro
