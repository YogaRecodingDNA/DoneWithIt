// With FLEX we can easily build complex layouts that 
// work consistently across different screen sizes.
// REACT-NATIVE's FLEXBOX IS DIFFERENT THAN CSS BUT SAME CONCEPT
import React from 'react';

// When using FLEX, you typically setup your VIEW as a container then
// align children inside that container... other VIEWS

export default function FlexBox() {
    return (
      <View // Parent VIEW acting as a container for its children
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // Horizontal axis is the main
      }}>
        <View // Child VIEW who's sizing limitations are set by the parent VIEW
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}/>
        <View // Child VIEW who's sizing limitations are set by the parent VIEW
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
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

