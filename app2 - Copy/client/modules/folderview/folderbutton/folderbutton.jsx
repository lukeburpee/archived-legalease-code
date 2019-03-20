import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { FolderClosedIcon, FolderOpenIcon } from './../icons';

export default class FolderButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		}
	}
	renderFolderIcon(){
		if (this.state.open){
			return (
				<FolderOpenIcon/>
			);
		} else {
			return (
				<FolderClosedIcon/>
			);
		}
	}
	toggleFolderIcon(){
		if (this.state.open === true){
			this.setState({
				open: false
			})
		} else {
			this.setState({
				open: true
			});
		}
	}
	render(){
		if (this.state.open){
			return (
					<FolderOpenIcon/>
			);
		} else {
			return (
					<FolderClosedIcon/>
			);
		}
	}
}

FolderButton.propTypes = {
	name: PropTypes.string
};