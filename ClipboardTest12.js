import React, { Component } from 'react';
import {View, Text,Clipboard,ToastAndroid } from 'react-native';

export class ClipboardDemo extends Component<props>{

    constructor(props){
        super(props);
    }

    async setClipboardContent(){
        Clipboard.setString("Hello world!!!");
        try{
            var content =await Clipboard.getString();
            ToastAndroid.show("粘贴版内容为："+content,ToastAndroid.SHORT);
        }catch(e){
            ToastAndroid.show(e.message,ToastAndroid.SHORT);
        }
    }

    render(){
        return(
            <View>
                <Text onPress={this.setClipboardContent} style={{color:'blue',marginLeft:10}}>
                    粘贴版内容演示
                </Text>
            </View>
        );
    }
}