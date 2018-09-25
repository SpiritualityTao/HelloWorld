import React, { Component } from 'react';
import { StyleSheet,View, ProgressBarAndroid } from 'react-native';



export class ProgressComponent extends Component{

    render(){
        return (
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr='Inverse' color='red'/>
                <ProgressBarAndroid styleAttr='Horizontal' color='green'  indeterminate={true} style={{margin:20}}/>
                <ProgressBarAndroid styleAttr='Horizontal' color='green' indeterminate={false} style={{margin:20}}/>
                <ProgressBarAndroid styleAttr='SmallInverse' color='blue' style={{margin:20}}/>
                <ProgressBarAndroid styleAttr='LargeInverse' color='red'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
})
