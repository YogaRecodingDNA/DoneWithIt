import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from '../navigation/routes';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            presentation: 'modal'
        }}
    >
        <Stack.Screen
            name={routes.LISTINGS}
            component={ListingsScreen}
        />
        <Stack.Screen
            name={routes.LISTING_DETAILS}
            component={ListingDetailsScreen}
        />
    </Stack.Navigator>
)

export default FeedNavigator;