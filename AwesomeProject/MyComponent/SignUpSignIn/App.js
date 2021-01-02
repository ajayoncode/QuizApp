//201223-1912 # SignIN/SignUp pages
import React from 'react';

import {
Text,
View,
  } from 'react-native';  

  import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './About';
import Dashboard from './Dashboard';


const Stack = createStackNavigator();
export default class App extends React.Component {
constructor() {
  super();
  this.state = {  
  }
}

createHomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={About}
      options={{
        title: 'Check',
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Dash"
      component={Dashboard}
      options={{
        title: 'Check',
        headerShown: false,
      }}
    />
    
  </Stack.Navigator>
);

render() {
  
  return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
}

}

