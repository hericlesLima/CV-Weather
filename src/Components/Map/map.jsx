import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapLeaflet() {
  return (
    <MapContainer className="mymap" center={[14.913722, -23.526897]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[14.913722, -23.526897]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}
