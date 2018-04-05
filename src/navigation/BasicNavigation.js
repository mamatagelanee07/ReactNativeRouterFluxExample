import React, {Component}from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";

class BasicNavigation extends React.Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="screen1" initial={true} component = {Screen1}/>
                    <Scene key="screen2" component = {Screen2}/>
                </Scene>
            </Router>
        );
    }
}

export default BasicNavigation