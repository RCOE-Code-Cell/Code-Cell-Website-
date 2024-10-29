"use client"
import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import '../styles/map.css'
import 'leaflet/dist/leaflet.css'
function Map() {
    const points = [
      
        {
            coordinates: [19.0667, 72.826],
            popup: "Cybersecurity workshop , 4-March"
        },
    ];

    return (
        <div>
           

            <MapContainer center={[19.0667, 72.826]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a https://api.maptiler.com/maps/satellite/tiles.json?key=bMEWXYfCjeUC5yYo4EOC'
                    url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=bMEWXYfCjeUC5yYo4EOC"
                />
                {
                    points.map((point, index) => (
                        <Marker key={index} position={point.coordinates}>
                            <Popup>
                                {point.popup}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
}

export default Map
