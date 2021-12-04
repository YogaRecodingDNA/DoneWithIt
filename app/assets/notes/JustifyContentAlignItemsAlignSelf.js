import React from 'react';
import { View } from 'react-native';

export default function JustifyContentAlignItemsAlignSelf() {
    return (
        <View // Parent VIEW acting as a container for its children
        style={{
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row', // Horizontal Axis
          justifyContent: 'center', // Main Axis according to value of flexDirection
          alignItems: 'center', // Secondary Axis
        }}>
          <View // Child VIEW who's sizing limitations are set by the parent VIEW
          style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 300,
            alignSelf: 'flex-start',
          }}/>
          <View // Child VIEW who's sizing limitations are set by the parent VIEW
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 200,
          }}/>
          <View // Child VIEW who's sizing limitations are set by the parent VIEW
          style={{
            backgroundColor: 'tomato',
            width: 100,
            height: 100,
          }}/>
        </View>
      )
}
