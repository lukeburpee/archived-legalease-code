import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

const EditorRightToolbar = () => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<ToolbarGroup firstChild={true} style={{width:'inherit'}}>
			<Tabs style={{width:'inherit'}}>
				<Tab style={{fontSize:10}} label="Comments"/>
				<Tab style={{fontSize:10}} label="History"/>
			</Tabs>
		</ToolbarGroup>
	</Toolbar>
);

export default EditorRightToolbar;