import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Fab from './../../fab';

const Primary = ({secondaryOpen, folderViewOpen, formBuilderOpen, children}) => (
	<Paper 
		zDepth={3} 
		style={{
			zIndex:2, 
			width: secondaryOpen || formBuilderOpen ? '60vw' : '100vw', 
			height:'100%', 
			position:'fixed',
			top:0,
			bottom:'auto',
			left: formBuilderOpen ? '20vw' : 0,
			right:'auto'
		}}>
		<Fab/>
		<Paper
			style={{
				zIndex:500,
				width:folderViewOpen || formBuilderOpen ? '55.2vw' : '92vw',
				height:'85vh',
				position:'absolute',
				top:'110px',
				bottom:'auto',
				right:'35px',
				left:'auto'
			}}>
		{children}
		</Paper>
	</Paper>
);

export default Primary;