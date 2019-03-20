import React,{ Component, PropTypes } from 'react';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';

class CollectedFileToolbarImpl extends Component {
	render(){
		return(
			<Toolbar style={{width:'inherit', height:'50px'}}>
				<ToolbarGroup>
					<ToolbarTitle text="Collected Files"/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default CollectedFileToolbarImpl;