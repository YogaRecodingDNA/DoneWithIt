import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/Button';
import AppText from '../components/Text';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';


export default function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // listingsApi.getListings(); // Cannot create async/promise function inside useEffect hook
        loadListings();
        console.log("useEffect Fired off ", loadListings());
    }, []);
    
    const loadListings = async () => { // API SAUCE always resolves a promise even if null
        // (no space) connecting the following 3 statements as 1 Story ========================================
        setLoading(true);
        const response = await listingsApi.getListings(); // The object returned from this method contains a "data" property which contains the data we get from the server.
        setLoading(false);
        // ===============================================================================
        // ALWAYS WRITE ERROR HANDLING CODE FIRST (BEST PRACTICE)
        if (!response.ok) return setError(true); // response.problem gives type of error
        
        setError(false); 
        setListings(response.data);
        // console.log("response.data === ", response.data );
    };

    console.log("listings === ", listings);

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retrieve the listings from the server.</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>
            }
            <ActivityIndicator visible={loading} />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()} // .toString() --> FLATLIST EXPECTS A STRING AS A UNIQUE IDENTIFIER 
                renderItem={({item}) => // ALWAYS DESTRUCTURE THIS FUNCTION PARAM
                <Card 
                    title={item.title}
                    subTitle={"$" + item.price}
                    imageUrl={item.images[0].url}
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
                />
            }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})



// HARDCODED LISTINGS
/* const listings =[
    {
        id: 1,
        title: 'Red jacket for sale.',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg'),
    },
]; */