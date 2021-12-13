import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
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
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})