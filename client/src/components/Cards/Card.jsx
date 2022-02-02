import React from 'react';
import './Card.css';
import Gps from '../gps/Gps';
import { Container } from 'react-bootstrap';

//Component to represent the "cards" that will show up on screen with the different "widgets"
//"cardType" is a prop of type String which will determine the styling of the card as needed for each different widget
//"widget" is a prop of dynamic type(for now) which will hold the actual widget component that will show on top of the card

export default function Card({widget, cardType}) {
    return (
        <div className={cardType}>

           {
               widget==='Gps'? <Gps/> : " "
           }
        </div>
    )
}
