import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';
import ChipInput from 'material-ui-chip-input';
import TextField from 'material-ui/TextField';

import Select from './select';
import Checkboxes from './checkboxes';
import Radios from './radios';

const FormElement = ({id, type, label, value, options, columns, formElementError}) => (
	<div>
	{(()=>{switch(type){
		case 'checkbox':
			return <Checkbox label={label} checked={value} />
		case 'checkboxlist':
			return <Checkboxes options={options} selected={value} columns={columns}/>
		case 'date':
			return <div></div>
		case 'radiolist':
			return <Radios name={label} value={value} options={options} columns={columns}/>
		case 'chip':
			return <ChipInput floatingLabelText={label} value={value} fullWidth={true}/>
		case 'select':
			return <Select label={label} options={options} value={value}/>
		case 'text':
			return <TextField floatingLabelText={label} value={value} fullWidth={true}/>
		case 'textarea':
			return <TextField floatingLabelText={label} value={value} fullWidth={true}/>
		case 'toggle':
			return <Toggle label={label} toggled={value}/>
		default:
			return null;
	}})()}
	<div>
	{(formElementError)?`error: ${formElementError}`: null}
	</div>
	</div>
);

export default FormElement;