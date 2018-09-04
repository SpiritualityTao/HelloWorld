import React from 'react';
import { View, Text ,Button,Image} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export class NavigatorComponent extends React.Component{

    render(){
        return(
            <RootStack/>
        )
    }
}

class LogoImage extends React.Component{

    render(){
        return (
            <Image
                source={{uri:"https://facebook.github.io/react-native/img/favicon.png",width:50, height:50}}
           />
        );
    }
}

class HomeScreen extends React.Component {

    state={
        count:0
    };

    componentWillMount(){
        this.props.navigation.setParams({increaseCount:this._increaseCount});
    }

    _increaseCount=()=>{
        this.setState({count:this.state.count+1})
    };

    static navigationOptions=({navigation})=>{
        return {
            title: 'home',
            headerTitle: <LogoImage/>,
            headerLeft: (
                <Button
                    title="info"
                    onPress={() => alert('this is a alert info！')}
                    color="#ccc"
                />
            ),

            headerRight: (
                <Button
                    title="+1"
                    onPress={navigation.getParam('increaseCount')}
                    color="#000"
                />
            ),
        };
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Text>Count:{this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={()=>this.props.navigation.navigate('Details',{
                        ItemId:86,
                        otherParam:'this is a Param'
                    })}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
       return {
           title:navigation.getParam('otherParam','A nested Details Screen'),
       };
    };

    render() {
        const {navigation}=this.props;
        const ItemId = navigation.getParam('ItemId','defaultID');
        const otherParam = navigation.getParam('otherParam','set default Param');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>ItemID:{JSON.stringify(ItemId)}</Text>
                <Text>otherParam:{JSON.stringify(otherParam)}</Text>
                <Button
                    title='go to Detail Screen again'
                    onPress={()=>this.props.navigation.push('Details')}
                />

                <Button
                    title='update Title'
                    onPress={()=>this.props.navigation.setParams({otherParam:'Details Title'})}
                />

                <Button
                    title='push Home Screen'
                    onPress={()=>this.props.navigation.push('Home')}
                />
                <Button
                    title='go to Home Screen'
                    onPress={()=>this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(

    {
        Home:HomeScreen,
        Details: DetailsScreen
    },
    {
        InitialRouteName:'Home'
    }

);