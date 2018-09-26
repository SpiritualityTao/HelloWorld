/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  ImageBackground,
  ListView,
} from 'react-native';
const ORDER_STATUS_DATA={
    "api":"GetSearchHistory",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "id":0,
        "status":"订单已提交",
        "remark":"请耐心等待商家确认",
        "time":"8月5日 18:13"
    },{
        "id":1,
        "status":"支付成功",
        "remark":"",
        "time":"8月5日 18:15"
    },{
        "id":2,
        "status":"商家已接单",
        "remark":"商品准备中，由商家配送，配送进度请咨询商家",
        "time":"8月5日 18:20"
    },{
        "id":3,
        "status":"配送进行中",
        "remark":"你的商品正由XX配送员火速送达中...",
        "time":"8月5日 18:25"
    },{
        "id":4,
        "status":"订单完成",
        "remark":"任何意见和吐槽，都欢迎联系我们",
        "time":"8月5日 18:34"
    }]
};
var STATUS_IMGS=[
     require('./imgs/order/ic_order_status_tijiao.png'),  
     require('./imgs/order/ic_order_status_zhifu.png'),  
     require('./imgs/order/ic_order_status_jiedan.png'),  
     require('./imgs/order/ic_order_status_peisong.png'),
     require('./imgs/order/ic_order_status_wancheng.png')
];
var {height, width} = Dimensions.get('window');
var orderStatuts = ORDER_STATUS_DATA.data;
var HEADER_STATUS = orderStatuts[0];
var FOOTER_STATUS = orderStatuts[orderStatuts.length-1];
var CENTER_STATUS = orderStatuts.slice(1,orderStatuts.length-1);
export class TimeLineDemo extends React.Component {
  
    constructor(props){
        super(props);
        this.renderItem=this.renderItem.bind(this);
        this.renderHeaderItem=this.renderHeaderItem.bind(this);
        this.renderFooterItem=this.renderFooterItem.bind(this);
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2,
            }),
        }
    }

    renderItem(data){
        if(data.id > 0 && data.id < 4){
            return (this.renderCenterItem(data))
        }
    }

    renderHeaderItem(){
        return(
        <View style={{flexDirection:'row',height:75}} >
            <View>
                <Image source={require('./imgs/order/ic_order_status_tijiao.png')}
                style={{width:30,height:30,marginLeft:10,marginTop:22}}/>
                <Image source={require('./imgs/order/ic_order_shu.png')}
                style={{height:23,marginLeft:25,flex:1}}/>
            </View>
            <View>
                <View style={{height:5}}/>
                <ImageBackground source={require('./imgs/order/ic_order_status_item_bg.png')}
                    style={{height:65,width:width-60,marginLeft:10}}>
                    {this.renderCenterContent(HEADER_STATUS)}
                </ImageBackground>
                <View style={{height:5}}/>
            </View>
        </View>);
    }

    renderCenterItem(data){
        return(
            <View style={{flexDirection:'row',height:75}} >
                <View>
                    <Image source={require('./imgs/order/ic_order_shu.png')}
                    style={{height:23,marginLeft:25,flex:1}}/>
                    <Image source={STATUS_IMGS[data.id]}
                    style={{width:30,height:30,marginLeft:10}}/>
                    <Image source={require('./imgs/order/ic_order_shu.png')}
                    style={{height:23,marginLeft:25,flex:1}}/>
                </View>
                <View>
                    <View style={{height:5}}/>
                    <ImageBackground source={require('./imgs/order/ic_order_status_item_bg.png')}
                        style={{height:65,width:width-60,marginLeft:10}}>
                        {this.renderCenterContent(data)}
                    </ImageBackground>
                    <View style={{height:5}}/>
                </View>
            </View>);
    }

    renderFooterItem(){
        return(
            <View style={{flexDirection:'row',height:75}} >
                <View>
                    <Image source={require('./imgs/order/ic_order_shu.png')}
                    style={{height:23,marginLeft:25,flex:1}}/>
                    <Image source={require('./imgs/order/ic_order_status_wancheng.png')}
                    style={{width:30,height:30,marginLeft:10,marginBottom:22}}/>
                </View>
                <View>
                    <View style={{height:5}}/>
                    <ImageBackground source={require('./imgs/order/ic_order_status_item_bg.png')}
                        style={{height:65,width:width-60,marginLeft:10}}>
                        {this.renderCenterContent(FOOTER_STATUS)}
                    </ImageBackground>
                    <View style={{height:5}}/>
                </View>
            </View>);
    }


    renderCenterContent(data){
        return(
            <View style={{marginTop:10,marginLeft:15}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:14,color:'black',}}>{data.status}</Text>
                    <View style={{alignItems:'flex-end',marginRight:10,flex:1}}>
                        <Text style={{color:'#777',fontSize:12}}>{data.time}</Text>
                    </View>
                </View>
                <Text style={{fontSize:12,color:'#777',marginTop:10}}>{data.remark}</Text>
            </View>);
    }

    renderContent(dataSource){
        return(
        <ListView
            style={{flex:1}}
            initialListSize={1}
            dataSource={dataSource}
            onEndReachedThreshold={10}
            enableEmptySections={true}
            renderHeader={this.renderHeaderItem}
            renderRow={this.renderItem}
            renderFooter={this.renderFooterItem}
        />);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                  {this.renderContent(this.state.dataSource.cloneWithRows(
                             CENTER_STATUS === undefined ? [] : CENTER_STATUS))}
            </View>
        );
    }
}