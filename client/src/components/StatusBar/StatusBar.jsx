import React from "react";

// Styling
import "./statusBarStyle.css"

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, batteryIcon } from '@cds/core/icon';
ClarityIcons.addIcons(batteryIcon);

export default function StatusBar() {
    const current_date = new Date().toDateString();

    return (
        <div className="bar-block">
            <div className="bar-text">
                <span>{current_date}</span>
                <span>Connection: Online</span>
                <span>Battery: 45%
                    <CdsIcon className="bar-icons" size="md" direction="right" shape="battery" solid/>
                </span>
            </div>
        </div>
    );
}