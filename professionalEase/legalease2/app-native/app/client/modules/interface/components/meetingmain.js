import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';
import {connect} from 'react-redux';

class MeetingMain extends Component {
	render(){
		const { videoChat, videoChatCount } = this.props;
		return(
			<Card style={{container:{marginVertical:(videoChat) ? 100:0, marginHorizontal:(videoChat) ? 100:0}}}>
				<Text>Main chat</Text>
			</Card>
		);
	}
}

export default MeetingMain;