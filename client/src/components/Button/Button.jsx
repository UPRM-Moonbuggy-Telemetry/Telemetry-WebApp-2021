import React from "react";

export default function Button({ text, icon, buttonStyle, callback, src, imageStyle }) {

    return (
        <div>
            <button style={buttonStyle} type="button" onClick={callback}>
                {text}
                {icon}
                { src !== undefined && <img alt={text} style={imageStyle} src={src} />}
            </button>
        </div>
    );
}