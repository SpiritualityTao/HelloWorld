import React, {Component} from 'react';
import { StyleSheet, TextInput,View,Text} from 'react-native';

export class SearchComponent extends Component{

    render(){

        return(
            <View style={[styles.flex,styles.flexDirection]}>
                <View style={styles.flex}>
                    <TextInput style={[styles.input]} returnKeyType="search"/>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.search}>搜索</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    flex:{
        flex: 1
    },

    flexDirection:{
        flexDirection: 'row'
    },

    topStatus:{
        marginTop: 25
    },

    input:{
        marginLeft: 5,
        paddingLeft: 5,
        height:45,
        borderRadius:4,
        borderColor: '#ccc',
        borderWidth: 1
    },

    btn:{
        width:55,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent: 'center',
        alignItems: 'center'
    },

    search:{
      fontSize:15,
      color:'#fff',
      fontWeight: 'bold'
    }

});