import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ShoppingListItem from './ShoppingListItem';

const style = StyleSheet.create({

    mainView : {
        flex: 1,
        marginTop : 0,
        backgroundColor: 'black',
      },
  

  })

export default class ShoppingList extends Component{

    constructor(){
       
        super()
        this.state = {
            itemViews : []
        }

        
              

    }

    componentDidMount(){

        fetch('http://192.168.0.18:3000/compras')
        .then((response) => response.json())
        .then((items) => {

            let itemViews = []
            
            for(let item of items){

                itemViews.push(<ShoppingListItem key={item.id} itemName={item.valor} />)

                

            }
            this.setState({itemViews : itemViews})

            console.log(this.state.itemViews)

        })

    }

    action(){
        console.log('active');
        
    }



    render(){
        
        

        return(
            
            <ScrollView style={style.mainView}>
                {this.state.itemViews}
            </ScrollView>
            
        )

    }

}