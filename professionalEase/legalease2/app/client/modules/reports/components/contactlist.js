import React from 'react';
import _ from 'lodash';
import {List,ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';

const ContactList = ({selected, contacts}) => (
	<List>
		<Subheader>Contacts</Subheader>
		{
			(()=>contacts.map((contact, i)=>(
				<ListItem key={i} leftCheckbox={<Checkbox checked={contact.selected}/>} rightAvatar={<Avatar src={contact.image}/>}/>
			)))()
		}
	</List>
);

export default ContactList;