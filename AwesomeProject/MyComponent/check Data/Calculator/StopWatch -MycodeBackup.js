import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
var start1;
var start2;
export default class StopWatch extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      mystopwatch:'00:00:00',
      startDisable: false
    }
  }
 
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  myTimer() {
    var d = new Date();
    var t = d.getTime();

    t=this.msToTime(t-start2)
   this.setState({mystopwatch:t})
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

  onButtonStart = () => {
    if(this.state.mystopwatch=='00:00:00')
   { start1 = new Date();
     start2 = start1.getTime();}
    
   

    let timer = setInterval(() => 
    {
      this.myTimer()
    }, 1000);

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
      mystopwatch:'00:00:00'
    });
  }
 
  render() {
 
    return (
      <View style={styles.MainContainer}>
 
        <Text style={styles.counterText}>{this.state.mystopwatch}</Text>
 
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