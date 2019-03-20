import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { FolderClosedIcon, FolderOpenIcon } from './../icons';
import FontIcon from 'material-ui/FontIcon';
import { MuiTreeList } from './../treeview';


export default class SearchView extends Component {
	render() {
		return(

				<MuiTreeList
					haveSearchbar={true}
					listItems={treeItems}
					contentKey={'title'}
					useFolderIcons={true}
					useSearchIcons={true}
				></MuiTreeList>
		);
	}
}

const treeItems = [
	{
		depth: 0,
		children: [1]
	},{
		depth: 1,
		parentIndex: 0,
		title: 'folder 1',
		children: [2, 3]
	},{
		depth: 2,
		parentIndex:1,
		title: 'folder 1.1',
		children: [4, 5]
	},{
		depth: 3,
		title: 'search 1',
		parentIndex: 1
	},{
		depth: 4,
		title: 'search 2',
		parentIndex: 2
	},{
		depth: 5,
		title: 'search 3',
		parentIndex: 2
	}
];