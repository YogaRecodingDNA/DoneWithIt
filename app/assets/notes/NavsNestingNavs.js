import React, { useEffect, useState } from 'react';
import { Button, Image, Switch, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1, name: "Chadd" })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
    <Text>I am {route.params.name}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: 'dodgerblue'},
    headerTintColor: 'white',
  }}
  >
    <Stack.Screen
    name="Tweets"
    component={Tweets}
    options={{
      headerStyle: { backgroundColor: 'tomato'},
      headerTintColor: 'white',
    }}
    />
    <Stack.Screen
    name="TweetDetails"
    component={TweetDetails}
    options={({ route }) => ({title: route.params.name })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

// NESTING StackNavigator into Tab.Navigator =======================================
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)
// =================================================================================

export default function App() {
  
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
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