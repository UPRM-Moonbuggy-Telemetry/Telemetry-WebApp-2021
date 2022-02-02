import React, { useState } from 'react';
import ReactMapGL, {Marker}  from 'react-map-gl';

import '../../App.css';
require('dotenv').config();

let data = [ {name:'1', latitude:18.21, longitude:-67.14}];

function Gps(props) {

  let [viewport, setViewport] = useState({
    latitude: 18.208661248626324, 
    longitude: -67.13986862070315,
    zoom: 17,
  });

  // Example: https://github.com/visgl/react-map-gl/blob/6.1-release/examples/locate-user/src/app.js (example, also repo contains multiple examples)
  
  //this is gonna change later (only here for testing purposes)
  const cha = (e) =>{
    console.log(data[0].latitude);
    data = [{name:'1', latitude:data[0].latitude, longitude:data[0].longitude}];
    console.log(data[0].latitude);

    setViewport({
        latitude: data[0].latitude, 
        longitude: data[0].longitude,
        zoom: 15,
    });
};

  // Only rerender markers if props.data has changed basically a the most recent data point in the database
  const markers = React.useMemo(() => data.map(
    buggy => (
        <Marker key={buggy.name} longitude={buggy.longitude} latitude={buggy.latitude} draggable={false} >
            <text>👇</text>
            {/* <img src="pin.png" />  put a image here por the ping of the location  */}
        </Marker>
    )
  ), data);

  return (

    //move token to env file 
        <ReactMapGL 
        mapStyle={'mapbox://styles/mapbox/basic-v8'} //map style (colors of the actual map)

        //might change location to .env file 
        mapboxApiAccessToken={'pk.eyJ1IjoiYnVnZ3ktbW9vbiIsImEiOiJja3o1bzVjNXIwc2lpMm5ueHhleGpuaHpzIn0.ZVskW2d1JSJ5UBazW-uB6g'}
        {...viewport} //do not touch

        //don't change 
        width="inherit" // inherits the dimentions of container(cards)
        height="inherit"
        //don't change 

        //this is gonna change later (only here for testing purposes)
        //onViewportChange={(newView) => setViewport(newView)}> 
        //onMouseDown={cha()}
        onViewportChange={setViewport}>
        {markers}
      </ReactMapGL>
  );
}

export default Gps;