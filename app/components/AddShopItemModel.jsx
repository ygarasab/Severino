import React, { Component } from 'react'
import {Text,Modal,View,StyleSheet, TextInput, Button} from 'react-native'


const style = StyleSheet.create({

    modalBox : {

        marginTop: 50,
        backgroundColor: 'white',
        height: 300,
        marginHorizontal: 30,
        borderRadius: 20

    },

    mainTitle : {

        padding:40,
        textAlign: 'center',
        fontSize: 25

    },

    textInput : {

        textAlign: "center",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        fontSize: 17,
        padding: 10

    },

    pseudoButtons : {

        color: 'white',
        borderRadius: 10,
        backgroundColor: 'black',
        width:130,
        textAlign:"center",
        padding: 15,
        fontSize: 15

    },

    confirmButton: {

        flex:1,


    },

    cancelButton : {

        flex:1

    }

})


export default class AddShopItemModel extends Component{

    constructor(props){

        super(props)
        this.parent = props.parent

        console.log(this.parent.state.modalVisible);

        this.input = ''
        

    }

    render(){

        return(
            <Modal
           
            animationType="slide"
            transparent={true}
            visible={this.parent.state.modalVisible}
            onRequestClose={() => 
                this.parent.setState({modalVisible: false})}>
            <View style={style.modalBox}>
                <View>
                <Text style={style.mainTitle}>Adicionar à lista</Text>

                <TextInput style={style.textInput} placeholder="O que deseja adicionar?" onChangeText={(text) => this.input = text}/>

                <View style={{flexDirection:'row-reverse',justifyContent: 'space-between', padding:25}} >
                    <Text style={style.pseudoButtons} onPress={()=>{this.parent.add(this.input); this.parent.setState({modalVisible: false})}}>Adicionar Item</Text>
                    <Text style={style.pseudoButtons} onPress={()=>this.parent.setState({modalVisible: false})}>Cancelar</Text>
                </View>
                
              
                </View>
            </View>
            </Modal>
        )

    }

}