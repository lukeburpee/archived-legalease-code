import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';

const MainLogo = () => (
	<Paper 
		zDepth={2} 
		style={backgroundStyle}>
		<Paper zDepth={2} style={logoStyle}>
			<object style={picStyle} type="image/svg+xml" data="/icons/logo.svg" />
		</Paper>
	</Paper>
);

const TabletLogo = () => (
	<Paper 
		zDepth={2} 
		style={tabletBackgroundStyle}>
		<Paper zDepth={2} style={tabletLogoStyle}>
			<object style={tabletPicStyle} type="image/svg+xml" data="/icons/favicon.svg" />
		</Paper>
	</Paper>
);

const backgroundStyle = {
	zIndex: 9998,
	height: '70px',
	width: '210px',
	position: 'fixed',
	top: '10px',
	bottom: 'auto',
	left: '20px',
	right: 'auto'
}


const logoStyle = {
	height: '60px',
	width: '200px',
	position: 'relative',
	top: '5px',
	bottom: 'auto',
	right: 'auto',
	left: '5px'
}

const picStyle = {
	height: '60px',
	width: '200px'
}

const tabletBackgroundStyle = {
	zIndex: 51,
	height: '70px',
	width: '70px',
	position: 'fixed',
	top: '5px',
	bottom: 'auto',
	left: '10px',
	right: 'auto'
}

const tabletLogoStyle = {
	height: '60px',
	width: '60px',
	position: 'relative',
	top: '5px',
	bottom: 'auto',
	right: 'auto',
	left: '5px'
}

const tabletPicStyle = {
	height: '48px',
	width: '48px'
}

export {
	MainLogo,
	TabletLogo
}