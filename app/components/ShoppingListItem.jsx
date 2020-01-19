import React, { Component, useState, useEffect  } from 'react';
import { Animated, Easing, Text, View, StyleSheet } from 'react-native';

var style = StyleSheet.create({

    item : {

        backgroundColor : 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        borderRadius: 15,
        borderColor: 'white',
        color:'white',
        borderBottomWidth: 2

    },

    itemText : {

        fontSize: 20,
        color: 'white'

    }


})

export default class ShoppingListItem extends Component{

    constructor(props){

        super(props)

        this.state = {
            marginLeft : 0,
            display: 'flex'
        }

        this.parent = props.parent
        this.itemName = props.itemName

        this.touchStart = 0
        this.touchEnd = 0

    }

    /**
     * 
     * @param {GestureResponderEvent} event 
     */

    startTouch(event){

        this.touchStart = event.nativeEvent.locationX

    }

    move(event){

        let newMargin = this.touchStart - event.nativeEvent.locationX

        this.setState({marginLeft : -newMargin})


    }

    endTouch(event){



        if (this.state.marginLeft < -20){

            this.setState({display:'none'})
            this.parent.delete(this.itemName)

        }

        else this.setState({marginLeft :0})
        

    }

    render(){

        return(
            <View style={style.item} onTouchStart={(event) => this.startTouch(event) } onTouchMove={(e) => this.move(e)} onTouchEnd={(event)=>this.endTouch(event)}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    marginLeft: this.state.marginLeft,
                    display : this.state.display
                }}>
                    {this.itemName}
                </Text>
            </View>
        )

    }

}