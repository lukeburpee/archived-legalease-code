import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

const UtilityButton = ({index, color, active, click, tooltip, icon}) => (
	<Paper zDepth={2} style={{
		background:color, 
		zIndex:105, 
		width: 70, 
		height:70, 
		position:'relative', 
		top:'auto', 
		bottom:'2px',
		left:'auto',
		right:(active) ? 'calc(33.333vw)': 'auto',
		}}>
			<IconButton onTouchTap={click} style={buttonStyle} tooltip={tooltip}>
				{(active) ? <CloseIcon/> : icon }
			</IconButton>
		</Paper> 
);

export default UtilityButton;