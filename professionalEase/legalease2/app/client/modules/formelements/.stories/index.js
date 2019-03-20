import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';
import FormElement from './../components/formelement';


const theme = getMuiTheme({
	themeName: 'legalEase Theme',
	palette: {
		primary1Color: '#283593',
		primary2Color: '#1A237E',
		accent1Color: '#FF5252',
		accent2Color: '#C5CAE9',
		accent3Color: '#455A64',
		textColor: 'black',
		alternativeTextColor: 'white',
	},
	zIndex: {
		floatingActionButton: 100
	}
});


storiesOf('Form Elements', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Form Element as Checkbox', ()=>(
		<FormElement id='checkbox' type='checkbox' label='checkbox' value={true}/>
	))
	.add('Form Element as Checkbox list', ()=>(
		<FormElement id='checkboxlist' type='checkboxlist' label='checkboxlist' value={['option1']} options={[{value:'option1', label:'Option 1'},{value:'option2', label:'Option 2'}]}/>
	))
	.add('Form Element as Checkbox list with columns', ()=>(
		<FormElement id='checkboxlist' type='checkboxlist' label='checkboxlist' value={['option1']} columns={3} options={[{value:'option1', label:'Option 1'},{value:'option2', label:'Option 2'},{value:'option3', label:'Option 3'}]}/>
	))
	.add('Form Element as Radio List', ()=>(
		<FormElement id='radiolist' type='radiolist' value='option1' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'}]}/>
	))
	.add('Form Element as Radio List with columns', ()=>(
		<FormElement id='radiolist' type='radiolist' value='option1' columns={2} options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]}/>
	))
	.add('Form Element as Chip Input', ()=>(
		<FormElement id='chipinput' type='chip' label='Chip Input' value={['chip 1', 'chip 2']}/>
	))
	.add('Form Element as Select', ()=>(
		<FormElement id='select' type='select' label='Input' value='option1' onChange={(e,i,v)=>v} options={[{label:'option1', value:'option1', key:1},{label:'option2', value:'option2', key:2}]}/>
	))
	.add('Form Element as Toggle', ()=>(
		<FormElement id='toggle' type='toggle' label='Toggle Input' value={true}/>
	))

