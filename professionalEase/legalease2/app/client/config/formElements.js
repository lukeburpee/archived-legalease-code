import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton,RadioButtonGroup} from 'material-ui/RadioButton';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import CalendarIcon from 'material-ui/svg-icons/action/date-range';

export const formElements = [
	{label:'Checkbox', type:'checkbox', data:'checkbox', icon: <Checkbox style={{position:'relative', top:7}} checked={true}/>},
	{label:'Checkbox List', type:'checkboxlist', data:'checkboxlist', icon: <div style={{position:'relative', bottom:5}}><Checkbox/><Checkbox checked={true}/></div>},
	{label:'Date', type:'date', data:'date', icon: <div><CalendarIcon style={{position:'relative', right:15, top:5}}/></div>},
	{label:'Radio', type:'radio', data:'radio', icon: <RadioButton style={{position:'relative', top:7}} />},
	{label:'Radio List', type:'radiolist', data:'radiolist', icon: <RadioButtonGroup name="name" style={{position:'relative', bottom:5}} valueSelected="one"><RadioButton value="one"/><RadioButton value="two"/></RadioButtonGroup>},
	{label:'Chip Input', type:'chip', data:'chip', icon: <div style={{position:'relative', top:5}}><Chip onRequestDelete={()=>{return null}}>Chip</Chip></div>},
	{label:'Text Input', type:'text', data:'text', icon: <TextField floatingLabelFixed={true} floatingLabelText="Text Input" style={{width:100, position:'relative', bottom:20}}/>},
	{label:'Text Area', type:'textarea', data:'textarea', icon:<TextField style={{position:'relative', bottom:20, width:100}} floatingLabelFixed={true} floatingLabelText="Text Area" />},
	{label:'Toggle', type:'toggle', data:'toggle', icon: <Toggle style={{position:'relative', top:7}}/>}
];