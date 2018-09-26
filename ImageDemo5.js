import React, { Component } from 'react';
import { StyleSheet,View, Image, Text,TouchableOpacity } from 'react-native';



export class ImageComponent extends Component{
     constructor(props){
        super(props);
        this.state={
             imgs:this.props.imgs,
             count:0
        };
     }

     goNext(){
         if(this.state.count < this.state.imgs.length-1){
             this.setState({
                 count:this.state.count+1
             })
         }
     }

    goPreview(){
        if(this.state.count > 0){
            this.setState({
                count:this.state.count-1
            })
        }
    }

    render(){
        return (
            <View style={[styles.flex]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                    source={{uri:this.state.imgs[this.state.count]}}
                    resizeMode="contain"/>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>this.goPreview()}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)} >
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text>{this.state.count}</Text>
                <Text>{this.state.imgs.length}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex: 1,
        alignItems: 'center'
    },

    img:{
        height:150,
        width:200
    },

    image:{
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btns:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },

    btn:{
      width:60,
      height:30,
      borderColor: '#0089FF',
      borderWidth: 1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 3,
      marginRight: 20
    }
});
