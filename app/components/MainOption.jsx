import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({

    mainOption : {

        backgroundColor : 'black',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 20,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2

    },

    mainOptionText : {

        color : 'white',
        fontSize: 20

    }

})


export default class MainOption extends Component{

    render(){

        return(

            <View style={style.mainOption} >
                <Text style={style.mainOptionText} onPress={this.props.action}>
                    {this.props.title}
                </Text>
            </View>

        )
        
    }

}