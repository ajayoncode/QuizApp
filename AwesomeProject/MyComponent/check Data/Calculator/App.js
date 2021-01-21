import React from 'react';
import { Text, View,AsyncStorage  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
import {  } from 'react-native-gesture-handler';
import HomeScreen from './MyComponent/Calculator/HomeScreen';
import MultiStopwatch from './MyComponent/Calculator/MultiStopwatch';
import StopWatch from './MyComponent/Calculator/StopWatch';
import Notes from './MyComponent/Calculator/Notes';

  

const Drawer = createDrawerNavigator();

export default class App extends React.Component{

render()
  { 
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />         
        <Drawer.Screen name="StopWatch" component={MultiStopwatch} />         
        <Drawer.Screen name="Notes" component={Notes} />         

      </Drawer.Navigator>
    </NavigationContainer>
  );}
}