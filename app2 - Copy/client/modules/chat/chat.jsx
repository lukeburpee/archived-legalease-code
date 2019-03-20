import React from 'react';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { indigo900, grey100 } from 'material-ui/styles/colors';
import ContactList from './contactlist.jsx';

const Chat = () => (
	<div style={chatStyle}>
		<Paper style={videoStyle}>
			<Paper style={{height:350, width:'inherit', position:'relative', top:10, bottom:'auto', marginLeft:10, marginRight:10}}></Paper>
		</Paper>
		<Paper style={contactStyle}>
			<Toolbar style={{backgroundColor:indigo900}}>
				<ToolbarGroup>
				</ToolbarGroup>
			</Toolbar>
			<ContactList contacts={contacts}/>
		</Paper>
	</div>
);

export default Chat;

const chatStyle = { 
	position:'relative', 
	top:60, 
	bottom:'auto' 
};
const videoStyle = {
	backgroundColor:grey100, 
	width:'inherit',
	height:400,
	position:'relative',
	top:25, 
	bottom:'auto', 
	marginLeft:25, 
	marginRight:25 
};
const contactStyle = {
	backgroundColor:grey100,
	position: 'relative', 
	top: 50, 
	bottom:'auto', 
	marginLeft:25, 
	marginRight:90,
	marginBottom:20
};

const contacts = [
	{
		id: '1',
		name: 'contact 1'
	},{
		id: '2',
		name: 'contact 2'
	},{
		id: '3',
		name: 'contact 3',
	},{
		id: '4',
		name: 'contact 4',
	},{
		id: '5',
		name: 'contact 5'
	},{
		id: '6',
		name: 'contact 6'
	},{
		id: '7',
		name: 'contact 7'
	},{
		id: '8',
		name: 'contact 8',
	},{
		id: '9',
		name: 'contact 9',
	},{
		id: '10',
		name: 'contact 10'
	}
]