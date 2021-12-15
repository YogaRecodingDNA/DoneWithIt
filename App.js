import React, { useEffect, useState } from 'react';
import { Button, Image, Switch, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue"  /> */}
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/TextInput';
import AppPicker from './app/components/Picker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


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
    // <ListingEditScreen />
    // <RegisterScreen />
    // <LoginScreen />
    // <ListingsScreen />
    // <AccountScreen />
    // <Screen>
    //   <ListItem
    //   title="My title"
    //   subTitle="My subtitle"
    //   ImageComponent={<Icon name='email' />}
    //   />
    // </Screen>
    // <MessagesScreen />
    // <ViewImageScreen />
  // <ListingDetailsScreen />
  // <WelcomeScreen></WelcomeScreen>
  )
}

