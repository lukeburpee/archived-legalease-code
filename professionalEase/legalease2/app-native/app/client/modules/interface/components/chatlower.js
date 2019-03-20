import React,{ Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ChatContactList from './chatcontactlist';
import {connect} from 'react-redux';

class ChatLower extends Component {
	render(){
		return(
			<ScrollView style={{flex:1, flexDirection: 'row', padding:10, height:150}}>
				<ChatContactList/>
			</ScrollView>
		);
	}
}

export default ChatLower;