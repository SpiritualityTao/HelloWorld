import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Switch,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');
var toolbarActions = [
  {title:'Create' ,icon:require('./imgs/ic_center_card.png'),show:'always'},
  {title:'Filter'},
  {title:'Settings' ,icon:require('./imgs/ic_center_chongzhi.png'),show:'always'},
];

export class ToolbarComponent extends Component{
  render(){
    return(
      <ToolbarAndroid
        title="主标题"
        subtitle="副标题"
        navIcon={require('./imgs/ic_center_collect.png')}
        logo={require('./imgs/ic_center_address.png')}
        style={{height:56,backgroundColor: '#e9eaed',}}
        actions={toolbarActions}>
        <Switch
          value={false}
          />
        </ToolbarAndroid>
    );
  }
}