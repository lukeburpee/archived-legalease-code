import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const Radios = ({name, options, value, onChange, columns}) => (
	<RadioButtonGroup name={name} valueSelected={value} style={{width:`${100/columns}%`}}>
	{(()=>options.map((option, i)=>(
		<RadioButton key={i} style={{display:(columns)?'inline-block':'initial', width:'inherit'}} value={option.value} label={option.label}/>
	)))()}
	</RadioButtonGroup>
);

export default Radios;