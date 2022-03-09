import React, { useContext } from 'react';

// Context
import { widgetContext } from '../../assets/contexts/WidgetContext';

// Grid Layout
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

// Components
import Card from './Card';
import Map from '../Map/Map.jsx';

// Styles
import './Cards.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

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

    const ResponsiveGridLayout = WidthProvider(Responsive)

    const layouts = {lg:[
        {i: 'GPS', x: 0, y: 0, w: 1, h: 1, isDraggable: true, isBounded: true},
        {i: 'STRAIN CHART', x: 0, y: 0, w: 1, h: 1},
        {i: 'c', x: 2, y: 0, w: 1, h: 1},
        // {i: 'd', x: 3, y: 0, w: 1, h: 1},


        // {i: 'b', x: 1, y: 0, w: 3, h: 8, minW: 3, maxH: 2},
        // {i: 'c', x: 3, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10},
        // {i: 'd', x: 4, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10},
        // {i: 'e', x: 0, y: 1, w: 3, h: 8, minW: 3, minH: 8, maxH: 10}
    ], md:[
        {i: 'b', x: 0, y: 0, w: 1, h: 1},
        {i: 'c', x: 1, y: 0, w: 1, h: 1},
        {i: 'd', x: 0, y: 0, w: 1, h: 1},
        {i: 'e', x: 1, y: 0, w: 1, h: 1}
    ]
    };

    return (
        <div style={{maxHeight:'max-content'}}>
            <ResponsiveGridLayout className="layout"  layouts={layouts} isBounded={true} compactType={"hoizontal"}
                breakpoints={{lg: 1201, md:1200}}
                cols={{lg: 3, md: 2}} 
                maxRows={2}
                rowHeight={400} 
                margin={[10,25]}>
                    { strainChartValue ?
                        <section key={'STRAIN CHART'} className="block">
                            <Card widget={`STRAIN CHART`}/>  
                        </section>
                        :
                        null
                    }
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
            </ResponsiveGridLayout>                    
        </div>
    )
}
