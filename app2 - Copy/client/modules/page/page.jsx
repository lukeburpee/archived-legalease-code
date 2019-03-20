import React from 'react';
import Paper from 'material-ui/Paper';

const Page = ({secondaryOpen, children}) => (
	<Paper
		style={{
	zIndex:1,
	position:'absolute',
	top:110,
	bottom:'auto',
	left: 100,
	right: 'auto',
	width: '85%',
	marginRight:40,
	marginLeft:40,
	height: 'calc(100vh - 155px)'
}}>
		{children}
	</Paper>
);

export default Page;