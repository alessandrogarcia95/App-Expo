import React, {} from 'react';
import {Text, TextInput, View, Button, StyleSheet, TouchableOpacity} from 'react-native'

class TitleBar extends React.Component{


    render(){

        return(
            <View style={styles.Container}>
                <Text style={styles.Text}>Le mie note</Text>
            </View>
        )

    }


}

const styles = StyleSheet.create({
    Container: {
        padding: 20,
        paddingTop: 60,
        width:'100%',
        top: 0,
        //allineamento lementi
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height:130
      
    },

    Text: {
        fontSize:44,
        color: "#333",
        fontWeight: "normal"
    }

  
  
  });

  export default TitleBar;