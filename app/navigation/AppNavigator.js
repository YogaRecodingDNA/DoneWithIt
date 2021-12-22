import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountNavigator from './AccountNavigator';
// import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
// import ListingsScreen from '../screens/ListingsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)
};

export default AppNavigator;