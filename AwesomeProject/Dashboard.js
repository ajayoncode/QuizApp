//201223-1530 #Logon-11 Initiated

import React from 'react';
import { Button } from 'react-native';

import {
Text,
View,
TextInput,  
TouchableOpacity,
Modal
  } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';


  export default class Dashboard extends React.Component {

  constructor() {
  super();
  this.state = {  
    text:'',
    account:[{id:0,username:'one',fullname:'',passkey:'1234',contactno:'7791943078'}],
    inputUserName:'',
    inputPasskey:'',
    modalVisibility:true
  }

}

componentDidMount(){
  const userdata=this.props.route.params.ajay
  this.setState({account:userdata})
  console.log(this.props.route.params.ajay)
}

render() {
  
  //console.log(this.props.route.params.ajay) 
 //  this.setState({account:userdata})
return (
 
<View style={{flex:1}}>
      <View style={{
        height:70,
        backgroundColor:'steelblue',
        justifyContent:'center'
      }}>
          <Text style={{
            color:'white',
            fontSize:28,
            margin:15
          }}
          onPress={()=> this.props.navigation.navigate('Home')}
          >
            Dashboard
          </Text>
         
      </View>
      <View>
          { 
            this.state.account.map((item)=>
            <Text style={{
              color:'steelblue',
              fontSize:24,
              marginTop:30,
              marginLeft:20,
            }}
            >
            Name: {item.fullname}{'\n\n'}
            Username :{item.username}{'\n\n'}
            Contact No. :{item.contactno}
            </Text>
            )
                
          } 
          </View>

</View>
 
  );
}

} 