import React, { useState } from 'react';
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

// import AppText from './app/components/AppText';


export default function App() {
  // const [firstName, setFirstName] = useState('');
  // const [isNew, setIsNew] = useState(false);

  return (
    <ListingEditScreen />
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

