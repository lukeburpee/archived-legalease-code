import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

const ViewerLeftToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Thumbnails"/>
				<Tab style={{fontSize:10}} label="Highlights"/>
				<Tab style={{fontSize:10}} label="Markup"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default ViewerLeftToolbar;