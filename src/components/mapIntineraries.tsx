"use client";

import { memo, useContext, useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { MapsContext } from "../contexts/MapsContext";
import { setDefaults, fromAddress } from "react-geocode";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MapIntineraries = () => {
  const [map, setMap] = useState(null);
  const { city, loading, markers } = useContext(MapsContext);
  const [center, setCenter] = useState({
    lat: -12.977733,
    lng: -38.501648,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (city && markers) {
      console.log(markers);

      fromAddress(city)
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
          setCenter({ lat, lng });
        })
        .catch(console.error);
    }
  }, [city, markers]);

  setDefaults({
    key: process.env.NEXT_PUBLIC_MAPS_KEY,
    language: "pt-BR",
    region: "br",
  });

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
  });

  return isLoaded ? (
    <div className="flex rounded-s-2xl w-full mx-auto h-[369px] md:h-full md:w-[462px] lg:w-[672px] xl:w-[792px] 2xl:w-[892px] mb-4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onClick={() => setActiveMarker(null)}
      >
        <>
          {markers.map(({ id, name, position }) => (
            <Marker
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </>
      </GoogleMap>
    </div>
  ) : (
    <div className="flex justify-center">
      <span className="text-Blak font-[50px]">Maps Not Found</span>
    </div>
  );
};

export default memo(MapIntineraries);
