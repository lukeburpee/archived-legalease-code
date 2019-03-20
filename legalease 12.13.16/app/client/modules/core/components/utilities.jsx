import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { red200, blue200, green200, orange200, yellow200 } from 'material-ui/styles/colors';

import SettingsIcon from 'material-ui/svg-icons/action/settings';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import TimerIcon from 'material-ui/svg-icons/image/timer';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import CloseIcon from 'material-ui/svg-icons/content/clear';
import ChatIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';

import core from './../../core/actions'

class UtilitiesImpl extends Component {
	constructor(props){
		super(props);
	}
	handle(item, width){
		const { dispatch, active, viewerOpen } = this.props;
		if (active === item){
			dispatch(core.rightTroughClose());
			if (viewerOpen) {
				dispatch(core.rightTroughOpen('FORM', 500));
			}
		} else if (active === null){
			dispatch(core.rightTroughOpen(item, width));
		} else {
			dispatch(core.setRightTroughType(item, width));
		}
	}
	render(){
		return(
			<div style={{display:(this.props.scrolling) ? 'none' : 'initial'}}>
				<Paper zDepth={2} style={{
					backgroundColor:red200, 
					zIndex:105, 
					width: 50, 
					height:50, 
					position: (this.props.active === 'SETTINGS') ? 'absolute' : 'fixed', 
					top:'auto', 
					bottom:'300px',
					left:'auto',
					right:'0px',
				}}>
					<IconButton onTouchTap={() => this.handle('SETTINGS', 400)} style={buttonStyle} tooltip="settings">
						{(this.props.active === 'SETTINGS') ? <CloseIcon/> : <SettingsIcon/>}
					</IconButton>
				</Paper> 
			<Paper zDepth={2} style={{
				backgroundColor:blue200, 
				zIndex:104, 
				width:50, 
				height:50, 
				position: (this.props.active === "MAIL") ? 'absolute' : 'fixed', 
				top:'auto', 
				bottom:'251px',
				left: 'auto',
				right:'0px'
			}}>
				<IconButton onTouchTap={() => this.handle('MAIL', 500)} style={buttonStyle} tooltip="mail">
					{(this.props.active === 'MAIL') ? <CloseIcon/> : <MailIcon/>}
				</IconButton>
			</Paper>
			<Paper zDepth={2} style={{
				backgroundColor:green200, 
				width:50, 
				height:50, 
				zIndex:103, 
				position: (this.props.active === 'CALENDAR') ? 'absolute' : 'fixed', 
				top:'auto', 
				bottom:'202px',
				left:'auto',
				right:'0px'
			}}>
				<IconButton onTouchTap={() => this.handle('CALENDAR', 600)} style={buttonStyle} tooltip="calendar">
					{(this.props.active === 'CALENDAR') ? <CloseIcon/> : <CalendarIcon/>}
				</IconButton>
			</Paper>
			<Paper zDepth={2} style={{
				backgroundColor:orange200, 
				width:50, 
				height:50, 
				zIndex:102, 
				position: (this.props.active === 'TIMEKEEPER') ? 'absolute' : 'fixed', 
				top:'auto', 
				bottom:'153px',
				left:'auto',
				right:'0px',
			}}>
				<IconButton onTouchTap={() => this.handle('TIMEKEEPER', 300)} style={buttonStyle} tooltip="timekeeper">
					{(this.props.active === 'TIMEKEEPER') ? <CloseIcon/> : <TimerIcon/>}
				</IconButton>
			</Paper>
			<Paper zDepth={2} style={{
				backgroundColor:yellow200, 
				width:50, 
				height:50, 
				zIndex:101, 
				position: (this.props.active === 'CHAT') ? 'absolute' : 'fixed', 
				top:'auto', 
				bottom:'104px',
				left:'auto',
				right:'0px',
			}}>
				<IconButton onTouchTap={() => this.handle('CHAT', 400)} style={buttonStyle} tooltip="chat">
					{(this.props.active === 'CHAT') ? <CloseIcon/> : <ChatIcon/>}
				</IconButton>
			</Paper>
		</div>
	);
}}

export default UtilitiesImpl;

const buttonStyle = {
	width:70,
	height:70,
	right:10,
	bottom:10
}