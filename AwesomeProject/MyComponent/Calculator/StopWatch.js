//1457-151220 # timer working well
//1858-181220# minutes issue resolved, working perfect

import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

 
export default class StopWatch extends Component {
sec=0
min=0
hrs=0
  
  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      hours_counter:'00',
      startDisable: false
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  myTimer(){
    
    this.sec=Number(this.state.seconds_Counter)+1

    if(this.sec>59)
    {
      this.sec=0
      this.min=Number(this.state.minutes_Counter)+1
    }

    if(this.min>59)
    {
      this.min=0
      this.hrs=Number(this.state.hours_counter)+1
    }

    this.sec=this.sec.toString()
    this.min=this.min.toString()
    this.hrs=this.hrs.toString()

      if(this.sec.length<2)
      this.sec='0'+this.sec

      if(this.min.length<2)
      this.min='0'+this.min

      if(this.hrs.length<2)
      this.hrs='0'+this.hrs

    this.setState({
        seconds_Counter:this.sec,
        minutes_Counter:this.min,
        hours_counter:this.hrs
    })
  }
 
  onButtonStart = () => {
 
    let timer = setInterval(() => {this.myTimer()}, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }
 
 
  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
  }
 
 
  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  }
 
  render() {
 
    return (
      <View style={styles.MainContainer}>
 
 <Text style={styles.counterText}>{this.state.hours_counter} : {this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>

<View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity
        onPress={this.onButtonStart}
        activeOpacity={0.6}
        style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]} 
        disabled={this.state.startDisable} >

        <Text style={styles.buttonText}>START</Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={this.onButtonStop}
        activeOpacity={0.6}
        style={[styles.button, { backgroundColor:  '#FF6F00'}]} >

        <Text style={styles.buttonText}>STOP</Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={this.onButtonClear}
        activeOpacity={0.6}
        style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]} 
        disabled={this.state.startDisable} >

        <Text style={styles.buttonText}> CLEAR </Text>

      </TouchableOpacity>
</View>
    </View>

    );
  }
}
 
 
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '30%',
    height:40,
    paddingTop:8,
    paddingBottom:8,
    borderRadius:7,
    margin: 10,
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  },
  counterText:{
 
    fontSize: 28,
    color: '#000'
  }
});