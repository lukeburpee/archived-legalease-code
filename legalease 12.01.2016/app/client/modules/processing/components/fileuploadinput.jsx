import React, { Component, PropTypes } from 'react';
import actions from './../actions';
import ReactDOM from 'react-dom';
import { ToolbarGroup } from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';

class FileUploadInputImpl extends Component {
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onChange(event){
		event.preventDefault();
		let fileInput = ReactDOM.findDOMNode(this.refs.fileUpload);
		console.log(fileInput.files);
		this.props.dispatch(actions.addMultiple(fileInput.files));
	}
	onClick(event){
		let fileInput = ReactDOM.findDOMNode(this.refs.fileUpload);
		fileInput.click();
	}
	render(){
		const fileInput = <input type="file" ref="fileUpload" style={{display:'none'}} onChange={this.onChange} multiple/>;
		return (
			<ToolbarGroup lastChild={true}>
				{fileInput}
				<RaisedButton onTouchTap={this.onClick} label="Select"/>
			</ToolbarGroup>
		);
	}
}

export default FileUploadInputImpl;