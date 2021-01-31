import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Colors from '../constants/colors';

const RadioContainer = props => {
    const [value, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <RadioForm
                    radio_props={props.list}
                    initial={0}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={Colors.primary}
                    selectedButtonColor={Colors.primary}
                    animation={true}
                    onPress={(value) => setValue(value) }
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold',
        color: Colors.primary
    }
})

export default RadioContainer;