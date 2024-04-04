"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import React from "react";
import { FaMarker } from "react-icons/fa";
import L from "leaflet";

type RestaurantDetailMapProps = {
  mapPosition?: {
    latitude: number;
    longitude: number;
  };
};

const RestaurantDetailMap = ({ mapPosition }: RestaurantDetailMapProps) => {
  const icon = L.icon({ iconUrl: "/img/marker-icon.png" });
  return mapPosition ? (
    <MapContainer
      center={[mapPosition?.latitude, mapPosition?.longitude]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full lg:w-[26rem] h-[14rem] rounded-md relative z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[mapPosition?.latitude, mapPosition?.longitude]}
        icon={icon}
      >
        <FaMarker />
      </Marker>
    </MapContainer>
  ) : null;
};

export default RestaurantDetailMap;
