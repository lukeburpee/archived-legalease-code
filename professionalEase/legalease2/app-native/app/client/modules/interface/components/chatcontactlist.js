import React,{ Component } from 'react';
import { ScrollView, Text } from 'react-native';
import ChatContact from './chatcontact';

class ChatContactList extends Component {
	getContacts(){
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
		const { contacts } = this.props;
		return(
			<ScrollView horizontal={true} style={{flex: 1, flexDirection:'row'}}>
				{(()=>{
					return this.getContacts().map((contact, i)=>(
						<ChatContact key={i}/>
					));
				})()}
			</ScrollView>
		);
	}
}

export default ChatContactList;