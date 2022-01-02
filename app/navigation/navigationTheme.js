import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';
// DefaultTheme is just aregular JS object with a bunch of properties
// You want to copy all of these properties and overwrite one of them..
// How do you do this? By using the spread operator

export default { // New object
    ...DefaultTheme, // Copy all properties from DefaultTheme Component
    colors: { // Overwriting the "colors" property
        ...DefaultTheme.colors, // Copy all properties from the OG "colors" property in the DefaultTheme Component
        primary: colors.primary, // Overwriting the "primary" property in the "colors" property object
        background: colors.white, // Overwriting the "background" property in the "colors" property object
    }
};