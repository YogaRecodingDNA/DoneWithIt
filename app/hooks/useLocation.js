import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
// CUSTOM HOOKS ENCAPSULATE SOME STATE AND SOME LOGIC AROUND THAT STATE IN A SINGLE PLACE
export default useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync(); // Method returns object "result: { granted: boolean}"
            if(!granted) return; // So the promise isn't waiting endlessly
            const { coords: {latitude, longitude} } = await Location.getLastKnownPositionAsync(); // getLastKnownPosition() not as accurate as getCurrentPosition() but performs faster
            // Method returns object "result: { coords: coordinates: { accuracy, altitude, heading, latitude, longitude }}"
            setLocation({ latitude, longitude });
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        // const result = await Location.requestForegroundPermissionsAsync();
        /* Cannot have async functions inside useEffect so created the function outside and called inside  */
        getLocation();
    }, []);

    return location;
};


