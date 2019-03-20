import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import UploadResultsToolbar from './uploadresultstoolbar.jsx';
import { connect } from 'react-redux';
import CollectedFilesList from './collectedfilelist.jsx';
class ProcessingResultsImpl extends Component {
	constructor(props){
		super(props);
	}
	renderFileInfo(){
		const { fileInfo } = this.props;
		return fileInfo.map((file, i)=>(
			<div key={i}>
			<ul>
				<li><b>Name:</b> {String(file.name)}</li>
				<li><b>Type:</b> {String(file.type)}</li>
				<li><b>Size:</b> {String(file.size)}</li>
				<li><b>Path:</b> {String(file.webkitRelativePath)}</li>
				<li><b>Last Modified:</b> {String(file.lastModified)}</li>
				<li><b>Last Modified Date:</b> {String(file.lastModifiedDate)}</li>
			</ul>
			</div>
		));
	}
	render(){
		return (
			<div>
				<UploadResultsToolbar/>
				<div style={{margin:20}}>
				{this.renderFileInfo()}
				</div>
				<CollectedFilesList/>
			</div>
		);
	}
}

ProcessingResultsImpl.propTypes = {
	fileInfo: PropTypes.array
}

const mapStateToProps = (state) => ({
	fileInfo: state.processing.uploadQueueFileInfo
});

const ProcessingResults = connect(mapStateToProps)(ProcessingResultsImpl);

export default ProcessingResults;
