import React, { Component } from 'react'
import { MuiTreeList } from 'react-treeview-mui';
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'

class FileTree extends Component {
	constructor(props){
		super(props);
		this.state = {
			discoveryPanel: 0,
			expandedItems: null,
			activeListItems: null,
			searchTerm: ''
		}
	}
	componentDidMount(){
		if (this.props.discoveryPanel !== 0){
			this.setState({
				discoveryPanel: this.props.discoveryPanel
			})
		}
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
	handleTouchTap(listItem, index){
		if (listItem.children){
			const indexOfListItemInArray = this.state.expandedListItems.indexOf(index);
			if (indexOfListItemInArray === -1){
				this.setState({
					expandedListItems: this.state.expandedListItems.concat([index])
				})
			} else {
				let newArray = [].concat(this.state.expandedListItems)
				newArray.splice(indexOfListItemInArray, 1)
				this.setState({
					expandedListItems: newArray
				})
			}
		} else {
			this.setState({
				activeListItems: index
			})
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
				<Paper
					style={{position:'relative', marginTop:10, marginLeft:10, marginRight:10, width:'inherit', height:50}}/>
				<MuiTreeList
					listItems={treeItems}
					contentKey={"title"}
					expandedListItems={this.state.expandedItems}
					activeListItems={this.state.activeListItems}
					useFolderIcons={true}
					haveSearchbar={true}
					handleTouchTap={() => this.handleTouchTap()}
					handleTouchTapInSearchMode={() => this.handleTouchTapInSearchMode()}
					handleSearch={() => this.handleSearch()}
					searchTerm={this.state.searchTerm}/>
			</div>
		);
	}
}

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