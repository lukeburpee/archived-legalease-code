import React, { Component } from 'react'
import MuiTreeList from './muitreelist.jsx';
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import LeftArrowIcon from 'material-ui/svg-icons/navigation/arrow-back'
import { connect } from 'react-redux'
import matters from './../../matters/actions'
import actions from './../actions'

class FileTreeImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			discoveryPanel: 0,
			expandedItems: null,
			activeListItems: null,
			searchTerm: ''
		}
		this.handleTouchTap = this.handleTouchTap.bind(this);
	}
	componentDidUpdate(prevProps, prevState){
		const {activeListItem, listItems} = this.state
		if (activeListItem !== prevState.activeListItem){
			const expandedListItems = getAllParents(listItems[activeListItem], listItems)
			this.setState({
				expandedListItems: expandedListItems
			})
		}
	}
	collapseAll(){
		this.setState({
			expandedListItems: []
		})
	}
	handleSearch(searchTerm){
		this.setState({searchTerm})
	}
	handleTouchTap(event){
		console.log(event);
		if (event.isLocked){
			return
		}
		if (event.children){
			const indexOfListItemInArray = this.props.expandedListItems.indexOf(event);
			console.log(indexOfListItemInArray);
			if (indexOfListItemInArray === -1){
				this.props.dispatch(actions.addExpandedTreeItem(event));
			} else {
				this.props.dispatch(actions.removeExpandedTreeItem(event));
			}
		} else {
			this.props.dispatch(actions.setActiveTreeItem(event));
		}
	}
	handleTouchTapInSearchMode(listItem, index){
		if (!listItem.children) {
			const expandedListItems = getAllParents(listItem, listItems)
			this.setState({
				activeListItem: index,
				expandedListItems,
				searchTerm: ''
			})
			this.props.dispatch(actions.setTree(index, expandedListItems));
		}
	}
	render(){
		return(
			<div
				style={{
					zIndex:3,
					position:'relative',
					width:'inherit'
			}}>
				<Toolbar style={{width:'inherit', height:36}}>
					<ToolbarGroup>
						<IconButton onTouchTap={()=>this.props.dispatch(matters.clearMatter())}>
							<LeftArrowIcon/>
						</IconButton>
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarTitle text={this.props.matter}/>
					</ToolbarGroup>
				</Toolbar>
				<MuiTreeList
					listItems={treeItems}
					contentKey={"title"}
					expandedListItems={this.props.expandedItems}
					activeListItems={this.props.activeListItems}
					useFolderIcons={true}
					useSearchIcons={true}
					haveSearchbar={true}
					handleTouchTap={this.handleTouchTap}
					handleTouchTapInSearchMode={() => this.handleTouchTapInSearchMode()}
					handleSearch={() => this.handleSearch()}
					searchTerm={this.state.searchTerm}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	matter: state.matters.selected,
	expandedListItems: state.filetree.expandedSearchItems,
	activeListItem: state.filetree.activeSearchItem
});

const FileTree = connect(mapStateToProps)(FileTreeImpl);

export default FileTree;

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
		children: [4, 5],
		isLocked: true
	},{
		depth: 3,
		title: 'search 1',
		parentIndex: 1,
		text: '',
		filters: [],
		columns: [],
		sort: []
	},{
		depth: 4,
		title: 'search 2',
		parentIndex: 2,
		text: '',
		filters: [],
		columns: [],
		sort: []
	},{
		depth: 5,
		title: 'search 3',
		parentIndex: 2,
		text: '',
		filters: [],
		columns: [],
		sort: []
	}
];