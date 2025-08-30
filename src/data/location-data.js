const data = [
  { location: "London", latitude: 51.5074, longitude: -0.1278 },
  { location: "New York", latitude: 40.7128, longitude: -74.006 },
  { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
  { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { location: "Toronto", latitude: 43.65107, longitude: -79.347015 },
  { location: "Dubai", latitude: 25.2048, longitude: 55.2708 },
  { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
  { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  { location: "Lagos", latitude: 6.5244, longitude: 3.3792 },
  { location: "Nairobi", latitude: -1.2921, longitude: 36.8219 },
  { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { location: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { location: "Lima", latitude: -12.0464, longitude: -77.0428 },
  { location: "Bogotá", latitude: 4.711, longitude: -74.0721 },
  { location: "Santiago", latitude: -33.4489, longitude: -70.6693 },
  { location: "Manila", latitude: 14.5995, longitude: 120.9842 },
  { location: "Hanoi", latitude: 21.0278, longitude: 105.8342 },
  { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
  { location: "Lisbon", latitude: 38.7223, longitude: -9.1393 },
  { location: "Kuala Lumpur", latitude: 3.139, longitude: 101.6869 },
  { location: "Tehran", latitude: 35.6892, longitude: 51.389 },
  { location: "Baghdad", latitude: 33.3152, longitude: 44.3661 },
  { location: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
  { location: "Vienna", latitude: 48.2082, longitude: 16.3738 },
  { location: "Budapest", latitude: 47.4979, longitude: 19.0402 },
  { location: "Prague", latitude: 50.0755, longitude: 14.4378 },
  { location: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
  { location: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  { location: "Stockholm", latitude: 59.3293, longitude: 18.0686 },
  { location: "Helsinki", latitude: 60.1695, longitude: 24.9354 },
  { location: "Oslo", latitude: 59.9139, longitude: 10.7522 },
  { location: "Dublin", latitude: 53.3498, longitude: -6.2603 },
  { location: "Edinburgh", latitude: 55.9533, longitude: -3.1883 },
  { location: "Glasgow", latitude: 55.8642, longitude: -4.2518 },
  { location: "Cardiff", latitude: 51.4816, longitude: -3.1791 },
  { location: "Belfast", latitude: 54.5973, longitude: -5.9301 },
  { location: "Brussels", latitude: 50.8503, longitude: 4.3517 },
  { location: "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
  { location: "Zurich", latitude: 47.3769, longitude: 8.5417 },
  { location: "Geneva", latitude: 46.2044, longitude: 6.1432 },
  { location: "Milan", latitude: 45.4642, longitude: 9.19 },
  { location: "Rome", latitude: 41.9028, longitude: 12.4964 },
  { location: "Barcelona", latitude: 41.3851, longitude: 2.1734 },
  { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
  { location: "Valencia", latitude: 39.4699, longitude: -0.3763 },
  { location: "Seville", latitude: 37.3891, longitude: -5.9845 },
  { location: "Florence", latitude: 43.7696, longitude: 11.2558 },
  { location: "Venice", latitude: 45.4408, longitude: 12.3155 },
  { location: "Naples", latitude: 40.8518, longitude: 14.2681 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 }, // Dhaka Division
  { location: "Chattogram", latitude: 22.3569, longitude: 91.7832 }, // Chattogram Division
  { location: "Rajshahi", latitude: 24.3745, longitude: 88.6042 }, // Rajshahi Division
  { location: "Khulna", latitude: 22.8456, longitude: 89.5403 }, // Khulna Division
  { location: "Barisal", latitude: 22.701, longitude: 90.3535 }, // Barishal Division
  { location: "Sylhet", latitude: 24.8949, longitude: 91.8687 }, // Sylhet Division
  { location: "Rangpur", latitude: 25.7439, longitude: 89.2752 }, // Rangpur Division
  { location: "Mymensingh", latitude: 24.7471, longitude: 90.4203 }, // Mymensingh Division
];

const getLocations = () => {
  return data;
};

const getLocationByName = (location) => {
  const found = data.find((item) => item.location.toLowerCase() === location.toLowerCase());

  if (found) {
    return found;
  } else {
    const defaultLocation = { location: "", latitude: 0, longitude: 0 };
    return defaultLocation;
  }
};

export { getLocationByName, getLocations };
