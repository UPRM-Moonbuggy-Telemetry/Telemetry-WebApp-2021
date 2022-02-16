import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'

//Component to represent the "cards" that will show up on screen with the different "widgets"
//"cardType" is a prop of type String which will determine the styling of the card as needed for each different widget
//"widget" is a prop of dynamic type(for now) which will hold the actual widget component that will show on top of the card

export default function Card({widget, cardType}) {
    return (
        // placeholder contents for future widgets
        <div className={cardType}>
        {/* <text className = "card-text">
            {widget}{` cardtype:${cardType}`}
        </text> */}
        {widget}
        </div>
    )
}

Card.defaultProps = {
    cardType: "card",
}

Card.propTypes = {
    cardType: PropTypes.string,
    widget: PropTypes.any.isRequired
}
