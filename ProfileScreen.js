import React, { Component } from "react";
import {Text} from 'react-native';
import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "./NavigatorTest4";




export class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(

    {
        Home:HomeScreen,
        Profile: ProfileScreen
    },
    {
        InitialRouteName:'Home'
    }

);