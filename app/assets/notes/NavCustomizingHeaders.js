import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen from './app/components/Screen';

const Tweets = ({ navigation }) => (// navigation prop only available to the Stack.Screens (those who are using the Screen method)
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1, name: "Chadd" })}
                  // navigation.navigate("TARGETED SCREEN", {object of custom properties} <-- accessed within the target screen using the "route" prop and syntax {route.params})
    />
  </Screen>
);

const TweetDetails = ({ route }) => ( // route prop only available to parent --> Children use HOOK useRoute() which returns the same route object
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
      // headerShown: false,
    }}
    />
    <Stack.Screen
    name="TweetDetails"
    component={TweetDetails}
    options={({ route }) => ({title: route.params.name })} // Able to set options prop to an OBJECT or a FUNCTION THAT RETURNS AN OBJECT
    />
  </Stack.Navigator>
);

export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}