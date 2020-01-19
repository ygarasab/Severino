import React, { Component } from 'react';
import {Modal, TouchableHighlight, View,ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import ShoppingListItem from './components/ShoppingListItem';
import AddShopItemModel from './components/AddShopItemModel'

const url = "https://severinoserver.herokuapp.com/"


const style = StyleSheet.create({

  rightButton : {
    color: 'white',
    fontSize: 40,
    marginRight: 20
},

mainView : {
  flex: 1,
  marginTop : 0,
  backgroundColor: 'black',
},


})

var shoping = ''


class ShoppingListScreen extends Component{

  
  constructor(){

    super()
    this.state = {
      modalVisible: false,
      itemViews : []
  }
    shoping = this

  }
  

  static navigationOptions = {
  
      headerRight: () => (
        <Text style={style.rightButton} onPress={() => shoping.action()}>
          +
        </Text>
      ),
    };
      

  componentDidMount(){

      this.load()

  }

  delete(itemName){

    console.log("deleteing "+itemName);
    

    fetch(url+'compras', {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        valor: itemName
      })
    })

    .then(response => {
      this.load()
    })


  }

  add(text){
    fetch(url+'compras', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        valor: text
      })
    })

    .then(response => {
      this.load()
    })

    

  }

  load(){

    fetch(url+'compras')
      .then((response) => response.json())
      .then((items) => {

          let itemViews = []
          
          for(let item of items){

              itemViews.push(<ShoppingListItem key={item.id} parent={this} itemName={item.valor} />)

              

          }
          this.setState({itemViews : itemViews})

      })

  }

  action(){
    this.setState({modalVisible: true});
  }


  render(){
      
      

      return(
        <View style={{flex:1}}>
        
          <AddShopItemModel parent={this} />
          <ScrollView style={style.mainView}>
              {this.state.itemViews}
          </ScrollView>
          </View>
          
      )

  }

}


class HomeScreen extends Component{



  render(){

    return(

      <Home navigation={this.props.navigation} />


    );

  }

}

const AppNavigator = createStackNavigator(
  {
    Severino: {
      screen: HomeScreen,
    },
    Compras : {
      screen: ShoppingListScreen
    }
  },
  {
    initialRouteName: 'Severino',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
        height: 140,
        
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
        paddingHorizontal: 10,
        fontSize: 30,
        textAlign: 'center'
      },
    },
  }
);

export default createAppContainer(AppNavigator);
