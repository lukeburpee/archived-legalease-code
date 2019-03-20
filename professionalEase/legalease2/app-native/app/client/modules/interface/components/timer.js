import React,{ Component } from 'react';
import { View } from 'react-native';
import { ActionButton, Badge, Icon, Avatar, COLOR } from 'react-native-material-ui';
import AnalogClock from 'react-native-analog-clock';

class ChatContact extends Component {
	startTimer(event){
		if (this.analogClock){
			this.analogClock.startRealTimeClock();		}
	}
	stopTimer(event){
		if (this.analogClock){
			this.analogClock.stopRealTimeClock();
		}
	}
	render(){
		return(
			<View style={{marginTop:10, marginBottom:15, marginLeft:10, marginRight:25}}>
				<AnalogClock 
					style={{backgroundColor:COLOR.grey800, width:100, height:100}} 
					enableShadows={true}
					onTimeChange={({hours, minutes, seconds})=> console.log('timer tick')}/>
				<ActionButton style={{container:{backgroundColor:COLOR.indigo400, width:42, height:42, bottom:-12, left:-46}}}/>
				<ActionButton style={{container:{backgroundColor:COLOR.red400, width:42, height:42, bottom:-12, right:-26}}}/>
			</View>
		);
	}
}

export default ChatContact;