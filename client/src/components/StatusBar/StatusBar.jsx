import React, { useState, useEffect } from "react";

// Components
import Button from "../Button/Button.jsx";
import Menu from "../Menu/Menu.jsx";

// Api
import { getBatteryStatus } from "../../api/batteryStatus.js";

// Styling
import "./statusBarStyle.css"

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, batteryIcon, plusCircleIcon, minusCircleIcon } from '@cds/core/icon';
ClarityIcons.addIcons(batteryIcon, plusCircleIcon, minusCircleIcon);

export default function StatusBar() {
    // StatusBar States
    const [ batteryState, setBatteryState ] = useState(0);
    const [ connectionState, setConnectionState ] = useState(false);
    const [ menuState, setMenuState ] = useState(false);

    const current_date = new Date().toDateString();

    const iconButton = () => (
        (menuState ? 
            <CdsIcon className="button-icon" size="md" shape="minus-circle" solid/>
        :
            <CdsIcon className="button-icon" size="md" shape="plus-circle" solid/>
        )
    );

    const widgetButtonStyle = {
        height: "43.13px",
        border: "none",
        textAlign: "center",
        textDecoration: "none",
        background: "none",
        fontFamily: "Roboto Mono",
        lineHeight: "24px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "17px",
        color: "white",
        width: "100%",
        paddingLeft: "1em",
        paddingRight: "1em",
        cursor: "pointer"
    };

    const menuToggle = () => (
        setMenuState(!menuState)
    );
    
    // Getting the battery percentage from the back-end
    useEffect(() => {
        // const interval = setInterval(() => {
            getBatteryStatus().then(response => {
                if(response.status === 'success'){
                    const responseLength = response.data.battery.length-1;
                    setBatteryState(response.data.battery[responseLength].battery_percentage);
                }
                else
                    console.log(response.msg)
            });
        // }, 60000);

        // return () => clearInterval(interval);
    });
    
    return (
        <div>
            <div className="bar">
                <div className="add-button">
                    <Button buttonStyle={widgetButtonStyle} text='Widgets' icon={iconButton()} callback={() => menuToggle()}/>
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

            { menuState ? <Menu /> : null }
        </div>
    );
}