/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import ToDoTest from './ToDoTest';
import {name as appName} from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);

//AppRegistry.registerComponent(appName, () => ToDoTest);
