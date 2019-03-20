import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import VideoIcon from 'material-ui/svg-icons/av/videocam';
import ChatIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';
import MenuIcon from 'material-ui/svg-icons/navigation/more-vert';


const Contact = ({label, open}) => (
	<ListItem
		leftAvatar={<Avatar/>}
		primaryText={label}
		rightIconButton={ContactMenu()}
		/>
);

const ContactMenu = () => (
	<IconMenu iconButtonElement={ContactMenuButton}>
		<MenuItem
			leftIcon={<ChatIcon/>}
			primaryText="Chat"
		/>
		<MenuItem
			leftIcon={<VideoIcon/>}
			primaryText="Video"
		/>
	</IconMenu>
);

const ContactMenuButton = (
	<IconButton
		touch={true}
		tooltip="options"
		tooltipPosition="bottom-left"
		>
		<MenuIcon/>
	</IconButton>
);

export default Contact;