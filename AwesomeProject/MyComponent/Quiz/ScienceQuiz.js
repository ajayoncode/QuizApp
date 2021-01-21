
import React from 'react';
import { Text, View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, TextInput, Button, Card, List } from 'react-native-paper';


var score = 0;
export default class ScienceQuiz extends React.Component {

  state = {
    quiz: [{ quesNo: 1, question: 'Which is a tidal wave ?', opt1: 'Flood', opt2: 'Tornado', opt3: 'Tsunami', opt4: 'Cyclone', answer: 'Tsunami' },
    { quesNo: 2, question: 'Which of the following is used in pencils ?', opt1: 'Zinc', opt2: 'Iron', opt3: 'Copper', opt4: 'Graphite', answer: 'Graphite' },
    { quesNo: 3, question: 'Which of the following vitamin is most important for healthy eye ?', opt1: 'Vitamin D', opt2: 'Vitamin C', opt3: 'Vitamin B', opt4: 'Vitamin A', answer: 'Vitamin A' },
    { quesNo: 4, question: 'What is produced by bacterial fermentation of milk ?', opt1: 'Yogurt', opt2: 'Butter', opt3: 'Cheese', opt4: 'Cream', answer: 'Yogurt' },
    { quesNo: 5, question: 'Non-stick cooking utensils are coated with ?', opt1: 'Vinyl', opt2: 'PVC', opt3: 'Polystyrene', opt4: 'Teflon', answer: 'Teflon' },
    { quesNo: 6, question: 'Balloons are filled with which gas ?', opt1: 'Nitrogen', opt2: 'Hydrogen', opt3: 'Helium', opt4: 'Ozone', answer: 'Helium' },
    { quesNo: 7, question: 'Which is the biggest planet in our solor system ?', opt1: 'Mercury', opt2: 'Jupiter', opt3: 'Venus', opt4: 'Mars', answer: 'Jupiter' },
    { quesNo: 8, question: 'What is the name of the largest ocean on earth ?', opt1: 'Atlantic Ocean', opt2: 'Pacific Ocean', opt3: 'Indian Ocean', opt4: 'Arctic Ocean', answer: 'Pacific Ocean' },
    { quesNo: 9, question: 'the molten rock that comes from a volcano after it has erupted is known as what ?', opt1: 'Aluminium rock', opt2: 'Rock salt', opt3: 'Lava', opt4: 'Metal rock', answer: 'Lava' },
    { quesNo: 10, question: 'Which of the following is mixed with ice to melt the ice of road ?', opt1: 'Salt', opt2: 'Chlorine', opt3: 'Sand', opt4: 'Water', answer: 'Salt' }],
    num: 0,
    optColor: ['#7FD7EE', '#7FD7EE', '#7FD7EE', '#7FD7EE'],
    modalVisible: false
  }

  submit() {

    this.setState({ num: this.state.num + 1 })

    console.log(this.state.num + "hello" + score)

    this.setState(
      prevState => {
        let {
          optColor,
          num
        } = prevState;


        if (this.state.num > 8) { num = 0, this.setState({ modalVisible: true }) }

        optColor[0] = '#7FD7EE'
        optColor[1] = '#7FD7EE'
        optColor[2] = '#7FD7EE'
        optColor[3] = '#7FD7EE'

        return {
          optColor: optColor,
          num: num
        };
      },

    );

  }

  onSelectOpt(quesNumber, questAnswer, optSelected) {

    if (this.state.num < 10) {

      this.setState(
        prevState => {
          let {
            optColor,
          } = prevState;

          if (this.state.quiz[quesNumber].answer == questAnswer) {
            //alert('Right Answer, WOW!!')
            optColor[optSelected] = 'limegreen'
            score++;
          }
          else {
            // alert('try again')
            optColor[optSelected] = 'red'

            var i = 0;
            if (this.state.quiz[quesNumber].answer == this.state.quiz[quesNumber].opt1)
              optColor[i] = 'limegreen'
            i++;

            if (this.state.quiz[quesNumber].answer == this.state.quiz[quesNumber].opt2)
              optColor[i] = 'limegreen'
            i++;

            if (this.state.quiz[quesNumber].answer == this.state.quiz[quesNumber].opt3)
              optColor[i] = 'limegreen'
            i++;
            if (this.state.quiz[quesNumber].answer == this.state.quiz[quesNumber].opt4)
              optColor[i] = 'limegreen'
            i++;
          }

          return {
            optColor: optColor,
          };
        },

      );



    }
    else
      alert('Your Score is ' + score)

  }



  render() {
    return (
      <View>

        <Appbar.Header style={{ backgroundColor: 'steelblue' }}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image style={{ height: 35, width: 35, marginLeft: 10 }} source={require('./icon.png')} />
          </TouchableOpacity>
          <Appbar.Content title="Science Quiz" onPress={() => this.props.navigation.openDrawer()} />

        </Appbar.Header>

        <ImageBackground style={{
          width: '100%',
          marginTop: 50,
          marginLeft: 0,
          marginRight: 10,
          height: '110%',
          position: 'absolute'
        }}
          source={require('./quiz_background.jpg')}
        />
        <View style={{
          marginTop: 30, marginLeft: 10,
          backgroundColor: '#e6aa50', minHeight: 100,
          width: '95%', marginRight: 20,
          borderRadius: 10,
          flexDirection: 'row',
        }}>

          <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>Q.{this.state.quiz[this.state.num].quesNo} {this.state.quiz[this.state.num].question}</Text>
          <Text style={{ fontSize: 18, color: 'white', marginTop: 10, marginLeft: '15%' }}>Score:{score}/5</Text>

        </View>


        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt1, 0)}>
          <View style={{ marginTop: 30, marginLeft: 10, backgroundColor: this.state.optColor[0], minHeight: 50, width: '95%', marginRight: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>A {this.state.quiz[this.state.num].opt1} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt2, 1)}>
          <View style={{ marginTop: 30, marginLeft: 10, backgroundColor: this.state.optColor[1], minHeight: 50, width: '95%', marginRight: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>B {this.state.quiz[this.state.num].opt2} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt3, 2)}>
          <View style={{ marginTop: 30, marginLeft: 10, backgroundColor: this.state.optColor[2], minHeight: 50, width: '95%', marginRight: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>C {this.state.quiz[this.state.num].opt3} </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onSelectOpt(this.state.num, this.state.quiz[this.state.num].opt4, 3)}>
          <View style={{ marginTop: 30, marginLeft: 10, backgroundColor: this.state.optColor[3], minHeight: 50, width: '95%', marginRight: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>D {this.state.quiz[this.state.num].opt4} </Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.submit()}>
          <View style={{
            marginTop: 30, marginLeft: 30, backgroundColor: 'steelblue', width: '80%', minHeight: 50,
            marginRight: 20, borderRadius: 10, alignItems: 'center'
          }}>
            <Text style={{ fontSize: 24, color: 'white', marginLeft: 10, marginTop: 10 }}>Next</Text>
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
              marginTop: 100,
              marginLeft: 0,
              marginRight: 10,
              height: '54%',
              position: 'absolute'

            }}
              source={require('./score.png')}
            />
            <Text style={{ fontSize: 72, marginTop: 350, marginLeft: '30%', fontWeight: 'bold' }}>{score}/10</Text>
            <Text style={{ fontSize: 32, marginTop: 50, marginLeft: 70, fontWeight: 'bold', fontStyle: 'italic', color: 'blue' }}
              onPress={() => { this.setState({ modalVisible: false }); score = 0 }}
            >Start quiz again</Text>
          </View>

        </Modal>


      </View>
    );
  }
}