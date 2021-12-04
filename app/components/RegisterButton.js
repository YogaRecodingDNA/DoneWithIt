import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function RegisterButton() {
    return (
        <View style={styles.container}>
            <Button
            color={colors.white}
            title="REGISTER"
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        margin: 10,
        width: 380,
        height: 50,
        borderRadius: 25, 
        // position: 'absolute',
    },
})