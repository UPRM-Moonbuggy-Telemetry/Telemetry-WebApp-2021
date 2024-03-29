import React, { useState, useContext } from "react";

// Context
import { widgetContext } from "../../assets/contexts/WidgetContext";

// Components
import Button from "../Button/Button";
import Checkbox from "../CheckBox/Checkbox";

// Styles
import './menu.css'

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, angleIcon } from '@cds/core/icon';
ClarityIcons.addIcons(angleIcon);

export default function Menu(){
    const [ submenuState, setSubmenuState ] = useState(false);

    // Widget Values
    const gpsValue = useContext(widgetContext)['gps'];
    const strainChartValue = useContext(widgetContext)['strain'];
    const vibrationChartValue = useContext(widgetContext)['vibration'];
    const shearChartValue = useContext(widgetContext)['shear'];
    const livefeedValue = useContext(widgetContext)['livefeed'];
    const speedValue = useContext(widgetContext)['speed'];

    // OnChange handler
    const handleChange =  useContext(widgetContext)['handleChange'];

    const graphsButtonStyle = {
        border: "none",
        textAlign: "left",
        textDecoration: "none",
        background: "none",
        fontFamily: "Roboto Mono",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "17px",
        color: "#2E854F",
        width: "100%",
        cursor: "pointer"
    }

    const iconButton = () => (
        (submenuState ? 
            <CdsIcon className="button-icon up" size="md" shape="angle"/>
        : 
            <CdsIcon className="button-icon" size="md" shape="angle"/>
        )
    );

    const submenuToggle = () => (
        setSubmenuState(!submenuState)
    );

    return (
        <div className="menu-wrapper">
            <div className="menu-content">
                <div className="menu-item">
                    <Button buttonStyle={graphsButtonStyle} text='Graphs' icon={iconButton()} callback={() => submenuToggle()}/>
                </div>
                { submenuState ?
                    <div>
                        <div className="menu-item sub-item">
                            <Checkbox label="Strain" value={strainChartValue} handleChange={handleChange} name={'strain-chart'}/>
                        </div>
                        <div className="menu-item sub-item">
                            <Checkbox label="Vibration" value={vibrationChartValue} handleChange={handleChange} name={'vibration-chart'}/>
                        </div>
                        <div className="menu-item sub-item">
                            <Checkbox label="Shear Strain" value={shearChartValue} handleChange={handleChange} name={'shear-chart'} />
                        </div>
                    </div>
                    :
                    null }
                <div className="menu-item">
                    <Checkbox label="Live Feed" value={livefeedValue} handleChange={handleChange} name={'live-feed'} />
                </div>
                <div className="menu-item">
                    <Checkbox label="Speed-O-Meter" value={speedValue} handleChange={handleChange} name={'speed-o-meter'} />
                </div>
                <div className="menu-item">
                    <Checkbox label="Global Positioning System" value={gpsValue} handleChange={handleChange} name={'gps-map'}/>
                </div>
            </div>
        </div>
    );
}