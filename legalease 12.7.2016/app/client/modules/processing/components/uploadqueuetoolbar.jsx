import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FileUploadInput from './../containers/fileuploadinput.jsx';

class UploadQueueToolbar extends Component {
	render(){
		return(
		 <Toolbar style={{width:'inherit', height:50}}>
		 	<ToolbarGroup>
		 		<ToolbarTitle text="Processing Queue"/>
		 	</ToolbarGroup>
		 	</Toolbar>
		);
	}
}

export default UploadQueueToolbar;