import React, {Component}from 'react';
import {Button , StyleSheet, View, Text} from 'react-native';
import styles from "../config/styles";
import {Actions} from 'react-native-router-flux';

class Screen1 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello Screen 1</Text>
                <Button 
                    title = "Go to Screen 2"
                    onPress = {() => {
                        Actions.screen2();
                      }}/>
            </View>
        );
    }
}

export default Screen1