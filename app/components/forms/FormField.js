import React from 'react';
import { useFormikContext } from 'formik'; // To use the formik objects

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...otherProps }) {
    const { errors, setFieldTouched, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} /> 
        </>
    );
}
