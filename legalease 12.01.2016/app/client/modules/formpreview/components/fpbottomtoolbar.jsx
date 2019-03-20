import React, { Component } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FamilyIcon from 'material-ui/svg-icons/file/attachment'
import DocHistoryIcon from 'material-ui/svg-icons/action/history'
import DuplicateIcon from 'material-ui/svg-icons/content/content-copy'
import ThreadIcon from 'material-ui/svg-icons/action/timeline'
import { indigo800 } from 'material-ui/styles/colors'

class FPBottomToolbar extends Component {
	render(){
		return (
			<Toolbar style={{backgroundColor:indigo800, width:'100%', position:'absolute',bottom:0, top:'auto'}}>
			<ToolbarGroup>
				<FamilyIcon color={'white'} style={{marginTop:12}}/>
				<DocHistoryIcon color={'white'} style={{marginTop:12, marginLeft:20}}/>
				<DuplicateIcon color={'white'} style={{marginTop:12, marginLeft:20}}/>
				<ThreadIcon color={'white'} style={{marginTop:12, marginLeft:20}}/>
			</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default FPBottomToolbar;