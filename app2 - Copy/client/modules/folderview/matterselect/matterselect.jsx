import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MatterSelect extends Component {
	render(){
		return (
			<Paper
				style={{paddingTop:60, paddingLeft:50, margin:10}}
				zDepth={1}
			>
				<SelectField
					style={{position:'absolute', top:20, right:40, height:50, width:170}}
					underlineStyle={{display:'none'}}
					hintText="Select Matter"
				>
					<MenuItem>Matter 1</MenuItem>
				</SelectField>
			</Paper>
		);
	}
}