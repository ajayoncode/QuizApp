import React from 'react';
import { Text, View,AsyncStorage  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
import {  } from 'react-native-gesture-handler';
import HomeTest from './MyComponent/test/HomeTest';
import Frame from './MyComponent/test/Frame';

  

const Drawer = createDrawerNavigator();

export default class App extends React.Component{

render()
  { 
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeTest} />         
        <Drawer.Screen name="Frame" component={Frame} />         

      </Drawer.Navigator>
    </NavigationContainer>
  );}
}