import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './app/components/Screen';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import routes from './app/navigation/routes';

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate(routes.TWEET_DETAILS, { id: 1, name: "Chadd" })}
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
    name={routes.TWEETS}
    component={Tweets}
    options={{
      headerStyle: { backgroundColor: 'tomato'},
      headerTintColor: 'white',
    }}
    />
    <Stack.Screen
    name={routes.TWEET_DETAILS}
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


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={routes.FEED} component={StackNavigator} />
    <Tab.Screen name={routes.ACCOUNT} component={Account} />
  </Tab.Navigator>
)


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <NavigationContainer theme={navigationTheme}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
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