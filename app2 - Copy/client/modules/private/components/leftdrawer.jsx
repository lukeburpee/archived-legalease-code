import React from 'react';
import Paper from 'material-ui/Paper';
import { FormBuilderLeft } from './../../formbuilder';

const LeftDrawer = (type) => (
	<Paper
		style={leftDrawerStyle}>
		{(()=>{
			switch(type){
				case (type === 'formbuilder'):
					return <div>This is the left formbuilder section</div>
				default:
					return null;
			}
		})()}
	</Paper>
);

export default LeftDrawer;

const leftDrawerStyle = {
	zIndex:1,
	position:'fixed',
	top:64,
	bottom:'auto',
	left:64,
	right:'auto',
	height:'100vh',
	width:'30vw'
}