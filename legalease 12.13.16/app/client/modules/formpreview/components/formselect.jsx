import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import { grey200 } from 'material-ui/styles/colors'

import MenuItem from 'material-ui/MenuItem'

class FormSelect extends Component {
	render(){
		return (
			<SelectField 
				hintText="Select Form"
				style={{marginRight:25, width:'200px'}}
				hintStyle={{color:'white'}}
				floatingLabelStyle={{backgroundColor:'white'}}
				labelStyle={{backgroundColor:'white'}}>
				<MenuItem key={1} value={1}>Form 1</MenuItem>
				<MenuItem key={2} value={2}>Form 2</MenuItem>
			</SelectField>
		);
	}
}

export default FormSelect