import React from 'react';
import {Draggable, Droppable} from 'react-drag-and-drop';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CancelIcon from 'material-ui/svg-icons/navigation/close';

import FormField from './formfield';

const FormEditorSection = ({open, editLabel, label, fields}) => (
	<Card style={{marginBottom:10, marginLeft:10, marginRight:10}}>
		<Draggable type={'form-sections'}>
			<CardHeader>
				<CardTitle>
					{(editLabel)?<TextField id={label} value={label}/>:label}
					<IconButton>{(editLabel)?<CancelIcon/>:<EditIcon/>}</IconButton>
				</CardTitle>
			</CardHeader>
			<CardText>
				<Droppable types={['form-elements']}>
					{(()=>fields.map((field, i)=>(
						<FormField 
							key={i}
							open={field.open} 
							label={field.label} 
							type={field.type} 
							columns={field.columns} 
							row={field.row} 
							colSpan={field.colSpan} 
							options={field.options} 
							value={field.value}
							required={field.required}
							/>
					)))()}
				</Droppable>
			</CardText>
		</Draggable>
	</Card>
);

export default FormEditorSection;