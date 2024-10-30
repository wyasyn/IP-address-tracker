import { IpDataContext } from "@/context/IpDataContext";
import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS for proper rendering

// Custom component to update map center dynamically
const MapUpdater: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
};

const Map: React.FC = () => {
  const { ipData } = useContext(IpDataContext)!;

  if (!ipData) return null;

  const { lat, lng } = ipData.location;

  return (
    <div id="map" className="flex flex-col w-full h-screen relative z-10">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            {ipData.location.city}, {ipData.location.region}
          </Popup>
        </Marker>
        <MapUpdater lat={lat} lng={lng} />{" "}
        {/* This component updates the map view */}
      </MapContainer>
    </div>
  );
};

export default Map;
