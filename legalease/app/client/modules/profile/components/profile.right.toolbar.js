import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const ProfileRightToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup lastChild={true}>
			Profile right content
		</ToolbarGroup>
	</Toolbar>
);

export default ProfileRightToolbar;