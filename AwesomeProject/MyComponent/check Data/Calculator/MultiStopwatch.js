//1435-111220, multi stopwatch working well.. improved design
//201225-2054 #title clear after add button pressed
import React from 'react';
import { Text, View,TextInput, 
    Image,Button, 
    FlatList ,
    TouchableOpacity,
    Switch
} from 'react-native';
import { createDrawerNavigator, getIsDrawerOpenFromState } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,Card,List, ToggleButton} from 'react-native-paper';
import StopWatch from './StopWatch'
import { Value } from 'react-native-reanimated';


var d1,d2,n1=0,n2=0
var time_diff=0
var count=0;

export default class MultiStopwatch extends React.Component{
 constructor(){
     super();
    this.state={
        text:'',
        timerList:[],
        }
    }

createStopWatch(){
    this.setState(
            prevState =>
            {        
              let {
                  text,
                timerList,    
              } = prevState;

timerList[count]=this.state.text
count++;     
text=''
return {
              text:text,
              timerList:timerList,
              };
            },
        );
    
}


 msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds ;
  }




render()
  { 
   

    return (
 <View style={{flex:1}}>
       
        <View>
        
          <Appbar.Header style={{backgroundColor:'grey'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
          <Image style={{height:35,width:35,marginLeft:10}} source={require('./icon.png')}  onPress={()=>this.props.navigation.openDrawer()}  />
          </TouchableOpacity>
           <Appbar.Content title="Multi-Stopwatch" color="white" onPress={()=>this.props.navigation.openDrawer()  } />
           <Text style={{fontSize:24}}>{this.state.running} </Text>
          </Appbar.Header>
        </View>

        <View style={{flexDirection:'row',borderBottomWidth:1,marginTop:7}}>
                <TextInput 
                    style={{fontSize:25,width:'65%'}}
                    placeholder='title'
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text}
                />

                <View style={{height:40,width:'30%',margin:7,backgroundColor:'#FF6F00',alignItems:'center',justifyContent:'center',borderRadius:10}} >
                        <Text style={{fontSize:24,color:'white'}} onPress={()=>this.createStopWatch()}> ADD </Text>
                </View>

        </View>  


        <FlatList 
        data={this.state.timerList}
        renderItem={({item,index})=>
      <TouchableOpacity >
        <View style={{backgroundColor:'lightgrey',  marginTop:10}}>
            <Text style={{marginLeft:10,fontSize:28,alignItems:'center'}}>{this.state.timerList[index]}</Text>
        <StopWatch />
        </View>
        </TouchableOpacity>
        }

        />

  </View>
  );}
}
