import React, { Component } from 'react';
import {
  View,
  Text,
  WebView,
} from 'react-native';

var DEFAULT_URL = 'https://www.jianshu.com/u/c72e53392feb';

export class WebViewDemo extends Component{

    state={
        URL:DEFAULT_URL
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{height:40,alignSelf:'center'}}>WebView组件演示</Text>
                <WebView style={{backgroundColor:'#00ff00'}}
                    source={{uri:this.state.URL}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                />
            </View>
        );
    }
}