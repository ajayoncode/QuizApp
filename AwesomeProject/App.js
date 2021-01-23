//1836-18122# images add, new design don
//201225-2254 #Computer quiz screel added
//1554-210121# code review and test
//1647-210121# Style sheet updated in science screen
//1741-230121# Code reviewed and updated
import React from 'react';
import { Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ScienceQuiz from './MyComponent/Quiz/ScienceQuiz';
import ComputerQuiz from './MyComponent/Quiz/ComputerQuiz';
  

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