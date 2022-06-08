import React, { } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class TodoInput extends React.Component {
    state = {
        value: ''
    }
    inserisciTesto = (text) => {
        this.setState({ value: text })
    }
    //bind prende come primo argomento quello a cui si riferisce con il this, il secondo quello che viene pressato 
    //<View> = <div>
    render() {
        return (
            <View style={styles.container}>

                <TextInput 
                value={this.state.value}
                onChangeText={this.inserisciTesto}
                style={styles.Input}
                placeholder="inserire to do..." />
                <Button title="invia" onPress={this.props.aggiungi.bind(this,this.state.value)} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 50,
        //allineare gli elementi
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    Input: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingLeft: 3
    },
})

export default TodoInput;