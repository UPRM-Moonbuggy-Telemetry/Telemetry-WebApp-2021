import React from 'react';
import Card from './Card';
import GridLayout from 'react-grid-layout';
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
    const layout = [
        {i: 'GPS', x: 0, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 30},
        {i: 'b', x: 3, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10},
        {i: 'c', x: 6, y: 0, w: 3, h: 8, minW: 3, minH: 8, maxH: 10}
      ];

    return (
        <div className="cardSection">
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={28.3} width={1950}>
                {layout.map((i) => (
                    <div key={i.i} className="block">
                        <Card widget={`widget ${i.i}`} cardType='card'/>  
                    </div>
                ))}
            </GridLayout>
        </div>

    )
}
