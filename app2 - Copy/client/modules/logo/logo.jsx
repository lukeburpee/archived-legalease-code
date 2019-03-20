import React from 'react';
import Paper from 'material-ui/Paper';

const Logo = () => (
	<Paper 
		zDepth={2} 
		style={backgroundStyle}>
		<Paper zDepth={2} style={logoStyle}>
			<img style={picStyle} src="/legalease.png"/>
		</Paper>
	</Paper>
);

const backgroundStyle = {
	zIndex: 9998,
	height: '70px',
	width: '190px',
	position: 'fixed',
	top: '10px',
	bottom: 'auto',
	left: '10px',
	right: 'auto'
}

const logoStyle = {
	height: '60px',
	width: '180px',
	position: 'relative',
	top: '5px',
	bottom: 'auto',
	right: 'auto',
	left: '5px'
}

const picStyle = {
	height: '60px',
	width: '180px'
}

export default Logo;