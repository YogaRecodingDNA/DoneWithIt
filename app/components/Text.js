import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>
            {children}
        </Text>
        )
}








/* 
THIS SAME TECHNIQUE OF ENCAPSULATING STYLES COULD
BE USED FOR OTHER, APP WIDE TEXT THEMES SUCH AS HEADINGS FOR EXAMPLE

function App() {
    return (
        <Heading>My Heading</Heading>
        <AppText>My Text</AppText>
    )
}
*/


// <<< 1 >>>  ===============================================================================
/* **THE CONCEPT BELOW HAS MULTIPLE IMPLEMENTATIONS**

        Using React Native to auto-detect the current platform being used and 
        dynamically implement a set of desired style properties according to
        the platform specifications.

(1.)  Use the spread operator on the Platform.select() method's {object}, directly into the styles "text" {object} 
            to utilize the properties within it.
    text: {
        color: 'tomato',
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto',
            },
        }),
    }        

(2.)  DUPLICATE THE CODE AND CREATE SEPARATE FILES FOR EACH PLATFORM

        Within each file, simply place the desired properties directly into the StyleSheet (no methods or libraries)

FILE - ( AppText.ios. js ) -------------------------------------------------------

import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
        )
    }
    
    const styles = StyleSheet.create({
        text: {
            color: 'tomato',
            fontSize: 20,
            fontFamily: 'Avenir',
        }
    })



FILE - ( AppText.android.js ) -----------------------------------------------------------

import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
        )
    }
    
    const styles = StyleSheet.create({
        text: {
            color: 'tomato',
            fontSize: 18,
            fontFamily: 'Roboto',
        }
    })



(3.) CALL AND USE THE {PLATFORM} API IN THE STYLESHEET

        Platform.OS --> Operating System

    text: {
        color: 'tomato',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
=====================================================================================*/ 