import React, { useContext } from 'react';

// Context
import { widgetContext } from '../../assets/contexts/WidgetContext';

// Components
import Card from './Card';
import Map from '../Map/Map.jsx';

// Styles
import './Cards.css'

// Component to hold all the cards needed and allocate them in the "dashboard" space
// To add cards add a new dictionary to the 'layout' array

export default function Cards() {
    // Widget Values
    const gpsValue = useContext(widgetContext)['gps'];
    const strainChartValue = useContext(widgetContext)['strain'];
    const vibrationChartValue = useContext(widgetContext)['vibration'];
    const shearChartValue = useContext(widgetContext)['shear'];
    const livefeedValue = useContext(widgetContext)['livefeed'];
    const speedValue = useContext(widgetContext)['speed'];

    return (
        <div style={{maxHeight:'max-content'}}>
            {/* { strainChartValue ?
                <section key={'STRAIN CHART'} className="block">
                    <Card widget={<StrainChart/>}/>  
                </section>
                :
                null
            } */}
            { vibrationChartValue ?
                <section key={'VIBRATION CHART'} className="block">
                    <Card widget={`VIBRATION CHART`}/>  
                </section>
                :
                null
            }
            { shearChartValue ?
                <section key={'SHEAR CHART'} className="block">
                    <Card widget={`SHEAR CHART`}/>  
                </section>
                :
                null        
            }
            { livefeedValue ?
                <section key={'LIVE FEED CHART'} className="block">
                    <Card widget={`LIVE FEED CHART`}/>  
                </section>
                :
                null        
            }
            { speedValue ?
                <section key={'SPEED-O-METER CHART'} className="block">
                    <Card widget={`SPEED-O-METER CHART`}/>  
                </section>
                :
                null        
            }
            { gpsValue ?
                <section key={'GPS'} className="block">
                    <Card widget={<Map />}/>  
                </section>
                :
                null                        
            }             
        </div>
    )
}
