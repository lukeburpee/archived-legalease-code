import React,{ Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TimerList from './timerlist';
import {connect} from 'react-redux';

class TimersLower extends Component {
	render(){
		return(
			<ScrollView style={{flex:1, flexDirection: 'row', padding:20}}>
				<TimerList/>
			</ScrollView>
		);
	}
}

export default TimersLower;