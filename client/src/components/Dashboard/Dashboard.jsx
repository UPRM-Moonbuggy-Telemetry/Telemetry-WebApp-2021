import React, { useState, useContext, useEffect } from "react";
import "./dashboard.css";

import { Grid } from '@material-ui/core';
import Card from "../Card/Card";
import Map from "../Map/Map";

// Context
import { widgetContext } from '../../assets/contexts/WidgetContext';
import { viewColumnsIcon } from "@cds/core/icon";

export default function Dashboard() {
    const gpsValue = useContext(widgetContext)['gps'];
    const strainChartValue = useContext(widgetContext)['strain'];
    const vibrationChartValue = useContext(widgetContext)['vibration'];
    const shearChartValue = useContext(widgetContext)['shear'];
    const livefeedValue = useContext(widgetContext)['livefeed'];
    const speedValue = useContext(widgetContext)['speed'];

    const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     livefeedValue ? 
    //         setCards([...cards, <section key={'livefeed'} className="block"><Card widget={'livefeed'}/></section>]) 
    //         : 
    //         setCards([...cards.filter((card) => card.key !== 'livefeed')])
    // }, [livefeedValue])

    // useEffect(() => {
    //     speedValue ? 
    //         setCards([...cards, <section key={'speed'} className="block"><Card widget={'speed'}/></section>]) 
    //         : 
    //         setCards([...cards.filter((card) => card.key !== 'speed')])
    // }, [speedValue])

    useEffect(() => {
        const updatedCards = []

        gpsValue && updatedCards.push(<section key={'GPS'} className="block"><Card widget={<Map />}/></section>)
        strainChartValue && updatedCards.push(<section key={'strainChart'} className="block"><Card widget={'strainChart'}/></section>)
        vibrationChartValue && updatedCards.push(<section key={'vibrationChart'} className="block"><Card widget={'vibrationChart'}/></section>)
        shearChartValue && updatedCards.push(<section key={'shearChart'} className="block"><Card widget={'shearChart'}/></section>)
        livefeedValue && updatedCards.push(<section key={'livefeed'} className="block"><Card widget={'livefeed'}/></section>)
        speedValue && updatedCards.push(<section key={'speed'} className="block"><Card widget={'speed'}/></section>)

        setCards(updatedCards)
    }, [gpsValue, strainChartValue, vibrationChartValue, shearChartValue, livefeedValue, speedValue])

    return (
        <div className="dashboard-container">
            <Grid container spacing={3}>
                {cards.map((card, index) => (
                    <Grid item xs={4} key={index}>
                        {card}
                    </Grid>
                ))}
            </Grid>
        </div>
    ); 
}