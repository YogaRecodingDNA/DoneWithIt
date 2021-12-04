import React from 'react';
import { View } from 'react-native';

/* **WITH THE TOP: BOTTOM: LEFT: RIGHT: PROPERTIES**
.. We can position a component relative to its current position
without affecting the layout around it.
*/

/* **IN REACT**
All components by default have their { position: ''} property set to 'relative'
{ position: 'relative'} <- the Element's position will be relative to its current position without changing the layout around them.
-- BY CONTRAST --
{ position: 'absolute'}
The child VIEWS who's position is set to absolute will now have their positioning be relative to the PARENT VIEW with the layout around it being affected
*/

export default function AbsoluteAndRelativePositioning() {

    return (
      <View // Parent VIEW acting as a container for its children
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // Horizontal Axis
        justifyContent: 'center', // Main Axis according to value of flexDirection
        alignItems: 'center', // Secondary Axis --- Determines the alignment of the items within each line (if you have multiple lines, this property works on aligning each line individually)
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
          top: 20, // Moves item in the direction AWAY from the top of the VIEW @ the given number of individual pixels... so, starting from the top and moving downward
          // TOP: Also takes a negative value to move the item in the opposing direction.. The same as setting a positive value to the BOTTOM property.
          // bottom: 20, // Moves item in the direction AWAY from the bottom of the VIEW @ the given number of individual pixels... so, starting from the bottom and moving upward
          // BOTTOM: Also takes a negative value to move the item in the opposing direction.. The same as setting a positive value to the TOP property.
          left: 20,
          // right: 20,
          position: 'absolute',
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
    
    
