import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{ children }</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop: Constants.statusBarHeight, // same as above and cleans up the code since you don't need to import the Platform and StatusBar APIs
        backgroundColor: 'white',
        flex: 1,
    }
})