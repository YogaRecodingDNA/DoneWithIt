import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
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

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You must enable permission to access your photo library.');
    // const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (!result.granted) alert('You must enable permission to access your photo library.');
  };
  // componentDidMount === useEffect()
  useEffect( () => {
    requestPermission();
    // return () => {
    // };
  }, []);
  

  return (
    // <Screen></Screen>
  )
}

