import React, { Component } from 'react';
import { StyleSheet,View, Image, Text,DrawerLayoutAndroid } from 'react-native';



export class DrawerComponent extends Component{

    render(){
        var navigation = (
            <View style={styles.drawercontainer}>
                <Text style={styles.drawer}>I'm drawer Component</Text>
            </View>
        );
        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=>navigation}
            >
                <View style={styles.container}>
                    <Text style={styles.mainFont}>Hello World</Text>
                    <Text style={styles.mainFont}>This is main </Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({

    drawercontainer:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },

    container:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    drawer:{
        fontSize:20,
        textAlign:'center'
    },

    mainFont:{
        margin:10,
        fontSize:15,
        textAlign:'center'
    }
})
