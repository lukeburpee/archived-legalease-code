import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import Page from './../modules/interface/components/page';
import Cases from './../modules/cases/components/cases';
import Discovery from './../modules/discovery/components/discovery';
import Editor from './../modules/editor/components/editor';
import Viewer from './../modules/viewer/components/viewer';
import FormBuilder from './../modules/formbuilder/components/formbuilder';
import FileSearch from './../modules/filesearch/components/filesearch';
import Collections from './../modules/collections/components/collections';
import Research from './../modules/research/components/research';
import Profile from './../modules/profile/components/profile';
import DataTable from './../modules/table/components';
import QueryBuilder from './../modules/querybuilder/components/QueryBuilder';
import Select from './../modules/formelements/components/select';
import Radios from './../modules/formelements/components/radios';
import Checkboxes from './../modules/formelements/components/checkboxes';
import FormElement from './../modules/formelements/components/formelement';
import FormElementList from './../modules/formelements/components/formelementlist';
import FormEditor from './../modules/formelements/components/formeditor';
import FormEditorSection from './../modules/formelements/components/formeditorsection';
import FormField from './../modules/formelements/components/formfield';
import {tableHeaders} from './../config/tableHeaders';
import {fields} from './../config/qbFields';
import {tableData} from './../config/tableData';
import { fade } from 'material-ui/utils/colorManipulator';

import { List, ListItem } from 'material-ui/List';

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


