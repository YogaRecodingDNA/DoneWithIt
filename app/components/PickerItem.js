import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

export default function PickerItem({ label, onPress }) {
    // onPress as a { prop } here, to carry a function over from another component
    // to be used in an event-prop within this component.
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,

    }
})