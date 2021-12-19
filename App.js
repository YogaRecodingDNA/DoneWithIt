import React, { useEffect, useState } from 'react';
import { Button, Image, Switch, Text, View } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue"  /> */}
import AccountScreen from './app/screens/AccountScreen';
import AppButton from './app/components/Button';
import AppPicker from './app/components/Picker';
import AppTextInput from './app/components/TextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListItem from './app/components/lists/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function App() {
  
  return (
  <ListingEditScreen />
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

// {/* <Screen>
//       {/* <Button title="Select Image" onPress={selectImage} />
//       <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
//       <ImageInputList
//         imageUris={imageUris}
//         // FROM: onChangeImage={uri => setImageUri(uri)}
//         // TO: onAddImage={uri => handleAdd(uri)} <-- Simplify by only calling the funciton name whenever you see an inline function where the parameter is being passed in the function call argument
//         onAddImage={handleAdd}
//         onRemoveImage={handleRemove}
//       />
//     </Screen> */}