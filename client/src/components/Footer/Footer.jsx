import React from "react";
import "./footer.css";

//Images
import uprmlogo from "../../assets/uprm.png";
import nasalogo from "../../assets/nasa.png";
import chevronlogo from "../../assets/chevron.png";
import gmlogo from "../../assets/gm.png";
import boeinglogo from "../../assets/boeing.png";
import nnllogo from "../../assets/NNL.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sponsors-list">
        <p className="text">Sponsors:</p>
        <img alt="nasa logo" src={nasalogo} />
        <img alt="nnl-logo" src={nnllogo} />
        <img alt="chevron logo" src={chevronlogo} />
        <img alt="gm-logo" src={gmlogo} />
        <img alt="uprm logo" src={uprmlogo} />
        <img alt="boeing-logo" src={boeinglogo} />
      </div> 
    </div>
    ); 
}