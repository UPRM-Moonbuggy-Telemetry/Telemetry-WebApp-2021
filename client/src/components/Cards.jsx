import React from 'react';
import Card from './Card';


// Component to hold all the cards needed and allocate them in the "dashboard" space

export default function Cards() {
    return (
        <div className="cardSection">
            <Card widget='widget 1' cardType='card'/>
            {/* <Card widget='widget 2' cardType='card'/>
            <Card widget='widget 3' cardType='card'/> */}

        </div>
    )
}
