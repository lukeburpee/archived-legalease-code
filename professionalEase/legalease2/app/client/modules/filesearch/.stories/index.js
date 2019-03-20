import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { storiesOf, addDecorator, action } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';
import { fade } from 'material-ui/utils/colorManipulator';
import FileSearchMainContent from './../components/filesearch.main.content';
import FileSearchTextSearch from './../components/filesearch.textsearch';
import FileSearchOptionsList from './../components/filesearchoptionslist';
import RootFilter from './../components/filesearch.filter.rootfilter';
import Filter from './../components/filesearch.filter.filter';
import FileSearchColumns from './../components/filesearch.searchcolumns';
import FileSearchSorts from './../components/filesearch.filesorts';

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


storiesOf('File Search', module)
	.addDecorator(muiTheme([theme]))
	.addDecorator((story)=>(
		<MuiThemeProvider muiTheme={theme}>
			{story()}
		</MuiThemeProvider>
	))
	.add('File Search Main Content', ()=> (
		<FileSearchMainContent 
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
			search={{
				name:'Search 1', 
				options: {families: true, threadGroup: false, duplicates: true, nearDuplicates: true},
				text: 'search text',
				root: {combinator: 'and'},
				included:[{name:'control Id'},{name:'file icon'}], 
				excluded:[{name:'excluded column'},{name:'excluded column 2'}],
				sorts:[{direction:'ascending',field:'field1'},{direction:'descending', field:'field3'}],
				filters:[{type:'filter1', operator:'between'},{type:'filter2', operator:'between'}]}}
			/>
	))
	.add('File Search Text Search', ()=> (
		<FileSearchTextSearch 
			name='Search Name' 
			options={{
				families: true, 
				threadGroup: false, 
				duplicates: true, 
				nearDuplicates: false
			}}
			text='search text'/>
	))
	.add('File Search Options List', ()=> (
		<FileSearchOptionsList options={{families: true, threadGroup: false, duplicates: false, nearDuplicates: true}}/>
	))
	.add('Root Filter Group w/out Filters', ()=>(
		<RootFilter 
			combinator='and'
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
		/>
	))
	.add('Root Filter Group w/out SubGroups', ()=>(
		<RootFilter 
			combinator='and'
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
			filters={[
				{type:'filter1', operator:'between'},
				{type:'filter2', operator:'between'}
		]}/>
	))
	.add('Root Filter Group w/ SubGroups', ()=>(
		<RootFilter 
			combinator='and'
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
			filters={[
				{combinator:'and', rules:[
					{filter:{type:'filter1', operator:'between'}},
					{filter:{type:'filter2', operator:'between'}}
				]}]}/>
	))
	.add('Filter Group', ()=>(
		<Filter 
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
			filter={
				{combinator:'and', rules:[
					{filter:{type:'filter1', operator:'in', value:'value 1'}},
					{filter:{combinator:'and', rules:[
						{filter:{type:'filter2', operator:'not_in', value:'value 2'}},
						{filter:{type:'filter3', operator:'contains', value:'value 3'}}
					]}},
					{filter:{combinator:'or', rules:[
						{filter:{combinator:'and', rules:[
							{filter:{combinator:'or', rules:[
								{filter:{type:'filter4', operator:'between', value:'value 4'}}, 
								{filter:{type:'filter5', operator:'like', value:'value 5'}}]}},
								{filter:{type:'filter6', operator:'not_like', value:'value 6'}
							}]}
						}
					]}}
			]}}/>
	))
	.add('Filter Rule', ()=>(
		<Filter 
			filterlist={[
				{label:'filter 1', value:'filter1', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 2', value:'filter2', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 3', value:'filter3', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 4', value:'filter4', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 5', value:'filter5', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 6', value:'filter6', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 7', value:'filter7', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 8', value:'filter8', operatorlist:[{label:'in', value:'in'}]},
				{label:'filter 9', value:'filter9', operatorlist:[{label:'in', value:'in'}]}
			]}
			operatorlist={[
				{label:'contains', value:'contains'},
				{label:'does not contain', value:'does_not_contain'},
				{label:'in', value:'in'},
				{label:'not in', value:'not_in'},
				{label:'like', value:'like'},
				{label:'not like', value:'not_like'},
				{label:'between', value:'between'}
			]}
			filter={{type:'filter1', operator:'contains', value:'value'}}/>
	))
	.add('File Search Columns', ()=> (
		<FileSearchColumns include={[{name:'control Id'},{name:'file icon'}]} exclude={[{name:'excluded column'},{name:'excluded column 2'}]}/>
	))
	.add('File Search Sorts', ()=> (
		<FileSearchSorts fields={[
			{label:'field 1', value:'field1'},
			{label:'field 2', value:'field2'},
			{label:'field 3', value:'field3'}
		]} sorts={[
			{direction:'ascending',field:'field1'},
			{direction:'descending', field:'field3'}
		]}/>
	))

