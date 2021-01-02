import React from 'react';
import { Text, StyleSheet} from 'react-native';

const ComoponentsScreen = () => {
return <Text style={StyleSheet.textStyle}>ComoponentsScreen it is.</Text>;
};

const style = StyleSheet.create(
    {
        textStyle: {
            fontSize:30
        }
    }
);

export default ComoponentsScreen;