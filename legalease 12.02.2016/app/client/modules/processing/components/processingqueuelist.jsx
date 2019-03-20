import React, { Component, PropTypes } from 'react'
import { GridList } from 'material-ui/GridList'
import ProcessingFile from './../containers/processingfile.jsx';
import actions from './../actions';

class ProcessingQueueListImpl extends Component {
	constructor(props){
		super(props);
		this.clearFile = this.clearFile.bind(this);
	}
	clearFile(event){
		this.props.dispatch(actions.removeFile(event.targetElement.value));
	}
	renderProcessingQueue(){
		const { processingQueue } = this.props;
		return processingQueue.map((file, i) => (
			<ProcessingFile 
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
				{this.renderProcessingQueue()}
			</GridList>
			</div>
		);
	}
}

ProcessingQueueListImpl.propTypes = {
	processingQueue: PropTypes.array
}


export default ProcessingQueueListImpl;