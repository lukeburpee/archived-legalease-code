import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

const PrimaryPanel = ({secondaryOpen, children}) => (
	<Paper 
		zDepth={2} 
		style={{
			zIndex:2, 
			width: secondaryOpen ? '66.666vw' : '100vw', 
			height:'100%', 
			position:'fixed',
			top:0,
			bottom:'auto',
			left:0,
			right:'auto'
		}}>
		{children}
	</Paper>
);

export default PrimaryPanel;