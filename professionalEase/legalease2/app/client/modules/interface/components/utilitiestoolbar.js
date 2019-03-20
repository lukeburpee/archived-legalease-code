import React from 'react';

import ChatBox from './chatbox';
import ChatToolbar from './chattoolbar';

import IconButton from 'material-ui/IconButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import SettingsIcon from 'material-ui/svg-icons/action/account-circle';
import { redA200, yellowA200, greenA200 } from 'material-ui/styles/colors';

import Layer from './layer';

const Utilities = ({open, chatBoxOpen, chatBoxMin, chatBoxContent,timers, files, children})=>(
	<div style={{position:'absolute', bottom:0, left:(chatBoxOpen)?'20vw':'40vw'}}>
	<Layer 
		id="chat-box" 
		position='absolute'
		zIndex={21} 
		top={'auto'} 
		bottom={0} 
		right={'auto'} 
		height={(chatBoxMin || !chatBoxOpen)? '8vh': '52vh'}
		width={(chatBoxOpen)?'25vw':'8vh'}>
		<ChatToolbar/>
		{chatBoxContent}
	</Layer>
	<Layer 
		id="utilities-mail" 
		position="absolute"
		zIndex={21} 
		top={'auto'} 
		bottom={(open)?'36vh':0} 
		left={(chatBoxOpen)?'26vw':'4vw'} 
		right={'auto'} 
		height={'8vh'}
		width={'8vh'}
		color={redA200}>
		<IconButton style={{width:'8vh', height:'8vh', padding:2}}>
			<MailIcon/>
		</IconButton>
	</Layer>
	<Layer 
		id="utilities-calendar" 
		zIndex={21} 
		position="absolute"
		top={'auto'} 
		bottom={(open)?'36vh':0} 
		left={(chatBoxOpen)?'30vw':'8vw'} 
		right={'auto'} 
		height={'8vh'}
		width={'8vh'}
		color={yellowA200}>
		<IconButton style={{height:'8vh', width:'8vh', padding:2}}>
			<CalendarIcon/>
		</IconButton>
	</Layer>
	<Layer 
		id="utilities-settings" 
		zIndex={21} 
		position="absolute"
		top={'auto'} 
		bottom={(open)?'36vh':0} 
		left={(chatBoxOpen)?'34vw':'12vw'} 
		right={'auto'} 
		height={'8vh'}
		width={'8vh'}
		color={greenA200}>
		<IconButton style={{width:'8vh', height:'8vh', padding:2}}>
			<SettingsIcon/>
		</IconButton>
	</Layer>
	{(timers)?<Layer 
		id="utilities-timers" 
		zIndex={21} 
		position="absolute"
		top={'auto'} 
		bottom={(open)?'36vh':0} 
		left={(chatBoxOpen)?'34vw':'12vw'} 
		right={'auto'} 
		height={'8vh'}
		width={'8vh'}
		color={greenA200}>
		<IconButton style={{width:'8vh', height:'8vh', padding:2}} tooltipPosition="top-center" tooltip="User">
			<SettingsIcon/>
		</IconButton>
	</Layer>:null}
	{(files)?<Layer 
		id="utilities-files" 
		zIndex={21} 
		position="absolute"
		top={'auto'} 
		bottom={(open)?'36vh':0} 
		left={(chatBoxOpen)?'34vw':'12vw'} 
		right={'auto'} 
		height={'8vh'}
		width={'8vh'}
		color={greenA200}>
		<IconButton style={{width:'8vh', height:'8vh', padding:2}} tooltipPosition="top-center" tooltip="User">
			<SettingsIcon/>
		</IconButton>
	</Layer>:null}
	</div>
);

export default Utilities;