import React from 'react';
import { Text, View,Button} from 'react-native';

    const FetchLocation = props => {
        return(
            <Button title="Get Location" onPress={props.ongetLocation} />
        );
    }
    export default FetchLocation;