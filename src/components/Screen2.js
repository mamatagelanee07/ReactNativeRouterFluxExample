import React, {Component}from 'react';
import {Button, View, Text} from 'react-native';
import styles from "../config/styles";
import {Actions} from 'react-native-router-flux';

class Screen2 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}> Hello Screen 2</Text>
                <Button 
                    title = "Go to Screen 1"
                    onPress = {() => {
                        Actions.screen1();
                      }}/>
        </View>
        );
    }
}

export default Screen2