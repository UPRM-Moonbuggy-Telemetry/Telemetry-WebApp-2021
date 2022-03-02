import React from "react";

export default function Checkbox({ label, value, handleChange, name }){
    return(
        <label>
            <input id={name} type="checkbox" checked={value} onChange={handleChange} />
            {label}
        </label>
    );
}