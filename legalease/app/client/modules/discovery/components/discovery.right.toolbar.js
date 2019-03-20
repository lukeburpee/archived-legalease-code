import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const ViewerRightToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
		</ToolbarGroup>
	</Toolbar>
);

export default ViewerRightToolbar;