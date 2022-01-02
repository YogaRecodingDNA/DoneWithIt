import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from '../navigation/routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen
            name={routes.FEED}
            component={FeedNavigator}
            options={{ tabBarIcon: ({ color, size }) => // React-Native gives built-in props with recommended default values
                <MaterialCommunityIcons 
                    name="home"
                    color={color} // RN default is "primary" but we modified it to match our primary color
                    size={size} // RN default is decent
                />
            }}
        />
        <Tab.Screen
            name={routes.LISTING_EDIT}
            component={ListingEditScreen}
            options={ ({ navigation, route }) => ({ // Can set options to a function that returns an object to access the ({navigation and route}) props
                tabBarButton: () => 
                    <NewListingButton
                        onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                    />,
                tabBarIcon: ({ color, size }) => // React-Native gives built-in props with recommended default values
                    <MaterialCommunityIcons 
                        name="plus-circle"
                        color={color} // RN default is "primary" but we modified it to match our primary color
                        size={size} // RN default is decent
                    />
            })}
        />
        <Tab.Screen
            name={routes.ACCOUNT}
            component={AccountNavigator}
            options={{ tabBarIcon: ({ color, size }) => // React-Native gives built-in props with recommended default values
                <MaterialCommunityIcons 
                    name="account"
                    color={color} // RN default is "primary" but we modified it to match our primary color
                    size={size} // RN default is decent
                />
            }}
        />
    </Tab.Navigator>
)
};

export default AppNavigator;