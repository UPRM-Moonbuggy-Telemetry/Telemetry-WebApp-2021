import React from 'react';
import Card from './Card';
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Cards.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

// Component to hold all the cards needed and allocate them in the "dashboard" space
// To add cards add a new dictionary to the 'layout' array

// Dictionary entry props(minW,minH,maxW,maxH are optional): 
//      {x: starting x grid coord.}, {y: starting y grid coord.}, {w: starting element grid width},
//      {h: starting element grid height}, {minW: minimum element grid width}, {minH: minimum element grid height},
//      {maxW: maximum element grid width}, {maxH: maximum element grid Height}

export default function Cards() {

    const ResponsiveGridLayout = WidthProvider(Responsive)

    const layouts = {lg:[
        {i: 'GPS', x: 1, y: 0, w: 2, h: 4},
        {i: 'b', x: 3, y: 0, w: 2, h: 4},
        {i: 'c', x: 5, y: 0, w: 2, h: 4},
        {i: 'd', x: 7, y: 0, w: 2, h: 4},


        // {i: 'b', x: 1, y: 0, w: 3, h: 8, minW: 3, maxH: 2},
        // {i: 'c', x: 3, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10},
        // {i: 'd', x: 4, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10},
        // {i: 'e', x: 0, y: 1, w: 3, h: 8, minW: 3, minH: 8, maxH: 10}
    ]
    };

    return (
        <div style={{maxHeight:'max-content'}}>
            <ResponsiveGridLayout className="layout" layout={layouts} isBounded={true} compactType={"hoizontal"}
            breakpoints={{lg: 2000}}
            cols={{lg: 12, md: 3}} 
            maxRows={2}
            rowHeight={200} 
            margin={[10,25]}>
                {layouts['lg'].map((i) => (
                    <section key={i.i} className="block">
                        <Card widget={`${i.i} widget`}/>  
                    </section>
                ))}
            </ResponsiveGridLayout>
        </div>
    )
}
