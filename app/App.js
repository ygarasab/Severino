import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({

  mainView : {
    marginTop : 30
  },

  viewTitle : {

    padding : 20,
    fontSize : 45,
    color : 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 30

  }

})


export default class AppView extends Component{


  render(){

    return(

      <View style={styles.mainView}>

        <Text style={styles.viewTitle}>

          Severino

        </Text>

      </View>


    );

  }


}
