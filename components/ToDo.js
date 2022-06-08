import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';

const Todo = (props) => {
    return (

        <View style={styles.boxlista}>
            <TouchableOpacity>
                <Text>X</Text>
            </TouchableOpacity>
            <Text>{props.title}</Text></View>

    )
}
const styles = StyleSheet.create({
    boxlista: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 5
    }
})

export default Todo;