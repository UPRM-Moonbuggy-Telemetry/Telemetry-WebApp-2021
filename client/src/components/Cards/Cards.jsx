import React, { useContext } from 'react';

// Context
import { widgetContext } from '../../assets/contexts/WidgetContext';

// Grid Layout
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

// Components
import Card from './Card';
import Map from '../Map/Map.jsx';
import StrainChart from '../StrainChart/StrainChart';

// Styles
import './Cards.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

// Component to hold all the cards needed and allocate them in the "dashboard" space
// To add cards add a new dictionary to the 'layout' array

export default function Cards() {
    // Context
    const gpsValue = useContext(widgetContext)['gps'];
    const strainChartValue = useContext(widgetContext)['strain'];

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
                            <Card widget={<StrainChart/>}/>  
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
