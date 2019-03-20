import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import GavelIcon from './components/gavelicon.jsx';
import ClientsIcon from './components/clientsicon.jsx';
import CasesIcon from './components/casesicon.jsx';
import DiscoveryIcon from './components/discoveryicon.jsx';
import TemplatesIcon from './components/templatesicon.jsx';
import ReportsIcon from './components/reportsicon.jsx';
import MattersIcon from './components/mattersicon.jsx';
import UsersManIcon from './components/usersmanicon.jsx';
import { grey300 } from 'material-ui/styles/colors';

export default class Navigation extends Component {
	render (){
		return (
			<div>
			<Paper style={navStyle}
				zDepth={2}>
				<div style={{paddingTop:20}}>
					<IconButton style={buttonStyle} tooltip="clients" tooltipPosition="bottom-right" href='/clients'><ClientsIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="firms" tooltipPosition="bottom-right" href='/firms'><GavelIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="matters" tooltipPosition="bottom-right" href='/matters'><MattersIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="cases" tooltipPosition="bottom-right" href='/cases'><CasesIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="discovery" tooltipPosition="bottom-right" href='/discovery'><DiscoveryIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="templates" tooltipPosition="bottom-right"><TemplatesIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="reports" tooltipPosition="bottom-right"><ReportsIcon/></IconButton>
					<IconButton style={buttonStyle} tooltip="users" tooltipPosition="bottom-right"><UsersManIcon/></IconButton>
				</div>
			</Paper>
			</div>
		);
	}
}

const navStyle = {
	zIndex:50,
	background:{grey300},
	width:'64px',
	height: 'calc(100vh - 64px)', 
	position:'fixed',
	top:'64px',
	bottom:'auto',
	left: '0px',
	right: 'auto' 
};

const buttonStyle = {
	width:60,
	height:60,
	paddingTop:15,
	paddingBottom:15,
	paddingRight:15,
	paddingLeft:20
};
