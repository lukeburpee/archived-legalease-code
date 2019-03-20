import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import Calendar from 'react-native-calendar-picker';
import {connect} from 'react-redux';

class CalendarMain extends Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date()
		}
		this.onDateChange = this.onDateChange.bind(this);
	}
	onDateChange(date){
		this.setState({date:date});
	}
	render(){
		return(
			<View>
				<Calendar 
					screenWidth={150}
					selectedDate={this.state.date}
					onDateChange={this.onDateChange}/>
			</View>
		);
	}
}

export default CalendarMain;