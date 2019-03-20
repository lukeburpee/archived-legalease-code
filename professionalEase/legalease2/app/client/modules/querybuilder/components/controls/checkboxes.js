import React,{ Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

const Checkboxes = ({position, options, onCheck}) => (
	<div>
	{(()=>(options || []).map((option, i)=>(
		<Checkbox key={i} labelPosition={position} defaultChecked={true} label={option.label}/>
	)))()}
	</div>
);

export default Checkboxes;