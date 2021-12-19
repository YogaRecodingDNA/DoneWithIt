// Since FORMIK will maintain the form's state we won't use local state
// Instead we'll use formik context to get access to the state for this form field
// then pass it as a prop
import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

export default function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]); // THE SPREAD OPERATOR IS A COPY OF THE ORIGINAL AND/OR PREVIOUS VERSION
      };
      
      const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
      };

    return (
        <>
            <ImageInputList
                imageUris={imageUris} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage
                error={errors[name]}
                visible={touched[name]} 
            />
        </>
    )
}
