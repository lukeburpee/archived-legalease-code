import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { MatterSelect } from './matterselect';
import { SearchView } from './searchview';
import { ExplorerFooter } from './footer';

export default class FolderView extends Component {
	render(){
		return (
			<Paper
				style={{
					zIndex:10,
					height:'calc(100vh - 64px)',
					width: '365px',
					position:'fixed',
					top:'64px',
					left:'0px',
					bottom:'auto',
					right:'auto'
				}}
				zDepth={2}>
				<div style={{paddingLeft:'64px'}}>
					<MatterSelect/>
					<SearchView/>
				</div>
				<ExplorerFooter/>
			</Paper>
		);
	}
}