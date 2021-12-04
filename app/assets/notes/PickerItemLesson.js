import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue"  /> */}
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

// import AppText from './app/components/AppText';

// Testing For APP PICKER Only =============================================
const categories =[
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  }
];
// ==========================================================

export default function App() {
  // const [firstName, setFirstName] = useState('');
  // const [isNew, setIsNew] = useState(false);
  // const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
      selectedItem={category}// Works with "onSelectItem" ..like the TextInput and Switch Components
      onSelectItem={item => setCategory(item)}// References the value of "selectedItem" ..like the TextInput and Switch Components
      items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
    // <ListingsScreen />
    // <AccountScreen />
    // <Screen>
    //   <ListItem
    //   title="My title"
    //   // subTitle="My subtitle"
    //   ImageComponent={<Icon name='email' />}
    //   />
    // </Screen>
    // <MessagesScreen />
    // <ViewImageScreen />
  // <ListingDetailsScreen />
  // <WelcomeScreen></WelcomeScreen>
  )
}

