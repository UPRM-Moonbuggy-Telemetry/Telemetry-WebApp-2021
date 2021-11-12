import React from "react";

// Styles
import "./button.css"

export default function Button({ text, callback }) {
    return (
        <button className="default-button" type="button" onClick={callback}>
            {text}
        </button>
    );
}