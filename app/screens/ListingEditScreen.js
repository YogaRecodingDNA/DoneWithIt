import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    Form,
    FormField,
    FormPicker as Picker,
    SubmitButton,
} from '../components/forms';

import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."), // "min" 2nd argument is the Error msg to be displayed if the rule is violated.
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'tomato', icon: 'floor-lamp' },
    { label: "Cars", value: 2, backgroundColor: 'orange', icon: 'car' },
    { label: "Camera", value: 3, backgroundColor: 'gold', icon: 'camera' },
    { label: "Games", value: 4, backgroundColor: 'turquoise', icon: 'cards' },
    { label: "Clothing", value: 5, backgroundColor: 'lightseagreen', icon: 'shoe-heel' },
    { label: "Sports", value: 6, backgroundColor: 'lightblue', icon: 'football' },
    { label: "Movies & Music", value: 7, backgroundColor: 'cornflowerblue', icon: 'headphones' },
    { label: "Books", value: 8, backgroundColor: 'mediumpurple', icon: 'email' },
    { label: "Other", value: 9, backgroundColor: 'lightsteelblue', icon: 'plus-thick' },
];


export default function ListingEditScreen() {
    const location = useLocation();

    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(false);

    const handleSubmit = async (listing) => {
        setUploadVisible(true);
        // listing.location = location; // This approach touches the object that formik gives us
        const result = await listingsApi.addListing(
            { ...listing, location}, // This approach spreads the existing properties of the listings object and adds the location to the request as opposed to the above approach which manipulates the formik object.
            progress => setProgress(progress)  // 2nd arg we're passing a function to the child
        );
        
        setUploadVisible(false);

        if (!result.ok) return alert('Could not save the listing.');

        alert('Success');
        
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} />
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [], // Yup validation schema above doesn't need the "required()" method since we initiate an empty array (will never be null)
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <Picker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})