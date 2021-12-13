import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password")
});


export default function RegisterScreen() {

    return (
        <Screen style={styles.container}>
            <AppForm initialValues={{ email: "", name: "", password: "" }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="words"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})