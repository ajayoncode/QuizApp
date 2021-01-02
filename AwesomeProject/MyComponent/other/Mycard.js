import React from 'react';

import {
Text,
View,
TextInput,
ImageBackground,
StyleSheet
  } from 'react-native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar,Card, Title, Paragraph} from 'react-native-paper';

export default function Mycard() {
  return (
    <View>
    <Card>
      <View style={{flexDirection:'row', margin:10}}>
            <View style={{backgroundColor:'lightpink',height:80,width:80,borderRadius:40}} /> 
         <View>
            <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
          </View>
      </View>
    </Card>
  </View>
  )   
}
