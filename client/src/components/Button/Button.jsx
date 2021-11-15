import React from "react";

export default function Button({ text, icon, buttonStyle, callback }) {

    return (
        <div>
            <button style={buttonStyle} type="button" onClick={callback}>
                {text}
                {icon}
            </button>
        </div>
    );
}