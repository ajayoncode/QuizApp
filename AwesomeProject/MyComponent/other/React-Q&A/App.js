import React from 'react';
import { Text, View,AsyncStorage  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
import {  } from 'react-native-gesture-handler';
import Home from './MyComponent/React-Q&A/Home';
import AskQuestion from './MyComponent/React-Q&A/AskQuestion';
import StarQues from './MyComponent/React-Q&A/StarQues';
  

const Drawer = createDrawerNavigator();

export default class App extends React.Component{

render()
  { 
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />         
        <Drawer.Screen name="Ask" component={AskQuestion} />         
        <Drawer.Screen name="Star" component={StarQues} />         

      </Drawer.Navigator>
    </NavigationContainer>
  );}
}