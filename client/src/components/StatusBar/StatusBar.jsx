import React, { useState } from "react";

// Styling
import "./statusBarStyle.css"

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, batteryIcon } from '@cds/core/icon';
ClarityIcons.addIcons(batteryIcon);

export default function StatusBar() {
    const [batteryState, setBatteryState] = useState(23);
    const [connectionState, setConnectionState] = useState(false);

    const current_date = new Date().toDateString();

    return (
        <div className="bar-block">
            <div className="bar-text">
                <span>{current_date}</span>
                <span style={connectionState ? {} : {color: 'red'}}>Connection: {connectionState ? "Online" : "Offline"}</span>
                <span>Battery: {batteryState}%
                    <CdsIcon className="bar-icons" size="md" shape="battery" badge={batteryState > 60 ? "info" : (batteryState < 60 && batteryState > 25) ? "warning" : "danger" } solid/>
                </span>
            </div>
        </div>
    );
}