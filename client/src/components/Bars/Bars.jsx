import React, { useState, useContext } from "react";
import { Nav } from "react-bootstrap";
// Context
import { widgetContext } from "../../assets/contexts/WidgetContext";

// Components
import Button from "../Button/Button";
import Checkbox from "../CheckBox/Checkbox";

// Styles
import './bars.css'

// Icons
import { CdsIcon } from '@cds/react/icon';
import { ClarityIcons, homeIcon,lineChartIcon,userIcon } from '@cds/core/icon';
ClarityIcons.addIcons(homeIcon,lineChartIcon,userIcon);

export default function Bars (){
    const [ submenuState, setSubmenuState ] = useState(false);

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
    //Added respective icon constants
    const homeIconButton = <CdsIcon className="button-icon" size="md" shape="home" />;
    const lineIconButton = <CdsIcon className="button-icon" size="md" shape="line-chart" />;
    const userIconButton = <CdsIcon className="button-icon" size="md" shape="user" />;

    //added routing function
    // const barsToggle = () => (
    //     setBarsState(!barsState)
    // );

    return (
        <div className="bars-wrapper">
            <div className="bars-content">
                <div className="bars-item">
                <a href="/"> <Button buttonStyle={graphsButtonStyle} text='Dashboard' icon={homeIconButton}></Button> </a>
                </div>
                <div className="bars-item">
                    <a href="/analytics"> <Button buttonStyle={graphsButtonStyle} text='Analytics' icon={lineIconButton}></Button> </a>
                </div>
                <div className="bars-item">
                <a href="/aboutus"> <Button buttonStyle={graphsButtonStyle} text='About Us' icon={userIconButton}></Button> </a>
                </div>
            </div>
        </div>
    );
}