import React from 'react';

import {ToolbarGroup} from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ZoomInIcon from 'material-ui/svg-icons/action/zoom-in';
import ZoomOutIcon from 'material-ui/svg-icons/action/zoom-out';

const ZoomTools = () => (
	<ToolbarGroup>
		<IconButton><ZoomInIcon/></IconButton>
		<IconButton><ZoomOutIcon/></IconButton>
	</ToolbarGroup>
);

export default ZoomTools;