import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: routes.MY_LISTINGS,
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES,
    },
];

export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
               <FlatList 
               data={menuItems}
               keyExtractor={menuItem => menuItem.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    IconComponent={
                        <Icon
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                        />
                    }
                    onPress={() => navigation.navigate(item.targetScreen)}
                />
                }
               />
            </View>
            <ListItem 
            title="logout"
            IconComponent={<Icon name="logout" backgroundColor='#ffe66d' />} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})