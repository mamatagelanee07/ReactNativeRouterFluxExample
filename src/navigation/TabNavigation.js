import React, {Component}from 'react';
import {Text}from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class TabNavigation extends React.Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                <Scene key="tab" tabs={true} hideNavBar type={ActionConst.REPLACE}>
                    <Scene key="screen1" title ="screen1" icon={TabIcon} initial={true} component = {Screen1}/>
                    <Scene key="screen2" title ="screen2" icon={TabIcon} component = {Screen2}/>
                </Scene>
                </Scene>
            </Router>
        );
    }
}

export default TabNavigation