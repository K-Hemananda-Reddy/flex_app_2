import React from "react";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

// Function to generate random latitude and longitude within a specified range
const generateRandomPoint = () => {
  const latitude = 50 + Math.random() * 5; // Adjust latitude range as needed
  const longitude = 18 + Math.random() * 5; // Adjust longitude range as needed
  return { latitude, longitude };
};

const App = () => {
  // Generate 100 random points
  const points = Array.from({ length: 100 }, () => generateRandomPoint());

  return (
    <MapView initialRegion={INITIAL_REGION}  preserveClusterPressBehavior={true}  style={{ flex: 1 }}>
      {points.map((point, index) => (
        <Marker image={require('../assets/dot3.png')} key={index} coordinate={point} />
      ))}
    </MapView>
  );
};

export default App;
