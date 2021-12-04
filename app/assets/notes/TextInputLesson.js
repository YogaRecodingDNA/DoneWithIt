import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
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

// import AppText from './app/components/AppText';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <TextInput
        maxLength={11}
        // keyboardType='email-address' // or numeric, etc.
        clearButtonMode='always'
        secureTextEntry // === secureTextEntry={true}  <-- if prop is Boolean and set to true, only the prop name is needed if you prefer a shorthand version
        onChangeText={text => setFirstName(text)}
        placeholder="First Name" 
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      />
      <Text>{firstName}</Text>
    </Screen>
  )
}

