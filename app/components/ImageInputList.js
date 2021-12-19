import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef(); // Returns a general purpose reference object...
    /* useRef() doesn't know we're talking to a <ScrollView> component, but when called
    within the "ref" prop in the component, we can access/reference that component's props */
    // scrollView.current.scrollToEnd(); // Where is the correct place to call these reference methods???

    return (
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            > 
                <View style={styles.container}>
                    {imageUris.map(uri => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri} 
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} /> 
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    }
});