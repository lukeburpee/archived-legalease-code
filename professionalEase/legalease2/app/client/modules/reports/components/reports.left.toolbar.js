import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

const ReportsLeftToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Stats"/>
				<Tab style={{fontSize:10}} label="Charts"/>
				<Tab style={{fontSize:10}} label="Reports"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default ReportsLeftToolbar;