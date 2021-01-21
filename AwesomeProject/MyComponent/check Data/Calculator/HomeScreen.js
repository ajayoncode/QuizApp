//1846-06-12-20 # Del button added
//2053-08-12-20# double '.' dott issue resolved
//2037-141220 # design of buttons done, accuracy improved
//201220-1103 #delete button, logic updated
//201225-2049 # CE and C button changed by name AC, and C

import React from 'react';
import { Text, View,TextInput,Keyboard,TouchableOpacity,Dimensions,StyleSheet,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,Card,List,Button } from 'react-native-paper';

export default class HomeScreen extends React.Component{
   state={
   series:'',
   value:0
   }

   arr=''
   total=0

handler(e){


   if(e=='DEL')
   {
      this.arr=this.arr.substring(0,this.arr.length-1)

      if(this.arr.substring(this.arr.length-1,this.arr.length)!='+'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='-'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='*'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='/')
         {
         
            try{
            this.total=eval(this.arr)}
            catch
            {
               alert('Wrong Expresstion, Use DEL')
               // this.arr=''
               // this.total=0
            }
         
         }

      this.setState({value:this.total})
      this.setState({series:this.arr})
   }
   else if((this.arr[this.arr.length-1]=='+'||this.arr[this.arr.length-1]=='-'||
   this.arr[this.arr.length-1]=='*'||this.arr[this.arr.length-1]=='/'||this.arr[this.arr.length-1]=='.')&&
   (e=='+'||e=='-'||e=='*'||e=='/'||e=='.')){
  
      this.arr=this.arr.substring(0,this.arr.length-1)
      this.arr=this.arr.concat(e)
      this.setState({value:this.total})
      this.setState({series:this.arr})

   }
   else if(e=='C')
   {
      this.arr=''
      this.setState({value:0})
   }
   else if(e=='AC')
   {
      this.setState({value:0})
      this.setState({series:''})
      this.arr=''
      this.total=0
   }
   else if(e=='=')
   {
      this.arr=this.total+'+'
      this.setState({value:0})
      this.setState({series:this.arr})
   }
   else
   {
      
         if(e!='=')   
         this.arr=this.arr.concat(e)

         if(this.arr.substring(this.arr.length-1,this.arr.length)!='+'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='-'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='*'&&
         this.arr.substring(this.arr.length-1,this.arr.length)!='/')
         {
         
            try{
            this.total=eval(this.arr)}
            catch
            {
               alert('Wrong Expresstion, Use DEL')
               // this.arr=''
               // this.total=0
            }
         
         }
      
         this.setState({value:this.total})
         this.setState({series:this.arr})

   }
   
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
          
          <Appbar.Content title="General Calculator" onPress={()=>this.props.navigation.openDrawer()} color="white" />
         </Appbar.Header>
         
       </View>
      <View style={{backgroundColor:'grey',marginTop:5}}>
          <Card style={{height:200,elevation:8}}>
       
          <Text style={{textAlign:'right',fontSize:37,marginTop:20}}>
                  {this.state.series}</Text>
               <Text style={{textAlign:'right',fontSize:37,marginTop:20}}>
                  {this.state.value}</Text>
            
          </Card>

      </View>
     
  <View style={{flex:1,flexDirection:'column'}}>
         
      <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      
      <TouchableOpacity  onPress={() => this.handler('AC')}>
            <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
               <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>AC</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity  onPress={() => this.handler('C')}>
            <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
               <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>C</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity  onPress={() => this.handler('DEL')}>
            <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
               <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>DEL</Text>
            </View>
         </TouchableOpacity>

         <TouchableOpacity  onPress={() => this.handler('/')}>
            <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
               <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>/</Text>
            </View>
         </TouchableOpacity>
      </View>

    <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
    <TouchableOpacity  onPress={() => this.handler('7')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>7</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('8')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>8</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('9')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>9</Text>
     </View>
     </TouchableOpacity>
     
     <TouchableOpacity  onPress={() => this.handler('*')}>
     <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>X</Text>
     </View>
     </TouchableOpacity>
  </View>
  
  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
 
  <TouchableOpacity  onPress={() => this.handler('4')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>4</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('5')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>5</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('6')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>6</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity  onPress={() => this.handler('-')}>
     <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>-</Text>
     </View>
     </TouchableOpacity>
  </View>

  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
  <TouchableOpacity  onPress={() => this.handler('1')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>1</Text>
     </View>
     </TouchableOpacity>
     
     <TouchableOpacity  onPress={() => this.handler('2')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>2</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('3')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>3</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('+')}>
     <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>+</Text>
     </View>
     </TouchableOpacity>
  </View>

  <View style={{marginTop:5,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
  
   <TouchableOpacity  onPress={() => this.handler('0')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>0</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('00')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>00</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('.')}>
     <View style={styles.buttonStyle}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>.</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity  onPress={() => this.handler('=')}>
     <View style={{...styles.buttonStyle,backgroundColor:'#FF6F00'}}>
        <Text style={{fontSize:28,fontWeight:'bold',color:'white'}}>=</Text>
     </View>
     </TouchableOpacity>
  </View>

  </View>

       
      
      </View>
      );}
    }

   const styles = StyleSheet.create({
      buttonTextStyle:{
         fontSize:28,
         color:'#4A51B8'
      },
      buttonStyle:{
         height:80,
         width:80,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'white',
         elevation:2,
         borderRadius:8
      }  ,  

   });