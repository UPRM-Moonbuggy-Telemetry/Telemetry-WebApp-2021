import React from 'react';
import './card.css';
import PropTypes from 'prop-types'

export default function Card({ widget, cardType }) {
    return (
        // placeholder contents for future widgets
        <div className={cardType}>
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
