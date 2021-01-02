import React from 'react';
import { Text, View,AsyncStorage  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';



export default class HomeTest extends React.Component{

render()
  { 
var ok=this.props.route.params.screen
var op=this.props.route.params.hello

console.log(this.props)
    return (
    <View>

<Text style={{fontSize:32}} onPress={()=>this.props.navigation.openDrawer()}>Click for open drawer</Text>
<Text style={{fontSize:32}}>its Home screen {ok}-{op}</Text>


       </View>
  );}
}