import React from 'react';
import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/content/clear';

const ViewerTabLabel = ({label}) => (
	<div>
		<div style={{display:'inline-block', width:'75%'}}>{label}</div>
		<IconButton style={{position:'absolute', top:-14, bottom:'auto', right:-14}} iconStyle={{width:15, height:15}}><CancelIcon color='white'/></IconButton>
	</div>
);

export default ViewerTabLabel;