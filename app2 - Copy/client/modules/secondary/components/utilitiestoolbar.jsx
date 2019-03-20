import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { red200, blue200, green200, orange200, yellow200 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import TimerIcon from 'material-ui/svg-icons/image/timer';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const UtilitiesToolbar = ({onSettings, onMail, onCalendar, onTimekeeper, onChat}) => (
	<div style={{zIndex:100,position:'fixed',top:'auto',left:'auto', right:'0px', bottom:'75px'}}>
		<Paper zDepth={2} style={{background:red200, zIndex:105, width:70, height:70, position:'relative', top:'auto', bottom:'2px'}}>
			<IconButton onTouchTap={onSettings} style={buttonStyle} tooltip="settings">
				<SettingsIcon/>
			</IconButton>
		</Paper> 
		<Paper zDepth={2} style={{background:blue200, zIndex:104, width:70, height:70, position:'relative', top:'auto', bottom:'2px'}}>
			<IconButton onTouchTap={onMail} style={buttonStyle} tooltip="mail">
				<MailIcon/>
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{background:green200, width:70, height:70, zIndex:103, position:'relative', top:'auto', bottom:'3px'}}>
			<IconButton onTouchTap={onCalendar} style={buttonStyle} tooltip="calendar">
				<CalendarIcon/>
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{background:orange200, width:70, height:70, zIndex:102, position:'relative', top:'auto', bottom:'4px'}}>
			<IconButton onTouchTap={onTimekeeper} style={buttonStyle} tooltip="timekeeper">
				<TimerIcon/>
			</IconButton>
		</Paper>
		<Paper zDepth={2} style={{background:yellow200, width:70, height:70, zIndex:101, position:'relative', top:'auto', bottom:'5px'}}>
			<IconButton onTouchTap={onChat} style={buttonStyle} tooltip="chat">
				<FontIcon className="mdi mdi-message-text-outline"/>
			</IconButton>
		</Paper>
	</div>
);

export default UtilitiesToolbar;

const buttonStyle = {width:70,height:70,padding:10}