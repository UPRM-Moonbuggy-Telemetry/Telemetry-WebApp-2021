import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';

// Components
import Marker from "./Features/Marker";

// Styles
import './map.css';

// MapBox Token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map(){
    const mapContainerRef = useRef(null);

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,

            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-67.1533567, 18.2198062],
            zoom: 8.5 
        });

        // adds navigation controls, 'Zoom In, Zoom Out'
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        const LngLat = [-67.1533567, 18.2198062];
        map.on(new mapboxgl.Marker(Marker).setLngLat(LngLat).addTo(map));

        // clean up on unmount
        return () => map.remove();
    })

    return <div className="map-container" ref={mapContainerRef} />;
};