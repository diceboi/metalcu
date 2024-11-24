"use client";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function GoogleMaps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;

    const lat = 47.47385151324175
    const lng = 18.851030727488705

    return <Map coordinates={{ lat, lng }} />;
}

function Map({ coordinates }) {
    return (
        <GoogleMap
            zoom={12}
            center={coordinates}
            mapContainerClassName="map-container"
        >
            <Marker position={coordinates} />
        </GoogleMap>
    );
}
