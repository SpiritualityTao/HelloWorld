/**
 * pengtao DatePickerAndroid Demo
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  DatePickerAndroid
} from 'react-native'

class CustomButton extends Component{

  render(){
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export class DatePickerDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      presetDate: new Date(2016, 3, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: '选择日期,默认今天',
      minText: '选择日期,不能比今日再早',
      maxText: '选择日期,不能比今日再晚',
      presetText: '选择日期,指定2016/4/5',
    }
  }

  async showPicker(stateKey,options){
    try {
      var newState={};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
        newState[stateKey + 'Text'] = 'dismissed';
      }else{
        var date = new Date(year,month,day);
        newState[stateKey+'Text'] = date.toDateString();
        newState[stateKey+'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.welcom}>日期选择期组件实例</Text>
        <TouchableHighlight style={styles.button} onPress={this.showPicker.bind(this,'simple',{date:this.state.simpleDate})}>
          <Text>点击弹出基本日期选择期</Text>
        </TouchableHighlight>
        <CustomButton
          text={this.state.presetText}
          onPress={this.showPicker.bind(this,'preset',{date:this.state.presetDate})}/>
        <CustomButton
          text={this.state.minText}
          onPress={this.showPicker.bind(this,'min',{date:this.state.minDate,minDate:new Date()})}/>
        <CustomButton
          text={this.state.maxText}
          onPress={this.showPicker.bind(this,'max',{date:this.state.maxDate,maxDate:new Date()})}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcom:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
})