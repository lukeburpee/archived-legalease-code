import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const Checkboxes = ({position, options, selected, columns}) => (
	<div>
	{(()=>options.map((option, i)=>(
		<Checkbox key={i} style={{display:(columns)?'flex':'initial', flexDirection:(columns)?'row':null, flexWrap:(columns)?'wrap':null}} labelPosition={position} value={option.value} checked={selected.indexOf(option.value) !== -1} label={(position === 'left')?`${option.label} :`:option.label}/>
	)))()}
	</div>
);

export default Checkboxes;