import React, { Component } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import DocFormSaveButtons from './docformsavebuttons.jsx'
import { indigo800 } from 'material-ui/styles/colors'

import FormSelect from './formselect.jsx'

class SecondaryFPTopToolbar extends Component {
	render(){
		return (
			<Toolbar style={{backgroundColor:indigo800, position:'absolute', top:'70px', bottom:'auto', width:'100%', height:'48px'}}>
				<DocFormSaveButtons/>
				<ToolbarGroup lastChild={true}>
					<FormSelect/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default SecondaryFPTopToolbar;