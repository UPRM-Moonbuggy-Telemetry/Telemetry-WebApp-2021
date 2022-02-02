import React from 'react';
import Card from './Card';
import Gps from '../gps/Gps';
import { Container } from 'react-bootstrap';


// Component to hold all the cards needed and allocate them in the "dashboard" space

export default function Cards() {
    return (
        <Container className="cardSection">
            {/* <Card widget='widget 1' cardType='card'/> */}
            <Card id='map' widget='Gps' cardType='card' ></Card>
            {/* <Card widget='widget 2' cardType='card'/>
            <Card widget='widget 3' cardType='card'/> */}

        </Container>
    )
};
