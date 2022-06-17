import React from "react";
import "./Header.css";
import kids from '../images/kids.jpg';
import men from "../images/men.jpg";
import mobile from "../images/mobile.jpg";
import furn from "../images/furniture.jpg";
import electronics from "../images/electronics.jpg";

const Header = () => {
  return (
    <div className="HeaderMain">
        <div className="HeaderOption">
           <img src={mobile} />
            mobiles
        </div>
        <div className="HeaderOption">
        <img src={men} />

            clothes
        </div>
        <div className="HeaderOption">
        <img src={mobile} />

            grocry
        </div>
        <div className="HeaderOption"> 
        <img src={electronics} />

          Electonics
        </div>
        <div className="HeaderOption">
        <img src={kids} />

            kids
        </div>
        <div className="HeaderOption">
        <img src={furn} />

            Furniture
        </div>
        <div className="HeaderOption">
        <img src={furn} />

            Furniture
        </div><div className="HeaderOption">
        <img src={furn} />

            Furniture
        </div><div className="HeaderOption">
        <img src={furn} />

            Furniture
        </div><div className="HeaderOption">
        <img src={furn} />

            Furniture
        </div>
    </div>

  )
}

export default Header;