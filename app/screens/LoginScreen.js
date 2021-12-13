import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';

// CREATE YOUR VALIDATION SCHEMA OUTSIDE OF THE FUNCTION COMPONENT SO
// THAT ITS NOT REDEFINED EVERY TIME THE FUNCTION GETS RERENDERED
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")//.matches(RegEx) <-- Read docs Valuable
});


export default function LoginScreen() {
    // FORMIK TRACKS FORM STATE SO WE DON'T NEED THE EMAIL AND PW STATE HANDLERS
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm initialValues={{ email: "", password: "" }}
            onSubmit={values => console.log(values)} // onSubmit takes an object as the argument
            // "onSubmit" --> Ultimately here you would call the server and submit the form's credentials to it
            validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none" // so the 1st letter of the email address is not capitalized
                    autoCorrect={false} // to avoid iOS or Android correcting the spelling
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" // For autofilling user's address from their keychain (Only works on iOS)
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry // <-- shorthand for secureTextEntry={true}
                    textContentType="password" // For autofilling user's password from their keychain (Only works on iOS)
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center', // Overrides the alignment settings of the parent component
        marginTop: 50,
        marginBottom: 20,
    }
})