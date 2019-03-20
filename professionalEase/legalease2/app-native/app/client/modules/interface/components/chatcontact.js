import React,{ Component } from 'react';
import { View } from 'react-native';
import { ActionButton, Badge, Icon, Avatar, COLOR } from 'react-native-material-ui';

class ChatContact extends Component {
	render(){
		return(
			<View style={{marginTop:10, marginBottom:15, marginLeft:10, marginRight:25}}>
				<Avatar size={100} />
				<ActionButton icon="videocam" style={{container:{backgroundColor:COLOR.indigo800, width:42, height:42, bottom:-12, left:-46}}}/>
				<ActionButton icon="chat" style={{container:{width:42, height:42, bottom:-12, right:-26}}}/>
			</View>
		);
	}
}

export default ChatContact;