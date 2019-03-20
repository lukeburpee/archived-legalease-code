import React, { Component, PropTypes } from 'react'
import { GridList } from 'material-ui/GridList'
import UploadFile from './../containers/uploadfile.jsx';
import actions from './../actions';

class UploadQueueListImpl extends Component {
	constructor(props){
		super(props);
		this.clearFile = this.clearFile.bind(this);
	}
	clearFile(event){
		this.props.dispatch(actions.removeFile(event.targetElement.value));
	}
	renderUploadQueue(){
		const { uploadQueue } = this.props;
		return uploadQueue.map((file, i) => (
			<UploadFile 
				key={i} 
				index={i} 
				file={file} 
				uploadStatus="pending" 
				extractionStatus="pending" 
				imagingStatus="pending"
				analysisStatus="pending"/>
		))
	}
	render(){
		return(
			<div>
			<GridList
				cellHeight={180}
				cols={1}>
				{this.renderUploadQueue()}
			</GridList>
			</div>
		);
	}
}


export default UploadQueueListImpl;