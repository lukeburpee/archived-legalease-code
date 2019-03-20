import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';
import FormBuilder from './../components/formbuilder';
import FormBuilderLeftContent from './../components/formbuilder.left.content';
import FormElementList from './../components/formelementlist';
import FormEditor from './../components/formeditor';
import FormEditorSection from './../components/formeditorsection';
import FormField from './../components/formfield';

import {formSections, formFields, formFieldsWColumns, formFieldsWColumnsOpenForEdit} from './testformsections';

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


storiesOf('Form Builder', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Form Builder', ()=>(
		<FormBuilder/>
	))
	.add('Form Builder Left Content, case Form Fields', ()=>(
		<FormBuilderLeftContent panel={'fields'}/>
	))
	.add('Form Element List w/out extra elements', ()=>(
		<FormElementList/>
	))
	.add('Form Element List w extra element', ()=>(
		<FormElementList elements={[{label:'extra element', icon:'avatar'}]}/>
	))
	.add('FormEditor', ()=>(
		<FormEditor name="Form Editor" sections={formSections}/>
	))
	.add('Form Editor Section', ()=>(
		<FormEditorSection label='Form Editor Section' fields={formFields}/>
	))
	.add('Form Editor Section with columns', ()=>(
		<FormEditorSection label='Form Editor Section' fields={formFieldsWColumns}/>
	))
	.add('Form Editor Section with columns, one field open for editing', ()=>(
		<FormEditorSection label='Form Editor Section' fields={formFieldsWColumnsOpenForEdit}/>
	))

