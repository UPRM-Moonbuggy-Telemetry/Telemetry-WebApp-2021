import React from "react";
import { Nav } from "react-bootstrap";
// import "../../App.css";
import "./footer.css";

//Images
import shortlogo from "../../assets/shortlogo.png";
import uprmlogo from "../../assets/uprm.png";
import nasalogo from "../../assets/nasa.png";
import chevronlogo from "../../assets/chevron.png";
import gmlogo from "../../assets/gm.png";
import boeinglogo from "../../assets/boeing.png";
import nnllogo from "../../assets/NNL.png";

//Icon (home)
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, homeIcon } from '@cds/core/icon';
ClarityIcons.addIcons(homeIcon);

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