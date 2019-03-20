import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';


const ReportsRightToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Schedule"/>
				<Tab style={{fontSize:10}} label="Contacts"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default ReportsRightToolbar;