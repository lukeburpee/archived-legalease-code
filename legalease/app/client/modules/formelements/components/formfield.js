import React from 'react';
import {Draggable} from 'react-drag-and-drop';
import Card from 'material-ui/Card';

import FormElement from './formelement';
import FormFieldHeader from './formfieldheader';
import FormFieldBody from './formfieldbody';
import FormEditorOptions from './formeditoroptions';

const FormField = ({id, open, label, type, columns, colSpan, options, value, required}) => (

	<Card expanded={open} style={{display:'inline-block', width:(open)?'100%':(colSpan)?`${100/colSpan -1}%`:'100%', marginBottom:10, marginRight:5}}>
		<Draggable>
		<FormFieldHeader open={open} type={type} label={label} columns={columns} required={required} value={value} options={options}/>
		<FormFieldBody open={open} type={type} value={value} options={options}/>
		</Draggable>
	</Card>
);

export default FormField;