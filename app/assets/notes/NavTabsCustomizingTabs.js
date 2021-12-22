import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';

// const Link = () => {
//   const navigation = useNavigation();
  
//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate('TweetDetails')}
//      />
// );
// }

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

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);


const Tab = createBottomTabNavigator(); // <-- Returns object called Tab
const TabNavigator = () => (
  <Tab.Navigator
  screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
    }}
    >
    <Tab.Screen
    // Each Screen represents a Tab in the app
    name="Feed" // each Screen has a name
    component={Tweets} // each Screen renders a component
    options={{
      tabBarIcon: ({ size, color }) => ( // React Navigation sets its color prop to whatever you have it set to in screen options
        <MaterialCommunityIcons color={color} name="home" size={size} />
      )
    }}
     />
    <Tab.Screen
    name="Account"
    component={Account}
     />
  </Tab.Navigator>
)
/* TAB OBJECT HAS 2 PROPERTIES
(same as STACK NAV)
1. Tab.Navigator --> 
2. Tab.Screen -->  
*/



export default function App() {
  
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}