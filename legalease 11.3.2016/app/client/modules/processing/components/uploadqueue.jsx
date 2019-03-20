import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import UploadQueueToolbar from './uploadqueuetoolbar.jsx';
import { indigo900 } from 'material-ui/styles/colors';
import UploadQueueList from './../containers/uploadqueuelist.jsx';
import FileUploadDropZone from './fileuploaddropzone.jsx';
import { connect } from 'react-redux';
import actions from './../actions';

class UploadQueueImpl extends Component {
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
				<div style={{height:'calc(100vh - 610px)', overflowY:'scroll'}}>
				{(this.props.uploadQueue.length === 0) ? <div style={{textAlign:'center'}}><h2>No Files Selected For Processing</h2></div> : <UploadQueueList/>}
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
	uploadQueue: state.processing.uploadQueue	
});

const UploadQueue = connect(mapStateToProps)(UploadQueueImpl);

export default UploadQueueImpl;