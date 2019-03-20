import React, { Component } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import { indigo900 } from 'material-ui/styles/colors'
import FormNavigation from './formnavigation.jsx'


class FPTopToolbar extends Component {
	render(){
		return (
			<Toolbar style={{
				backgroundColor:indigo900, 
				width:'100%', 
				height:'70px', 
				position:'absolute',
				top:0, 
				bottom:'auto',
				padding:5
			}}>
				<ToolbarGroup firstChild={true}>	
				</ToolbarGroup>
				<ToolbarGroup style={{marginRight:25}} lastChild={true}>
					<FormNavigation/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default FPTopToolbar;