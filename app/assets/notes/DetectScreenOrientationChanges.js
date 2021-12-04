import React from 'react';
import { 
  Dimensions,
  StyleSheet,
  SafeAreaView, // Not ideal for video players
  View,
  StatusBar,
  Platform
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// { useDimensions } is the preferred way to get the directions of the screen for DIFFERENT orientations (portrait and landscape mode)
// console.log(useDimensions()); // <-- To test, place into the function component
// { Dimensions } React-native's only supports "portrait" mode. Dimensions.get('screen' || 'window')
// console.log(Dimensions.get('screen')); // <-- To test, place into the function component
// { useDeviceOrientation } returns an object { portrait: "true/false", landscape: "true/false" }


export default function DetectScreenOrientationChanges() {
  
  // const orientation = useDeviceOrientation(); // Store the result of the function's return by declaring a variable or...
  
  const { landscape } = useDeviceOrientation(); // Using Object Destructuring to obtain the precise info we desire.

  return (
    <SafeAreaView style={[styles.container]}>
      <View
      style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? "100%" : "30%", // Dynamically setting the height according to the boolean return value of the "landscape" property in the useDeviceOrientation() API
      }}
      >
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});