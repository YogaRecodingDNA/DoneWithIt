import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button';

export default function WelcomeScreen() {
    return (
        <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell what you don't need!</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => console.log('tapped Login')} />
                <AppButton title="Register" color="secondary" onPress={() => console.log('tapped Register')} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // Sort alphabetically
    // flexDirection: default setting is COLUMN aka the Vertical Axis
    // justifyContent: aligns items along the Primary Axis
    // Primary Axis === Vertical Line | Secondary Axis === Horizontal Line
    background: { 
        flex: 1, // So the image background takes up the entire screen
        justifyContent: 'flex-end', // flex-start is the default value
        alignItems: 'center', // Aligns items along the secondary axis
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center', // Aligns items along the secondary axis
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
})
