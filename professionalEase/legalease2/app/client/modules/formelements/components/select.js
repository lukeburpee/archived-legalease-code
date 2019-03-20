import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Select = ({label, options, value, inline, enabled, onChange}) => (
	<SelectField style={{display:(inline)?'inline-block':null, width:(inline)?'50%':'100%'}} floatingLabelText={`Select ${label}`} value={value} enabled={enabled} onChange={onChange}>
	{(()=>options.map((option, i)=>(
		<MenuItem key={option.key} value={option.value} primaryText={option.label}/>
	)))()}
	</SelectField>
);

export default Select;