import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { red200, blue200, green200, orange200, yellow200 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import TimerIcon from 'material-ui/svg-icons/image/timer';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import CloseIcon from 'material-ui/svg-icons/content/clear';

const UtilitiesToolbar = ({openSettings, openMail, openCalendar, openTimekeeper, openChat, active}) => (
	<div style={{zIndex:100,position:'fixed',top:'auto',left:'auto', right:'0px', bottom:'75px'}}>
		<Paper zDepth={2} style={{
			background:red200, 
			zIndex:105, 
			width: 70, 
			height:70, 
			position:'relative', 
			top:'auto', 
			bottom:'1px',
			left:'auto',
			right:(active === 'settings') ? 'calc(33.333vw)': 'auto',
		}}>
			<IconButton onTouchTap={openSettings} style={buttonStyle} tooltip="settings">
				{(active === 'settings') ? <CloseIcon/> : <SettingsIcon/>}
			</IconButton>
		</Paper> 
		<Paper zDepth={2} style={{
			background:blue200, 
			zIndex:104, 
			width:70, 
			height:70, 
			position:'relative', 
			top:'auto', 
			bottom:'2px',
			left: 'auto',
			right:(active === 'mail') ? 'calc(33.333vw)': 'auto'
		}}>
			<IconButton onTouchTap={openMail} style={buttonStyle} tooltip="mail">
				{(active === 'mail') ? <CloseIcon/> : <MailIcon/>}
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{
			background:green200, 
			width:70, 
			height:70, 
			zIndex:103, 
			position:'relative', 
			top:'auto', 
			bottom:'3px',
			left:'auto',
			right:(active === 'calendar') ? 'calc(33.333vw)': 'auto'
		}}>
			<IconButton onTouchTap={openCalendar} style={buttonStyle} tooltip="calendar">
				{(active === 'calendar') ? <CloseIcon/> : <CalendarIcon/>}
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{
			background:orange200, 
			width:70, 
			height:70, 
			zIndex:102, 
			position:'relative', 
			top:'auto', 
			bottom:'4px',
			left:'auto',
			right:(active === 'timekeeper') ? 'calc(33.333vw)': 'auto'
		}}>
			<IconButton onTouchTap={openTimekeeper} style={buttonStyle} tooltip="timekeeper">
				{(active === 'timekeeper') ? <CloseIcon/> : <TimerIcon/>}
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{
			background:yellow200, 
			width:70, 
			height:70, 
			zIndex:101, 
			position:'relative', 
			top:'auto', 
			bottom:'5px',
			left:'auto',
			right:(active === 'chat') ? 'calc(33.333vw)': 'auto'
		}}>
			<IconButton onTouchTap={openChat} style={buttonStyle} tooltip="chat">
				{(active === 'chat') ? <CloseIcon/> : <FontIcon className="mdi mdi-message-text-outline"/>}
			</IconButton>
		</Paper>
	</div>
);

export default UtilitiesToolbar;

const buttonStyle = {
	width:70,
	height:70,
	padding:10
}