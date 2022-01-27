import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react/cjs/react.development";

export default function MapLeaflet(props) {
  const [map, setMap] = useState(undefined);

  useEffect(() => {
    if (map) {
      map.flyTo([props.latitude, props.longitude]);
    }
  }, [props.latitude, props.longitude, map]);

  return (
    <MapContainer
      whenCreated={setMap}
      className="mymap"
      center={[20, 20]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[props.latitude, props.longitude]}></Marker>
    </MapContainer>
  );
}
