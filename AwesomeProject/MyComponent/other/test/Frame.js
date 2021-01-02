import React from 'react';
import { Text, View,AsyncStorage,TouchableOpacity  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';



export default class Frame extends React.Component{

render()
  { 
    return (
    <View>

<Text style={{fontSize:32}}>Its Frame Screen</Text>
<Text style={{fontSize:32}} onPress={()=>this.props.navigation.navigate('Home',{screen:'COOL',hello:'Check'})} >go to Home</Text>

<TouchableOpacity
  accessible={false}
  accessibilityLabel="Tap me!"
  onPress={()=> alert('d')}>
  <View>
    <Text>Press me!</Text>
  </View>
</TouchableOpacity>

       </View>
  );}
}