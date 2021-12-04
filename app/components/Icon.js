import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icon({
    name,
    size = 40, // set default val to 40
    backgroundColor = '#000', // set default val to #000
    iconColor ='#fff' // set default val to #fff
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <MaterialCommunityIcons 
            name={name}
            color={iconColor}
            size={size * 0.5} // To make the icon size equal half the size of the container
            />
        </View>
    )
}
