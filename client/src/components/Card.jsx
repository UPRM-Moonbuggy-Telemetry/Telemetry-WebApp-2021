import React from 'react';
import './Card.css';

//Component to represent the "cards" that will show up on screen with the different "widgets"
//"cardType" is a prop of type String which will determine the styling of the card as needed for each different widget
//"widget" is a prop of dynamic type(for now) which will hold the actual widget component that will show on top of the card

export default function Card({widget, cardType}) {
    return (
        <div className={cardType}>
            <text className = "card-text">
                {widget}
            </text>
        </div>
    )
}
