import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { ArchiveIcon, SavedSearchIcon } from './../icons';

export default class ExplorerFooter extends Component {
	render(){
		return(
			<Toolbar style={{width:'inherit', height:46, position:'absolute', top:'auto', bottom:0}}>
				<ToolbarGroup firstChild={true}>
					<IconButton>
						<FontIcon className="mdi mdi-format-indent-decrease"/>
					</IconButton>
				</ToolbarGroup>
				<ToolbarGroup lastChild={true}>
					<IconButton>
						<ArchiveIcon/>
					</IconButton>
					<IconButton>
						<SavedSearchIcon/>
					</IconButton>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}