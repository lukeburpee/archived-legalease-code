import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import { grey800 } from 'material-ui/styles/colors';
import UploadQueueToolbar from './uploadqueuetoolbar.jsx';
import { indigo900 } from 'material-ui/styles/colors';
import ProcessingQueueList from './../containers/processingqueuelist.jsx';
import FileUploadDropZone from './fileuploaddropzone.jsx';
import { connect } from 'react-redux';
import actions from './../actions';

class ProcessingQueueImpl extends Component {
	constructor(props){
		super(props);
		this.clearFile = this.clearFile.bind(this);
	}
	clearFile(event){
		this.props.dispatch(actions.removeFile(event.targetElement.value));
	}
	render(){
		return (
			<div style={{width:'inherit'}}>
				<UploadQueueToolbar/>
				<div style={{backgroundColor: grey800, color:'white', height:'calc(100vh - 610px)', overflowY:'scroll'}}>
				{(this.props.processingQueue.length === 0) ? <div style={{textAlign:'center'}}><h2>No Files Selected For Processing</h2></div> : <ProcessingQueueList/>}
				</div>
				<FileUploadDropZone/>
			</div>
		);
	}
}

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	gridList: {
		width: 'inherit',
		height: 'inherit',
		overflowY: 'auto'
	}
};

const mapStateToProps = (state) => ({
	processingQueue: state.processing.processingQueue	
});

const ProcessingQueue = connect(mapStateToProps)(ProcessingQueueImpl);

export default ProcessingQueueImpl;