storiesOf('Layout', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('side content open + meeting videos + bottomsheets', ()=> (
		<Page 
			left={true}
			right={true}
			leftTool="left tool"
			leftContent="left content"
			leftBottomSheet={true}
			leftBottomSheetContent="left bottom sheet"
			rightTool="right tool"
			rightContent="right content"
			rightBottomSheet={true}
			rightBottomSheetContent="right bottom sheet"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('left closed + meeting videos', ()=> (
		<Page 
			left={false}
			right={true}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('right closed + meeting videos', ()=> (
		<Page 
			left={true}
			right={false}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('side content closed + meeting videos', ()=> (
		<Page 
			left={false}
			right={false}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={true}
			meetingCount={4}
		/>
	))
	.add('side content open no meeting videos', ()=> (
		<Page 
			left={true}
			right={true}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))
	.add('side content closed no meeting videos', ()=> (
		<Page 
			left={false}
			right={false}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={false}
			chatBoxMin={true}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))
	.add('side content open, no meeting videos, chatbox open', ()=> (
		<Page 
			left={true}
			right={true}
			leftTool="left tool"
			leftContent="left content"
			rightTool="right tool"
			rightContent="right content"
			mainTool="main tool"
			mainContent="main content"
			chatBox={true}
			chatBoxMin={false}
			chatBoxContent="chat box"
			utilities={true}
			utilitiesOpen={false}
			utilitiesMainContent="utilities main content"
			utilitiesToolbarContent="utilities toolbar"
			utilitiesBottomContent="utilities bottom content"
			meeting={false}
			meetingCount={0}
		/>
	))

storiesOf('Public Pages', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=> (
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Home Page', ()=> (
		<div>Home Page</div>
	))
	.add('Login Page', ()=> (
		<div>Login Page</div>
	))
	.add('Registration Page', ()=> (
		<div>Registration Page</div>
	))
	.add('Forgot Password Page', ()=> (
		<div>Forgot Password Page</div>
	))
	.add('Page Not Found Page', ()=> (
		<div>Page not found page</div>
	))

storiesOf('Private Pages', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=> (
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Cases Page', ()=> (
		<Cases/>
	))
	.add('Editor Page', ()=> (
		<Editor/>
	))
	.add('Research Page', ()=> (
		<Research/>
	))
	.add('Discovery Page', ()=> (
		<Discovery/>
	))
	.add('Viewer Page', ()=> (
		<Viewer/>
	))
	.add('Form Builder Page', ()=> (
		<FormBuilder/>
	))
	.add('File Search Page', ()=> (
		<FileSearch/>
	))
	.add('Collections Page', ()=> (
		<Collections/>
	))
	.add('Persistent Lists Page', ()=> (
		<FileSearch/>
	))
	.add('Profile Page', ()=> (
		<Profile/>
	))

storiesOf('Table Components', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=> (
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Table with select all and search', ()=> (
		<DataTable
			fixedHeader={true}
			fixedFooter={true}
			showHeaderToolbar={true}
			height='300'
			selectable={true}
			showRowHover={true}
			stripedRows={true}
			columns={tableHeaders}
			data={tableData}
			showCheckboxes={true}
			enableSelectAll={true}
			multiSelectable={true}/>
	))
	.add('Table without select all and search', ()=> (
		<DataTable
			fixedHeader={true}
			fixedFooter={true}
			height='inherit'
			selectable={true}
			showRowHover={true}
			columns={tableHeaders}
			data={tableData}/>
	))
	.add('Query Builder', ()=> (
		<QueryBuilder fields={fields}/>
	))

storiesOf('Form Components', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=> (
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Form Element List w/out extra elements', ()=>(
		<FormElementList/>
	))
	.add('Form Element List w extra element', ()=>(
		<FormElementList elements={[{label:'extra element', icon:'avatar'}]}/>
	))
	.add('FormEditor', ()=>(
		<FormEditor name="Form Editor" sections=
			{[
				{label:'section 1', editLabel:true, fields:[
					{label:'field 1', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 2', fields:[
					{label:'field 1', type:'checkboxlist', value: ['option1', 'option2'], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'radiolist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 1', type:'checkboxlist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'radiolist', value: [], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 3', fields:[
					{label:'field 1', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 4', fields:[
					{label:'field 1', type:'chip', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
					{label:'field 2', type:'checkboxlist', value: [], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
				]},
				{label:'section 5', fields:[
					{label:'field 1', type:'chip', value: '', colSpan:2},
					{label:'field 2', type:'textarea', value:'', colSpan:2},
					{label:'field 1', type:'text', value: '', colSpan:2},
					{label:'field 2', type:'textarea', value:'', colSpan:2},
					
				]},
				{label:'section 5', fields:[
					{label:'field 1', type:'checkboxlist', columns:2, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'},{label:'option 3', value:'option3'},{label:'option 4', value:'option4'}], value:[]}					
				]}
			]}
		/>
	))
	.add('Form Editor Section', ()=>(
		<FormEditorSection label='Form Editor Section' fields={[{label:'field 1', type:'checkboxlist', options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]}/>
	))
	.add('Form Editor Section with columns', ()=>(
		<FormEditorSection label='Form Editor Section' fields={[{label:'field 1', type:'checkboxlist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]}/>
	))
	.add('Form Editor Section with columns, one field open for editing', ()=>(
		<FormEditorSection label='Form Editor Section' fields={[{label:'field 1', type:'checkboxlist', open:true, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}], value:''},{label:'field 2', type:'radiolist', colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}]}/>
	))
	.add('Form Field closed with Checkbox', ()=>(
		<FormField id='checkbox' open={false} type='checkbox' label='Option 1' options={[{label:'Option 1', value:'option1'}]} value='option1' required={false}/>
	))
	.add('Form Field open with Checkbox', ()=>(
		<FormField id='checkbox' open={open} type='checkbox' label='Option 1' options={[{label:'Option 1', value:'option1'}]} value='option1' required={false}/>
	))
	.add('Form Field closed with Checkbox List', ()=>(
		<FormField id='checkboxlist' open={false} type='checkboxlist' label='Checkbox List' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]} value={['option1']} required={false}/>
	))
	.add('Form Field open with Checkbox List', ()=>(
		<FormField id='checkboxlist' open={true} type='checkboxlist' label='Checkbox List' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]} value={['option1']} required={false}/>
	))
	.add('Form Field closed with Radio List', ()=>(
		<FormField id='radiolist' open={false} type='radiolist' label='Radio List' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]} value='option1' required={false}/>
	))
	.add('Form Field closed with Radio List and Columns', ()=>(
		<FormField id='radiolist' open={false} type='radiolist' columns={2} colSpan={2} label='Radio List' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]} value='option1' required={false}/>
	))
	.add('Form Field open with Radio List', ()=>(
		<FormField id='radiolist' open={true} type='radiolist' label='Radio List' options={[{label:'Option 1', value:'option1'},{label:'Option 2', value:'option2'},{label:'Option 3', value:'option3'}]} value='option1' required={false}/>
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

storiesOf('Search Components', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=> (
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('Query Builder', ()=> (
		<QueryBuilder fields={fields}/>
	))

