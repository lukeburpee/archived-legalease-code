import React,{ Component, PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import actions from './../actions';
import {connect} from 'react-redux';

class FileTreeContextImpl extends Component {
	constructor(props){
		super(props);
	}
	handleSearchCreate(listItem){
		console.log('creating a search underneath: ', listItem);
		this.props.dispatch(actions.closeFileTreeContext());
	}
	handleSearchRename(listItem){
		console.log('renaming search: ', listItem);
		this.props.dispatch(actions.closeFileTreeContext());
	}
	handleSearchUpdate(listItem){
		console.log('updating search: ', listItem);
		this.props.dispatch(actions.closeFileTreeContext());
	}
	handleSearchDelete(listItem){
		console.log('deleting search: ', listItem);
		this.props.dispatch(actions.closeFileTreeContext());
	}
	handleRequestClose = () => {
		this.props.dispatch(actions.closeFileTreeContext());
	}
	render(){
		return(
			<Popover
				open={this.props.contextOpen}
				anchorEl={this.props.contextAnchor}
				anchorOrigin={{horizontal:'middle', vertical:'bottom'}}
				targetOrigin={{horizontal:'middle', vertical:'top'}}
				onRequestClose={this.handleRequestClose}>
				<Menu>
					<MenuItem primaryText="Create" onTouchTap={()=>this.handleSearchCreate(this.props.listItem)}/>
					<MenuItem primaryText="Rename" onTouchTap={()=>this.handleSearchRename(this.props.listItem)}/>
					<MenuItem primaryText="Update" onTouchTap={()=>this.handleSearchUpdate(this.props.listItem)}/>
					<MenuItem primaryText="Delete" onTouchTap={()=>this.handleSearchDelete(this.props.listItem)}/>
				</Menu>
			</Popover>
		);
	}
}

FileTreeContextImpl.propTypes = {
	listItem: PropTypes.object,
	contextOpen: PropTypes.bool,
	contextAnchor: PropTypes.any
}

const mapStateToProps = (state) => ({
	contextOpen: state.filetree.contextOpen,
	contextAnchor: state.filetree.contextAnchor
});

const FileTreeContext = connect(mapStateToProps)(FileTreeContextImpl);

export default FileTreeContext;