import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import FileUploadInput from './fileuploadinput.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar'

import actions from './../actions';

class FileUploadDropZoneImpl extends Component {
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onChange(event){
		event.preventDefault();
		let fileInput = ReactDOM.findDOMNode(this.refs.fileUpload);
		this.props.dispatch(actions.addMultiple(fileInput.files));
	}
	onClick(event){
		let fileInput = ReactDOM.findDOMNode(this.refs.fileUpload);
		fileInput.click();
	}
	handleZipDrop(event){
		let fileInput = ReactDOM.findDOMNode(this.refs.fileUpload);
	}
	render(){
		const fileInput = <input type="file" ref="fileUpload" style={{display:'none'}} onChange={this.onChange} multiple/>;
		return(
			<div style={{position:'absolute', bottom:'0', top:'auto', width:'inherit'}}>
			<Toolbar style={{height:50, marginBottom:20}}>
				<ToolbarGroup>
					<ToolbarTitle text="Drop Files Below"/>
				</ToolbarGroup>
			</Toolbar>
			<div style={{width:'90%'}}>
			{fileInput}
			<RaisedButton style={{zIndex:6000, width:'inherit', height:'100%', marginLeft:20, marginRight:20, marginBottom:10}} onClick={this.onClick}
				icon={<img style={{height:90, width:90, marginTop:20, marginBottom:20}} src="/icons/file-zip-icon-6851.png"/>}
				/>
			<RaisedButton style={{zIndex:6000, width:'inherit', height:'100%', marginLeft:20, marginRight:20, marginTop:10, marginBottom:10}} onClick={this.onClick}
				icon={<img style={{height:120, width:120}} src="/icons/ic_folder2.png"/>}/>
			<RaisedButton style={{zIndex:6000, width:'inherit', height:'100%', marginLeft:20, marginRight:20, marginTop:10, marginBottom:20}} onClick={this.onClick}
				icon={<img style={{height:120, width:120}} src="/icons/ic_document.png"/>}/>
			</div>
			</div>
		);
	}
}

const MapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});

const FileUploadDropZone = connect(MapStateToProps)(FileUploadDropZoneImpl);

export default FileUploadDropZone;