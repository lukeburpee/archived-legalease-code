import React from 'react';

import {ToolbarGroup} from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RotateLeftIcon from 'material-ui/svg-icons/image/rotate-left';
import RotateRightIcon from 'material-ui/svg-icons/image/rotate-right';

const RotateTools = () => (
	<ToolbarGroup>
		<IconButton><RotateLeftIcon/></IconButton>
		<IconButton><RotateRightIcon/></IconButton>
	</ToolbarGroup>
);

export default RotateTools;