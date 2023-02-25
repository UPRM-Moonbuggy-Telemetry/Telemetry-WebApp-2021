import React, { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';

// Components
import Marker from "./Features/Marker";

// Styles
import './map.css';

// Api
import { getGpsLocation } from '../../api/gpsLocation.js';

// MapBox Token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map(){
    const mapContainerRef = useRef(null);
    const [ LnglatState, setlnglatState ] = useState([-67.1533567, 18.2198062])
    
    // gets the most recent location of the buggy in the back-end
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         getGpsLocation().then(response => {
    //             if(response.status === 'success'){
    //                 const reponseLength = response.data.location.length-1;
    //                 const location = response.data.location[reponseLength];
    //                 setlnglatState((LnglatState) => [location.longitude, location.latitude])
    //             }
    //             else
    //                 console.log(response.msg)
    //         });
    //     }, 30000);//refresed every hour
    //     return () => clearInterval(interval);
    // });

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: LnglatState,
            zoom: 8.5 
        });
        

        // adds navigation controls, 'Zoom In, Zoom Out'
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // disables the user to pan the map by clicking and dragging the cursor to move on the map
        map.dragPan.disable();

        map.on(new mapboxgl.Marker(Marker).setLngLat(LnglatState).addTo(map));

        // clean up on unmount
        return () => map.remove();
    })

    return <div className="map-container" ref={mapContainerRef} />;
};