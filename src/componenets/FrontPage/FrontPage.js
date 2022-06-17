import React from "react";
import "./Frontpage.css";
import Intro from "../Intro/Intro";
import { Link } from "react-router-dom";
import cooler from "../images/cooler.jpg";
import soap from "../images/soap.jpg";
import torch from "../images/toarch.jpg";
import adidas from "../images/adidas.png";
import ck from "../images/ck.png";
import crocs from "../images/crocs.png";
import hp from "../images/hp.jpg";
import nike from "../images/nike.png";
import puma from "../images/puma.png";
import rolex from "../images/rolex.png";
import samsung from "../images/samsung.png";
import vivo from "../images/vivo.png";

const FrontPage = () => {
  return (
    <div className="frontMain">
      <h2>Best Offers</h2>

      <div className="frontOffers">
        <div className="frontOffer">
          <div className="frontOfferData">
            <img src={cooler} alt="cooler" />
            <h3>Cooler</h3>
            <p>upto 75% off</p>
          </div>
        </div>
        <div className="frontOffer">
          <div className="frontOfferData">
            <img src={soap} alt="soap" />
            <h3>Soaps</h3>
            <p>upto 55% off</p>
          </div>
        </div>
        <div className="frontOffer">
          <div className="frontOfferData">
            <img src={torch} alt="torch" />
            <h3>Torch Light</h3>
            <p>upto 40% off</p>
          </div>
        </div>
      </div>
      <h2>Top Brands</h2>
      <div className="frontBrands">
        <div className="frontBrand">
          <img src={adidas} alt="adidas" />
        </div>
        <div className="frontBrand">
          <img src={ck} alt="ck" />
        </div>
        <div className="frontBrand">
          <img src={puma} alt="puma" />
        </div>
        <div className="frontBrand">
          <img src={nike} alt="nike" />
        </div> 
         <div className="frontBrand">
          <img src={rolex} alt="rolex" />
        </div>
          <div className="frontBrand">
          <img src={hp} alt="hp" />
        </div> 
         <div className="frontBrand">
          <img src={crocs} alt="crocs" />
        </div> 
         <div className="frontBrand">
          <img src={samsung} alt="samsung" />
        </div> 
         <div className="frontBrand">
          <img src={vivo} alt="vivo" />
        </div>

        <div className="frontBrand"></div>
      </div>
      <Link to="/">back</Link>
    </div>
  );
};

export default FrontPage;
