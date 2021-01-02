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


  export default class About extends React.Component {
  arr=[]
  id=0
  constructor() {
  super();
  this.state = {  
    text:'',
    //account:[{id:0,username:'one',fullname:'',passkey:'1234',contactno:'7791943078'}],
    inputUserName:'',
    inputFullName:'',
    inputContact:'',
    inputPasskey:'',
    modalVisibility:true
  }
}



render() {
  
return (
 
<View style={{flex:1}}>
      <View style={{
        height:70,
        backgroundColor:'steelblue',
        justifyContent:'center'
      }}>
          <Text style={{
            color:'white',
            fontSize:30,
            margin:15
          }}>
            Sign In
          </Text>
      </View>
      <View style={{flex:1,alignItems:'center',}}>
          <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginTop:100,
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='User Name'
          onChangeText={(e)=>this.setState({inputUserName:e})}

          />
          
      <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='Password'
          onChangeText={(e)=>this.setState({inputPasskey:e})}
          />

          <TouchableOpacity style={{
            height:50,
            width:'80%',
            backgroundColor:'steelblue',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center'
          }}
          onPress={()=>this.login()}
          >
          
          <Text style={{
            fontSize:24,
            color:'white'
          }}> LOGIN</Text>

          </TouchableOpacity>

<TouchableOpacity onPress={()=>this.setState({modalVisibility:true})}>
<Text style={{
  fontSize:18,
  color:'steelblue',
  marginTop:10
}} >
or sign up new account
</Text>
</TouchableOpacity>

      </View>
   
<Modal visible={this.state.modalVisibility} >
<View style={{
        height:70,
        backgroundColor:'steelblue',
        justifyContent:'center'
      }}>
          <Text style={{
            color:'white',
            fontSize:30,
            margin:15
          }}>
            Sign Up
          </Text>
      </View>
      <View style={{flex:1,alignItems:'center',}}>
          <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginTop:100,
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='User Name'
          onChangeText={(e)=>this.setState({inputUserName:e})}
          />

        <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='Full Name'
          onChangeText={(e)=>this.setState({inputFullName:e})}
          />

      <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='Contact'
          onChangeText={(e)=>this.setState({inputContact:e})}
          />
          <TextInput 
          style={{
            borderWidth:1,
            borderRadius:10,
            borderColor:'steelblue',
            marginBottom:30,
            fontSize:22,
            width:'80%'
          }}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(e)=>this.setState({inputPasskey:e})}
          />

          <TouchableOpacity style={{
            height:50,
            width:'80%',
            backgroundColor:'steelblue',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center'
          }}
          onPress={()=>this.login()}
          >
          
          <Text style={{
            fontSize:24,
            color:'white'
          }}> Sign Up</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.setState({modalVisibility:false})}>
                  <Text style={{
                    fontSize:18,
                    color:'steelblue',
                    marginTop:10
                  }}>
                  or Sign In exsiting account
                  </Text>
        </TouchableOpacity>
</View>
</Modal>

</View>
 
  );
}

} 