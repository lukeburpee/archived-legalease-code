import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const ProfileLeftToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true}>
			Settings
		</ToolbarGroup>
	</Toolbar>
);

export default ProfileLeftToolbar;