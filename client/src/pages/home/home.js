import React from "react";
import "../../App.css";
import "./home.css";
import '../../components/Cards/Card.css';

import StatusBar from "../../components/StatusBar/StatusBar";
import Cards from "../../components/Cards/Cards";

function Home() {
    return (
        <>
        <StatusBar />
        <div className = "cardSection" style={{maxHeight: '1500px'}}>
            <Cards />
        </div>
        <div>
            <h2> This is Home</h2>
        </div></>
    );
  }
  
  export default Home;