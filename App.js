/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,TextInput,ProgressBarAndroid} from 'react-native';
//import {ScrollViewComponent} from './ScrollViewTest';
//import {Touchables,ButtonBasics,xiecheng} from './TouchEventTest';
//import {XcLayout} from './XCTest1';
//import {SearchComponent} from './TextInputTest2'
//import {SampleAppMovies} from  './SimpleMovieListTest3'
//import {NavigatorComponent} from './NavigatorTest4';
//import {ImageComponent} from './ImageTest5'
//import {DrawerComponent} from './DrawerTest6'
//import {FadeInComponent} from './AnimatedTest7'
//import {ProgressComponent} from './ProgressTest8'
//import {TimeLineDemo} from './ListViewTest9'
//import {ToolbarComponent} from './ToolBarTest10'
import {DatePickerDemo} from './DatePickerAndroid11'
import {ClipboardDemo} from './ClipboardTest12'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


var imgs = ['http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg'];

var Myinfo = "this is my info ";
type Props = {};

//var {Platform} = React;
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
  render() {
    let pic = {
        uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (


        /* <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.st ate.text.split(' ').map((word) => word && '123').join(' ')}
            </Text>
        </View>*/
        /*ScrollViewComponent组件
        <ScrollViewComponent/>
        */
        /*Button组件
        <ButtonBasics/>
        */
        /* 携程布局
        <XcLayout />
        */
        /*搜索
        <SearchComponent/>
        */
        //从网上解析JSON格式并且加载成地电影
        // <SampleAppMovies />

        /*导航组件
        <NavigatorComponent/>
         */
        /*<View style={[{marginTop: 40,flex:1}]}>
            <ImageComponent imgs={imgs}/>
        </View>*/
        //<DrawerComponent/>
       //<FadeInComponent/>

        //<Text>{Platform.OS}</Text>
        //<Text>{Platform.Version}</Text>
        //<ProgressComponent />
        //<TimeLineDemo/>
        //<ToolbarComponent/>
        // <DatePickerDemo/>
        <ClipboardDemo/>
    ); 
  }
}

var request = new XMLHttpRequest();

class Greeting extends Component {
    render() {
        return (
            <Text style={styles.instructions}>Hello{this.props.name}</Text>
        );
    }
}


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render(){
      let display = this.state.showText?this.props.text : "  ";
      return (
        <Text style={styles.instructions}>{display}</Text>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3048ff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
