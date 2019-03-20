import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

const ResearchRightToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Info"/>
				<Tab style={{fontSize:10}} label="History"/>
				<Tab style={{fontSize:10}} label="Bookmarks"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default ResearchRightToolbar;