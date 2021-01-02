//15:46 30-07-20
import React, { Component } from 'react';
import {
Text,
AppRegistry,
View,
StyleSheet,
TextInput,
Button,
FlatList,
AsyncStorage,
TouchableOpacity,
Modal,
Image,
DatePickerAndroid,
Clipboard,
dialogbox,
Linking,
ScrollView,
// backHandler
  } from 'react-native';

let box = {
   One:  {
    "number" : "01",
    "title" : "Master",
    },
}

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {  
  nowTypingInput: '',
 };
}
 

render() {
 
return (
 <View>
        <Image style={{
                      width: '100%',
                      marginTop:0,
                      marginLeft:0,
                      marginRight:10,
                      height:'100%',
                      position:'absolute'
                    }}                                                                                            
                      source={require('./background.jpg')}                    
                    />
                    
          <View style={{
            marginTop:7,
            fontSize: 32,
            fontWeight:'bold',  
            backgroundColor: 'steelblue',//this.state.X_color_List[this.state.NowCard],
            borderWidth:0,
            height:95,
            width:'97%',
            borderRadius:7,
            marginLeft:6
}}>
  
<Text>Ajey</Text>
</View>

 </View>
  );
}
}
 
const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 0,
  backgroundColor: '#ecf0f1',
  padding: 0,
},
});
 
//AppRegistry.registerComponent('TodoList', () => TodoList);
AppRegistry.registerComponent('App', () => App);

