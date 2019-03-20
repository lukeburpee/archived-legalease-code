import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class UploadResultsToolbar extends Component {
	render(){
		return(
		 <Toolbar style={{width:'inherit', height:50}}>
		 	<ToolbarGroup>
		 		<ToolbarTitle text="Processing Results"/>
		 	</ToolbarGroup>
		 	</Toolbar>
		);
	}
}

export default UploadResultsToolbar;