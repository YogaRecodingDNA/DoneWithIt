import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';


export default function App() {
  const [imageUri, setImageUri] = useState();

  
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You must enable permission to access your photo library.');
    // SAME AS //
    // const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (!result.granted) alert('You must enable permission to access your photo library.');
    // SAME AS //
    // const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_FOREGROUND);
    // console.log(result.granted); // <-- Notice here we have access to the same object as the above code
  };
  
  useEffect( () => { // componentDidMount === useEffect()
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) {setImageUri(result.uri)};
      // It's possible something goes wrong when attempting to retrieve the image though
      // highly unlikely. To be on the safe side WRAP it in a TRY - CATCH
    } catch (error) {
      console.log("Error reading an image!");
    }
  };
  

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  )
}

