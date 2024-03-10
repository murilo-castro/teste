'use client';

import { createContext, useContext, useState } from 'react';

export const MapsContext = createContext({});

export const MapsContextProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [care, setCare] = useState('');
  const [markers, setMarkers] = useState([]);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [list, setList] = useState([]);

  const saveCity = (title: string) => {
    setCity(title);
  };

  const saveCare = (title: string) => {
    setCare(title);
  };

  const savePlaces = (places: []) => {
    console.log(places);

    setMarkers(places)
    setPlaces(places);
  };

  return (
    <MapsContext.Provider
      value={{
        city,
        care,
        places,
        loading,
        isOpen,
        saveCity,
        saveCare,
        markers,
        setMarkers,
        savePlaces,
        setLoading,
        setIsOpen,
        list,
        setList
      }}
    >
      {children}
    </MapsContext.Provider>
  );
};

export const useMapsContext = () => useContext(MapsContext);
