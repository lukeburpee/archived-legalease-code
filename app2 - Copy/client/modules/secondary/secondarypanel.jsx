import React from 'react';
import Paper from 'material-ui/Paper';
import { grey600 } from 'material-ui/styles/colors';
import Settings from './../settings';
import Mail from './../mail';
import Calendar from './../calendar';
import TimeKeeper from './../timekeeper';
import Chat from './../chat';

const SecondaryPanel = (type) => (
	<Paper style={secondaryStyle}>
		{(() => {
				switch(type){
					case (type === 'settings'):
						return <Settings/>
					case (type === 'mail'):
						return <Mail/>
					case (type === 'calendar'):
						return <Calendar/>
					case (type === 'timekeeper'):
						return <TimeKeeper/>
					case (type === 'chat'):
						return <Chat/>
					default:
						return null
				}
			})()
		}
	</Paper>
);

export default SecondaryPanel;

const secondaryStyle = {
	zIndex:1, 
	backgroundColor:grey600,
	width:'calc(33.333vw)', 
	height:'100%', 
	position:'fixed',
	top:0,
	bottom:'auto',
	left:'auto',
	right:0
}