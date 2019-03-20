import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { RadioButton } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Draggable, Droppable} from 'react-drag-and-drop';

const FormEditorOptions = ({type, value, options}) => (
	<div>
	<Droppable types={['form-editor-option']}>
	{(()=>options.map((option, i)=>(
		<Draggable type='form-editor-option' data={option}>
		<Paper style={{marginBottom:10, paddingLeft:20, paddingRight:20, paddingBottom:10}} key={`option_list_${i}`}>
			<div style={{margin:'auto'}}>
			{(type === 'checkbox' || type === 'checkboxlist')? <Checkbox style={{display:'inline-block', width:50}} value={value}/>: <RadioButton style={{display:'inline-block', width:50}} value={value}/> }
			<TextField style={{display:'inline-block', width:'30%', marginRight:10}} floatingLabelText='Label' value={option.label}/>
			<TextField style={{display:'inline-block', width:'30%', marginRight:10}} floatingLabelText='Value' value={option.value}/>
			<RaisedButton label='Link' style={{display:'inline-block', width:75, marginRight:10}}/>
			<RaisedButton label='Delete' style={{display:'inline-block', width:75}} />
			</div>
		</Paper>
		</Draggable>
	)))()}
	</Droppable>
		<RaisedButton style={{}} primary={true} label="Add Option"/>
	</div>
);

export default FormEditorOptions;