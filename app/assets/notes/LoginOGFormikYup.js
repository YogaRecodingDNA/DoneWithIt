import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

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
            <Formik initialValues={{ email: "", password: "" }}
            onSubmit={values => console.log(values)} // onSubmit takes an object as the argument
            // "onSubmit" --> Ultimately here you would call the server and submit the form's credentials to it
            validationSchema={validationSchema}
            >
                {/* FORMIK REQUIRES ALL COMPONENTS BE RENDERED WIHITN A FUNCTION
                    WHICH TAKES AN BUILT-IN OBJECT... HERE WE DESTRUCTURE THE PROPERTIES
                    OF THE METHODS WE WANT TO USE. */}
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => ( // JSX Expression in parenthesis
                    // Multiple component renders require the use of React Fragments
                    <> 
                        <AppTextInput
                            autoCapitalize="none" // so the 1st letter of the email address is not capitalized
                            autoCorrect={false} // to avoid iOS or Android correcting the spelling
                            icon="email"
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            // onChangeText={(text) => setEmail(text)}
                            placeholder="Email"
                            textContentType="emailAddress" // For autofilling user's address from their keychain (Only works on iOS)
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        {/* Another implementation of Rendering the Error Message only for the touched text field
                        {touched.email && <ErrorMessage error={errors.email} />} */}
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            // onChangeText={(text) => setPassword(text)}
                            placeholder="Password"
                            secureTextEntry // <-- shorthand for secureTextEntry={true}
                            textContentType="password" // For autofilling user's password from their keychain (Only works on iOS)
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                            // onPress={() => console.log(email, password)}
                        />
                    </>
                )}
            </Formik>
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