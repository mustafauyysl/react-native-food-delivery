import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image
} from 'react-native';
import Colors  from '../constants/colors';

const LoadingScreen = props => {
    return (
        <View style={styles.screen}>
            <Image style={styles.gif} source={require('../assets/gif.gif')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.primary
    },
    gif: {
        width: 200,
        height: 250
    }
});
export default LoadingScreen;