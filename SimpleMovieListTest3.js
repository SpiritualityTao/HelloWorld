import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View } from "react-native";

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export class SampleAppMovies extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            loaded:false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then((reponse)=>reponse.json())
            .then((reponseData)=>{
                this.setState({
                    data:this.state.data.concat(reponseData.movies),
                    loaded:true
                 });
            });
    }

    render(){
        if(!this.state.loaded){
            return this.renderLoadView();
        }
        return this.renderAllMovies();
    }

    renderAllMovies(){

        return(
          <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            />
        );
    }

    renderLoadView() {
        return(
          <View style={styles.container}>
              <Text>Loading Movies Data ......</Text>
          </View>
        );
    }

    renderMovie({item}){
        return(
            <View style={styles.container}>
                <View>
                    <Image source={{uri:item.posters.thumbnail}}
                           style={styles.thumbnail}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:5,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    thumbnail:{
        width:53,
        height:81
    },
    rightContainer:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        height:81
    },

    title:{
      fontSize:13,
      justifyContent:'center',
      alignItems:'center',
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});