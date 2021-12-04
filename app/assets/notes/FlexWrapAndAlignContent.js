import React from 'react';
import { View } from 'react-native';

export default function FlexWrapAndAlignContent() {
  return (
    /* **NOTICE THE AMOUNT OF CHILDREN VIEWS**
    If our items overflow across the main axis,
    one or more of the item get shrunk down so others
    can fit on the screen. 
    You can change this behavior by enabling WRAPPING
    */
    <View // Parent VIEW acting as a container for its children
    style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row', // Horizontal Axis
      justifyContent: 'center', // Main Axis according to value of flexDirection
      alignItems: 'center', // Secondary Axis --- Determines the alignment of the items within each line (if you have multiple lines, this property works on aligning each line individually)
      alignContent: 'center', // ONLY WORKS WITH WRAPPING ENABLED (see below) --> ALIGN CONTENT Determines the alignment of the entire content
      flexWrap: 'wrap', // The ALIGN-ITEMS property behaves differently when we enable WRAPPING
    }}>
      <View // Child VIEW who's sizing limitations are set by the parent VIEW
      style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 300,
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
      <View // Child VIEW who's sizing limitations are set by the parent VIEW
      style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
      }}/>
      <View // Child VIEW who's sizing limitations are set by the parent VIEW
      style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
      }}/>
    </View>
  )
}
