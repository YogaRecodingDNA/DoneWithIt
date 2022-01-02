import React from 'react';
import { Button,Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetDetails')}
     />
);
}

const Tweets = ({ navigation }) => (// navigation prop only available to the Stack.Screens (those who are using the Screen method)
  <Screen>
    <Text>Tweets</Text>
    <Link />
    {/*** REPLACED BY <LINK/> ***
    <Button
      title="View Tweet"
      onPress={() => navigation.push("Tweets")}
    /> */}
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
