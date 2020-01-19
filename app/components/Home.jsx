import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import MainOption from './MainOption'

const style = StyleSheet.create({

    mainView : {
      flex: 1,
      marginTop : 0,
      backgroundColor: 'black'
    },
  
    rightButton : {
      color:'black'
      
  }
  
  
  })

export default class Home extends Component{


    render(){
  
      return(
  
        <View style={style.mainView}>
  
  
          <MainOption title='Lista de Compras' action={() => this.props.navigation.navigate('Compras')} />
  
        </View>
  
  
      );
  
    }
  
  }