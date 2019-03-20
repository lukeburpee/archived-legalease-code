import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

const EditorLeftToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Sections"/>
				<Tab style={{fontSize:10}} label="Links"/>
				<Tab style={{fontSize:10}} label="Exibits"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default EditorLeftToolbar;