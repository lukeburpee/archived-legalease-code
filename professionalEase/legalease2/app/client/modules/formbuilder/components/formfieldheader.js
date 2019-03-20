import React from 'react';
import { CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import FormElement from './../../../modules/formelements/components/formelement';


const FormFieldHeader = ({open, type, label, columns, required, options, value}) => (
	<CardHeader style={{width:'inherit'}}>
		{(open)?
			<div>
				<TextField style={{display:'inline-block', width:'30%'}} floatingLabelText='Label' value={label}/>
				{((type === 'checkbox') || (type === 'radio'))?<TextField style={{display:'inline-block', width:'30%', marginLeft:10}} floatingLabelText='Value' value={value}/>:null}
				<Checkbox style={{display:'inline-block', width:'50%'}} label='Required?' value={required}/>
			</div> :
			<div style={{position:'relative', bottom:25}}>
				{((type === 'text') || (type === 'textarea') || (type ==='chip'))?null:<Subheader>{`${label}: `}</Subheader>}
				<div style={{marginLeft:((type === 'text') || (type === 'textarea') || (type === 'chip'))?0:50}}>
					<FormElement type={type} label={label} columns={columns} value={value} options={options}/>
				</div>
			</div>
		}
		<IconButton style={{position:'absolute', top:0, bottom:'auto', right:0, left:'auto'}}>{(open)?<CancelIcon/>:<EditIcon/>}</IconButton>
	</CardHeader>
);

export default FormFieldHeader;