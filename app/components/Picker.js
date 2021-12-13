import React, { useState } from 'react';
import { Button, View, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './Text';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

export default function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            {/* The onPress prop in the TWF component below will reveal a Modal */}
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} 
                    />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    {/* <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText> */}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            {/* // Setting Modal's visible prop to TRUE makes it visible, FALSE makes it hidden */}
            <Modal visible={modalVisible} animationType="slide"> 
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => 
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        margin: 10,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    }
})