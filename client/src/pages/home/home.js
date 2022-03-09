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
    // Chart Widgets States
    const [ strainState, setStrainState ] = useState(false);
    const [ vibrationState, setVibrationState ] = useState(false);
    const [ shearState, setShearState ] = useState(false);

    // Other Widgets States
    const [ gpsState, setGpsState ] = useState(false);
    const [ livefeedState, setLivefeedState ] = useState(false);
    const [ speedState, setSpeedState ] = useState(false);

    const handleChange = (name) => {
        console.log(name.target.id)
        switch(name.target.id){
            case 'gps-map':
                setGpsState(!gpsState);
                break;
            case 'strain-chart':
                setStrainState(!strainState);
                break;
            case 'vibration-chart':
                setVibrationState(!vibrationState);
                break;
            case 'shear-chart':
                setShearState(!shearState);
                break;
            case 'live-feed':
                setLivefeedState(!livefeedState);
                break;
            case 'speed-o-meter':
                setSpeedState(!speedState);
                break;

            default:
        };
    };
    
    const widgetConValue = { gps: gpsState, strain: strainState, vibration: vibrationState, 
        shear: shearState, livefeed: livefeedState, speed: speedState, handleChange: handleChange };

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