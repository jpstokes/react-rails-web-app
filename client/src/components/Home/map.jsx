import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 37.7734826, lng: -122.4216396 }}>
    {props.isMarkerShown && <Marker position={{ lat: 37.7734826, lng: -122.4216396 }} />}
  </GoogleMap>));


export default Map
