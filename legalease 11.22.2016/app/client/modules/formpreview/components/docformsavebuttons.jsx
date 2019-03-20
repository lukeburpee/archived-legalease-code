import React, { Component } from 'react'
import { ToolbarGroup } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import { indigo500 } from 'material-ui/styles/colors'

class DocFormSaveButtons extends Component {
	render(){
		return(
			<ToolbarGroup style={{position:'relative', top:-3}} firstChild={true}>
				<RaisedButton labelColor='white' style={{marginRight:10}} labelStyle={{position:'relative', top:8, bottom:'auto'}} backgroundColor={indigo500} label="Save"/>
				<RaisedButton labelColor='white' style={{position:'relative', left:'auto', right:10, width:100}} labelStyle={{position:'relative', top:8, bottom:'auto', paddingLeft:'auto', paddingRight:'auto'}} backgroundColor={indigo500} label="Save & Next"/>
			</ToolbarGroup>
		);
	}
}

export default DocFormSaveButtons