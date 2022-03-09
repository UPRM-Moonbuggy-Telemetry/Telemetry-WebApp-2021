import React, { useState } from "react";
import "../../App.css";
import "./home.css";
import '../../components/Cards/Card.css';

// Context
import { widgetContext } from "../../assets/contexts/WidgetContext";

// Components
import StatusBar from "../../components/StatusBar/StatusBar";
import Cards from "../../components/Cards/Cards";

function Home() {
    const [ gpsState, setGpsState ] = useState(false);
    const [ strainState, setStrainState ] = useState(false);

    const handleChange = (name) => {
        console.log(name.target.id)
        switch(name.target.id){
            case 'gps-map':
                setGpsState(!gpsState);
                break;
            case 'strain-chart':
                setStrainState(!strainState);
                break;

            default:
        }
    }
    
    const widgetConValue = { gps: gpsState, strain: strainState, handleChange: handleChange }

    return (
        <>
            <widgetContext.Provider value={widgetConValue}>
                <div className = "cardSection" style={{maxHeight: '1500px'}}>
                    <Cards />
                </div>
                <StatusBar />
            </widgetContext.Provider>
        </>
    );
  }
  
  export default Home;