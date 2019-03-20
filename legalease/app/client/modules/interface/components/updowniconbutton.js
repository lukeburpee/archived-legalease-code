import React from 'react';
import IconButton from 'material-ui/IconButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DownIcon from 'material-ui/svg-icons/navigation/arrow-downward';

const UpDownIconButton = ({direction}) => (
	<IconButton>
	{(direction === 'up')?<UpIcon/>:<DownIcon/>}
	</IconButton>
);

export default UpDownIconButton;