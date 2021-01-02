//1836-18122# images add, new design don
//201225-2254 #Computer quiz screel added
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
import Notes from './MyComponent/Quiz/ScienceQuiz';
import ScienceQuiz from './MyComponent/Quiz/ScienceQuiz';
import ComputerQuiz from './MyComponent/Quiz/ComputerQuiz';
  
// new line added

const Drawer = createDrawerNavigator();

export default class App extends React.Component{

render()
  { 
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Science Quiz">
        <Drawer.Screen name="Science Quiz" component={ScienceQuiz} />    
        <Drawer.Screen name="Computer Quiz" component={ComputerQuiz} />         

      </Drawer.Navigator>
    </NavigationContainer>
  );}
}