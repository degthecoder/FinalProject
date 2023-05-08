const url = "http://192.168.1.4:8000";
import axios from "axios";
import * as Location from "expo-location";

export const fetchLocation = async () => {
  const position = await new Promise(async (resolve, reject) => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        reject("Location permission not granted");
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync();
      // resolve(coords);
      resolve(coords);
      // console.log(coords);
    } catch (error) {
      reject(error);
    }
  });

  const geoApiUrl = `https://geocode.maps.co/reverse?lat=${position.latitude}&lon=${position.longitude}&format=json`;
  const response = await fetch(geoApiUrl);
  const data = await response.json();
  // console.log(data);
  const d_name = data.display_name;
  const town_name = data.address["town"];
  const location = {
    town: town_name,
    disp_name: d_name,
    latitude: position.latitude,
    longitude: position.longitude,
    accuracy: position.accuracy,
  };
  const locationString = location.disp_name.split(",").slice(1, 3).join(",");
  axios.post(`${url}/home/`,location);
  console.log(locationString);
  return locationString;
};
