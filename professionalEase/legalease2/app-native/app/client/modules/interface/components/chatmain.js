import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { Toolbar, Card, COLOR } from 'react-native-material-ui';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux';

class ChatMainImpl extends Component {
	render(){
		const { videoChat, videoChatCount, children } = this.props;
		return(
			<View style={{alignItems:'flex-start'}}>
				<Card style={{container:{width:225, height:415, top:-4, left:-5}}}>
					<Toolbar style={{container:{height:36}}}/>
					<View style={{position:'relative', top:340}}>
					<ActionButton buttonColor={COLOR.indigo800} radius={60}>
						<ActionButton.Item buttonColor={COLOR.indigo800}><Icon name="star"/></ActionButton.Item>
					</ActionButton>
					</View>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	videoChat: state.interface.videoChat,
	videoChatCount: state.interface.videoChatCount
});

const ChatMain = connect(mapStateToProps)(ChatMainImpl);

export default ChatMain;