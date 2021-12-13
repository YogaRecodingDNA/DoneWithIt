import React from 'react';
import {  } from 'react-native';
import { useFormikContext } from 'formik'; // To use the formik objects

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...otherProps }) {
    const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

    return (
        <>
            <TextInput
                // autoCapitalize="none" // so the 1st letter of the email address is not capitalized
                // autoCorrect={false} // to avoid iOS or Android correcting the spelling
                // icon="email"
                // keyboardType="email-address"
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
                // onChangeText={(text) => setEmail(text)}
                // placeholder="Email"
                // textContentType="emailAddress" // For autofilling user's address from their keychain (Only works on iOS)
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} /> 
        </>
    )
}
