import { useState } from "react";
import { LocationContext } from "../context";
import { getLocationByName } from "../data/location-data";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(getLocationByName(""));
  return <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>{children}</LocationContext.Provider>;
};

export default LocationProvider;
