import React from 'react';
import { 
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform } from 'react-native';

export default function PlatformAndStatusBar() {

  return (
    <SafeAreaView style={[styles.container]}>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // If the current Platform/Device Operating System is an android, then
    // set its paddingTop to the current height of the status bar : (if not) then set to zero.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
