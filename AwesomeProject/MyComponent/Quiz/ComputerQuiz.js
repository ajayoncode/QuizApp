//1836-18122# images add, new design don
import React from 'react';
import { Text, View,StyleSheet,Modal,TouchableOpacity,Image,ImageBackground  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar,TextInput,Button,Card,List} from 'react-native-paper';
import {  } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

var score=0;
export default class ScienceQuiz extends React.Component{

  state={
    quiz:[{quesNo:1,question:'Recording data on a DVD is also called what ?',opt1:'Emulating',opt2:'Tracking',opt3:'Burning',opt4:'Dithering',answer:'Dithering'},
    {quesNo:2,question:'Which of the following is a wireless technology standard ?',opt1:'PCI',opt2:'TFT',opt3:'BLE',opt4:'IDE',answer:'BLE'},
    {quesNo:3,question:'One Which of the following devices would you find shift key ?',opt1:'Keyboard',opt2:'Monitor',opt3:'Printer',opt4:'Mouse',answer:'Keyboard'},
    {quesNo:4,question:'How many Shift keys are on a standard keyboard ?',opt1:'4',opt2:'2',opt3:'3',opt4:'1',answer:'2'},
    {quesNo:5,question:'What type of printer does not print on papper ?',opt1:'Laser printer',opt2:'Inkjet printer',opt3:'3D printer',opt4:'Dot-materix',answer:'3D printer'},
    {quesNo:6,question:'1080p resolution is also called what ?',opt1:'4K',opt2:'HDTV',opt3:'Standard Defination',opt4:'interlaced',answer:'HDTV'},
    {quesNo:7,question:'A responsive website tyically has what type of layout  ?',opt1:'Static',opt2:'Fixed',opt3:'Fluid',opt4:'Mobile',answer:'Fluid'},
    {quesNo:8,question:'What function key is often used to perform the "Refresh" command ?',opt1:'F7',opt2:'F3',opt3:'Indian F1',opt4:'F5',answer:'F5'},
    {quesNo:9,question:'What is a browser feature that automatically populates form fields called ?',opt1:'Autofill',opt2:'Automate',opt3:'Autocomplete',opt4:'Autocorrect',answer:'Autofill'},
    {quesNo:10,question:'Programs installed on smartphones are commonly called what ?',opt1:'Documents',opt2:'Libraries',opt3:'Apps',opt4:'Macros',answer:'Apps'}],
    num:0,
    optColor:['#7FD7EE','#7FD7EE','#7FD7EE','#7FD7EE'],
    modalVisible:false
  }

submit(){


  this.setState({num:this.state.num+1})

  console.log(this.state.num+"hello"+score)

  this.setState(
    prevState =>
     {        
          let {
            optColor,
            num
          } = prevState;
       

 if(this.state.num>8)
{num=0,this.setState({modalVisible:true})}
       
          optColor[0]='#7FD7EE'
          optColor[1]='#7FD7EE'
          optColor[2]='#7FD7EE'
          optColor[3]='#7FD7EE'

          return {
          optColor:optColor,
          num:num
          };
    },

);
  
}

onSelectOpt(quesNumber,questAnswer,optSelected)
{
   
  if(this.state.num<10)
  {

  this.setState(
    prevState =>
     {        
          let {
            optColor,
          } = prevState;
       
          if(this.state.quiz[quesNumber].answer==questAnswer)
          {
            //alert('Right Answer, WOW!!')
            if(optColor[optSelected]!='limegreen')
            score++;

            optColor[optSelected]='limegreen'
          }
          else
          {
           // alert('try again')
         optColor[optSelected]='red'

        //  var i=0;
        //    if(this.state.quiz[quesNumber].answer==this.state.quiz[quesNumber].opt1)
        //      optColor[i]='limegreen'
        //    i++;

        //    if(this.state.quiz[quesNumber].answer==this.state.quiz[quesNumber].opt2)
        //      optColor[i]='limegreen'
        //    i++;

        //    if(this.state.quiz[quesNumber].answer==this.state.quiz[quesNumber].opt3)
        //      optColor[i]='limegreen'
        //      i++;
        //    if(this.state.quiz[quesNumber].answer==this.state.quiz[quesNumber].opt4)
        //      optColor[i]='limegreen'
        //      i++;
         }

          return {
          optColor:optColor,
          };
    },

);
  


  }
  else
  alert('Your Score is '+score)

}
 
  

render()
  { 
    return (
      <View>
        <Appbar.Header style={{backgroundColor:'steelblue'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
          <Image style={{height:35,width:35,marginLeft:10}} source={require('./icon.png')}   />
          </TouchableOpacity>
          <Appbar.Content title="Computer Quiz"  onPress={()=>this.props.navigation.openDrawer()} />
          
        </Appbar.Header>

        <ImageBackground style={{
                      width: '100%',
                      marginTop:50,
                      marginLeft:0,
                      marginRight:10,
                      height:'110%',
                      position:'absolute'
                    }}                                                                                            
                      source={require('./quiz_background.jpg')}                    
                    />
            <View style={{marginTop:30,marginLeft:10,
              backgroundColor:'#e6aa50',minHeight:100,
              width:'95%',marginRight:20,
              borderRadius:10,
              flexDirection:'row'
              }}>
              
              <Text style={{fontSize:24,color:'white',marginLeft:10,marginTop:10}}>Q.{this.state.quiz[this.state.num].quesNo} {this.state.quiz[this.state.num].question}</Text>
<Text style={{fontSize:18,color:'white',marginTop:10,marginLeft:'15%'}}>Score:{score}/5</Text>
            
            </View>
        

        
            <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt1, 0)}>
          <View style={{...styles.optionContainer,backgroundColor: this.state.optColor[0]}}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>A {this.state.quiz[this.state.num].opt1} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt2, 1)}>
          <View style={{...styles.optionContainer,backgroundColor: this.state.optColor[1]}}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>B {this.state.quiz[this.state.num].opt2} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt3, 2)}>
          <View style={{...styles.optionContainer,backgroundColor: this.state.optColor[2]}}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>C {this.state.quiz[this.state.num].opt3} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt4, 3)}>
          <View style={{...styles.optionContainer,backgroundColor: this.state.optColor[3]}}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>D {this.state.quiz[this.state.num].opt4} </Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>this.submit()}>
          <View style={{marginTop:30,marginLeft:30,backgroundColor:'steelblue',width:'80%',minHeight:50,
          marginRight:20,borderRadius:10,alignItems:'center'}}>
            <Text style={{fontSize:24,color:'white',marginLeft:10,marginTop:10}}>Next</Text>
          </View>  
      </TouchableOpacity>

     <Modal visible={this.state.modalVisible} >


     <View style={{
  flex: 1,
  paddingTop: 0,
  backgroundColor: '#ecf0f1',
  padding: 0,
}}>
     <ImageBackground style={{
                      width: '100%',
                      marginTop:100,
                      marginLeft:0,
                      marginRight:10,
                      height:'54%',
                      position:'absolute'
                      
                    }}                                                                                            
                      source={require('./score.png')}                    
                    />
  <Text style={{fontSize:72,marginTop:350,marginLeft:'30%',fontWeight:'bold'}}>{score}/10</Text>
  <Text style={{fontSize:32,marginTop:50,marginLeft:70,fontWeight:'bold',fontStyle:'italic',color:'blue'}}
  onPress={()=>{this.setState({modalVisible:false});score=0}}
  >Start quiz again</Text>
     </View>
     
       </Modal>


  </View>
  );}
}

const styles = StyleSheet.create({
  optionContainer:{
    marginTop: 30, 
    marginLeft: 10, 
   // backgroundColor: this.state.optColor[0], 
    minHeight: 50, width: '95%', 
    marginRight: 20,
    borderRadius: 10,
    borderWidth:1
  }

})