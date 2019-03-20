import React from 'react';
import List from 'material-ui/List';
import Contact from './contact.jsx';

const ContactList = ({contacts}) => (
	<List
		style={{height:390, overflowY:'scroll'}}>
	{contacts.map(contact => (
		<Contact
			key={contact.id}
			label={contact.name}/>
	))}
	</List>
);

export default ContactList;