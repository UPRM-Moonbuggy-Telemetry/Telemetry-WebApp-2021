import React from "react";

export default function Marker({ id }){
    return(
        <div id={`marker-${id}`} className="marker" />
    )
}

