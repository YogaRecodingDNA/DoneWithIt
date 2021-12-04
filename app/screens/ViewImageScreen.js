import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';// Keep a space between config directories and 3rd Party Library imports for cleaner code

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} >
                <MaterialCommunityIcons name="close" color="white" size={30}></MaterialCommunityIcons>
            </View>
            <View style={styles.deleteIcon} >
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/chair.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute', // For positioning the component relative to its PARENT <-- In this case (container)
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute', // For positioning the component relative to its PARENT <-- In this case (container)
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        // resizeMode: 'contain',
    }
});
