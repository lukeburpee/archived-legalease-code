import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import CloseLeftButton from './../../interface/components/closeleftbutton';
import CloseRightButton from './../../interface/components/closerightbutton';
import ViewSelect from './viewselect';
import ViewTools from './viewtools';

const ViewerMainToolbar = ({id, view}) => (
	<Toolbar style={{width:'inherit', height:'inherit'}}>
		<CloseLeftButton/>
		<ViewSelect/>
		<ViewTools view='pdf'/>
		<CloseRightButton/>
	</Toolbar>
);

export default ViewerMainToolbar;