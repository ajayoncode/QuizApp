import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Appbar } from 'react-native-paper';

function SearchScreen(){
    return (
      <Appbar.Header style={{backgroundColor:'white'}}> 
        <Text style={{fontSize:34,color:'lightpink'}}> # </Text>
        <Text style={{fontSize:34,color:'lightpink'}}>Search</Text>
      </Appbar.Header>
    )
  }