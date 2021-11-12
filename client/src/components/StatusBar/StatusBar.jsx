import React, { useState } from "react";

// Components
import "../Button/Button.jsx"

// Styling
import "./statusBarStyle.css"

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, batteryIcon, plusCircleIcon } from '@cds/core/icon';
import Button from "../Button/Button.jsx";
ClarityIcons.addIcons(batteryIcon, plusCircleIcon);

export default function StatusBar() {
    const [batteryState, setBatteryState] = useState(23);
    const [connectionState, setConnectionState] = useState(false);

    const current_date = new Date().toDateString();

    return (
        <div className="bar">
            <div className="add-button">
                <Button text='Widget' callback={() => console.log("Clicked")}/>
                <CdsIcon className="button-icon" size="md" shape="plus-circle" solid/>
            </div>
            <div className="bar-block">
                <div className="bar-text">
                    <span>{current_date}</span>
                    <span style={connectionState ? {} : {color: 'red'}}>Connection: {connectionState ? "Online" : "Offline"}</span>
                    <span>Battery: {batteryState}%
                        <CdsIcon className="bar-icons" size="md" shape="battery" badge={batteryState >= 60 ? "info" : (batteryState < 60 && batteryState > 25) ? "warning" : "danger" } solid/>
                    </span>
                </div>
            </div>
        </div>
    );
}