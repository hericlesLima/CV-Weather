import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MapLeaflet from "../Map/map";

import "./location.css"

export default function Location() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    console.log(latitude);
    console.log(longitude);
  }, [latitude, longitude]);

  return (
    <div className="map-leaflet">
      <MapLeaflet latitude={latitude} longitude={longitude} />
    </div>
  );
}
