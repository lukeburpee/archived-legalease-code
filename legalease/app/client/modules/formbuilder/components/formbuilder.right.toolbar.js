import React,{ Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

const FormBuilderRightToolbar = () => (
	<Toolbar style={{height:'8vh'}}>
		<ToolbarGroup firstChild={true}>
			Preview
		</ToolbarGroup>
	</Toolbar>
);

export default FormBuilderRightToolbar;