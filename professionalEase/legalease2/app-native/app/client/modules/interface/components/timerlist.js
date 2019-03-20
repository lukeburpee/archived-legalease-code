import React,{ Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Timer from './timer';

class TimerList extends Component {
	getTimers(){
		return [
			{name:'Contact 1'},
			{name:'Contact 2'},
			{name:'Contact 3'},
			{name:'Contact 4'},
			{name:'Contact 5'},
			{name:'Contact 6'},
			{name:'Contact 7'},
			{name:'Contact 8'},
			{name:'Contact 9'},
			{name:'Contact 10'}
		];
	}
	render(){
		return(
			<ScrollView horizontal={true} style={{flex: 1, flexDirection:'row'}}>
				{(()=>{
					return this.getTimers().map((contact, i)=>(
						<Timer key={i}/>
					));
				})()}
			</ScrollView>
		);
	}
}

export default TimerList;