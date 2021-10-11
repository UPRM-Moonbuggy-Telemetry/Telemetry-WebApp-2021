import React from "react";
import { Nav } from "react-bootstrap";
import "../App.css";
import '@cds/core/button/register.js';

//Images
import shortlogo from "../assets/shortlogo.png";
import uprmlogo from "../assets/uprm.png";
import nasalogo from "../assets/nasa.png";
import chevronlogo from "../assets/chevron.png";
import gmlogo from "../assets/gm.png";
import boeinglogo from "../assets/boeing.png";
import nnllogo from "../assets/NNL.png";


export default function Navbar() {

  return (
    <div className="hamburger-container">
    <body>
      <div className="menu-wrap" />
        <div className="menu">
          <div>
              {/* Moonbuggy Logo*/}
              <img alt= "moonbuggy logo" className="moonbuggy-logo" src={shortlogo} /> 
              {/* Nasa & UPRM Logos */}
              <img alt="uprm logo" className="uprm-logo" src={uprmlogo} />
              <img alt="nasa logo" className="nasa-logo" src={nasalogo} />
          </div>
          <div className="button-list" > {/* Buttons/Links */}
              <Nav.Link className="Navbar-button" href="/"> 
              <cds-icon shape="home" size="24"></cds-icon>
              <text>Dashboard</text></Nav.Link>
              <Nav.Link className="Navbar-button" href="/"><text>Analytics</text></Nav.Link>
              <Nav.Link className="Navbar-button" href="/"><text>About Us</text></Nav.Link>
          </div>
          <div className="logo-list">  {/* Sponsors */}
            <img alt="chevron logo" className="chevron-logo" src={chevronlogo} />
            <img alt="gm-logo" className="gm-logo" src={gmlogo} />
            <img alt="nnl-logo"className="nnl-logo" src={nnllogo} />
            <img alt="boeing-logo"className="boeing-logo" src={boeinglogo} />
          </div>
        </div>
      </body>
    </div>

    ); 
}