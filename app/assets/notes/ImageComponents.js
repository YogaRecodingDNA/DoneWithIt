import React from "react";
import { Image, SafeAreaView } from "react-native";

export default PracticeImage = () => {
    
    return (
        <SafeAreaView>
            {/* In order to display the image when using a URI, we must manually input the sizing dimensions */}
            <Image source={{ uri: `https://some-website.online/${superhero}.png`, width: 100, height: 'auto' }} />
            
            {/* Images using the require() function will display without needing to manually input sizing dimensions because of the built-in meta data within the function */}
            <Image source={require('./assets/icon.png')} />
        </SafeAreaView>
    )
};
