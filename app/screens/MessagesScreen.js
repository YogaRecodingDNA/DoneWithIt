import React, { useState } from 'react';
import { FlatList } from 'react-native';
/*  Read about { SectionList } as a more advanced alternative to { FlatList } */
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages =[
    {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
    },
{   
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
}
];


export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    
    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
        /* **setMessages(messages.filter(m => m.id !== message.id)**
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
        */

        // Call the server to delete from backend 
    };
   
    return (
        <Screen>
            <FlatList
            data={messages} // Built-in prop for FlatList -> An array ->  of messages (dummy data that represents database extraction)
            keyExtractor={message => message.id.toString()} // Create a function to extract a unique key from the MESSAGES array
            renderItem={ ({ item }) => // Iterates through built-in prop --> "data=" 
                <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log("Message Selected", item)}
                renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                }
                />
            }
            ItemSeparatorComponent={ListItemSeparator} // Built-in FlatList prop - ADDS SEPARATOR in a list (TAKES FUNCTION COMPONENT)
            refreshing={refreshing} // Built-in FlatList prop 
            onRefresh={() => {
                setMessages([
                    {   
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg'),
                    }
                ])
            }} // Create a function to update your screen according to your intention for refresh
            />
        </Screen>
    )
}
