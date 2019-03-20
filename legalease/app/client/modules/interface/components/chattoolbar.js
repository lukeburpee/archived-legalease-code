import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';

const ChatToolbar = ({open}) => (
	<Toolbar style={{position:'absolute',top:0, height:'8vh', width:'inherit'}}>
		{(open)?null:
			<ToolbarGroup firstChild={true}>
				<IconButton style={{padding:2, width:'8vh', height:'8vh'}}>
					<ChatIcon/>
				</IconButton>
			</ToolbarGroup>
		}
	</Toolbar>
);

export default ChatToolbar;