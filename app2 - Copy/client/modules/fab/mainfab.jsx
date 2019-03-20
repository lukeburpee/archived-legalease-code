import React, { Component, PropTypes } from 'react';
import onsenui from 'onsenui';
import { SpeedDial, SpeedDialItem, Fab } from 'react-onsenui';
import FontIcon from 'material-ui/FontIcon';

export default class MainFab extends Component {
	render(){
		return (
			<SpeedDial
				style={sdStyle}
				direction='left'>
				<Fab
					style={fabStyle}>
					<FontIcon style={iconStyle} className="mdi mdi-magnify"/>
				</Fab>
				<SpeedDialItem style={fabStyle}></SpeedDialItem>
			</SpeedDial>
		);
	}
}

const sdStyle = {
	zIndex:1200,
	position:'absolute',
	top:80,
	bottom:'auto',
	right:120,
	left:'auto'
}
const fabStyle = {
	backgroundColor: '#394A92'
}

const iconStyle = {
	color:'white',
	verticalAlign:'middle'
}