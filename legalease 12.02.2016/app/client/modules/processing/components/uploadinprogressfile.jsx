import React,{ Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';

import actions from './../actions';

class UploadInProgressFileImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			progress: 0,
			inProgress: false
		};
	}
	componentDidMount(){
		this.uploadFile()
	}
	setControlId(){
		let { index, filecount } = this.props;
		console.log(filecount);
		let fileNumber = filecount + 1;
		let fileNumberString = String(fileNumber);
		let fileNumberLength = fileNumberString.length;
		let queueNumber = index + 1;
		let queueNumberString = String(queueNumber);
		let queueNumberLength = queueNumberString.length;
		if (filecount > 0){
			let controlId = this.props.collectionPrefix + '_' + ('000000000').slice(0, 9 - fileNumberLength) + fileNumberString;
			console.log(controlId);
			return controlId;
		} else {
			let controlId = this.props.collectionPrefix + '_' + ('000000000').slice(0, 9 - queueNumberLength) + queueNumberString;
			console.log(controlId);
			return controlId;
		}
	}
	uploadFile(){
		let self = this;
		"use strict";
		let uploadInstance = this.props.uploadCollection.insert({
			file: this.props.file,
			meta: {
				controlId: this.setControlId(),
				matter: this.props.matter,
				database: this.props.database,
				custodian: this.props.custodian,
				collectionPrefix: this.props.collectionPrefix,
				extractMeta: this.props.extractMeta,
				extractText: this.props.extractText,
				imagePDF: this.props.imagePDF,
				imageHTML: this.props.imageHTML,
				annotateText: this.props.tokenizeText,
				translate: this.props.translate,
				allowLSA: this.props.allowLSA,
				createCorpus: this.props.createCorpus,
				semanticAnalysis: this.props.semanticAnalysis,
				collectPasswords: this.props.collectPasswords,
				removeDuplicates: this.props.removeDuplicates
			},
			transport: 'http',
			streams: 'dynamic',
			chunkSize: 'dynamic',
			allowWebWorkers: true
		}, false);
		self.setState({
			inProgress: true
		});
		uploadInstance.on('end', function(error, fileObj){
			console.log('On End File Object: ', fileObj);
		});
		uploadInstance.on('uploaded', function(error, fileObj){
			console.log(fileObj);
			if (fileObj.extension === 'pst'){
				actions.createParsePstJob(self.props.discoveryJobs, fileObj);
			} else if (fileObj.extension === 'zip'){
				actions.createParseZipJob(self.props.discoveryJobs, fileObj);
			console.log('added file ' + fileObj._id + ' to parseZip job queue');
			} else if (fileObj.extension === 'pdf'){
				actions.createExtractTextJob(self.props.discoveryJobs, fileObj);
				actions.createExtractMetaJob(self.props.discoveryJobs, fileObj);
				actions.createConvertHtmlJob(self.props.discoveryJobs, fileObj);
			} else {
				actions.createExtractTextJob(self.props.discoveryJobs, fileObj);
				actions.createExtractMetaJob(self.props.discoveryJobs, fileObj);
				actions.createConvertPdfJob(self.props.discoveryJobs, fileObj);
				actions.createConvertHtmlJob(self.props.discoveryJobs, fileObj);
			}
		});
		uploadInstance.on('error', function (error, fileObj){
			console.log('Error during upload: ' + error);
		});
		uploadInstance.on('progress', function(progress, fileObj){
			console.log('Upload Percentage: ' + progress);
			self.setState({
				progress: progress
			});
		});
		uploadInstance.start();
	}
	render(){
		const { index, file } = this.props;
		return(
			<TableRow key={index} selectable={true}>
				<TableRowColumn>{file.name}</TableRowColumn>
				<TableRowColumn>{file.type}</TableRowColumn>
				<TableRowColumn>{(this.state.inProgress) ? 'uploading' : 'waiting'}</TableRowColumn>
				<TableRowColumn>{this.state.progress}%</TableRowColumn>
			</TableRow>
		);
	}
}

UploadInProgressFileImpl.propTypes = {
	index: PropTypes.number,
	file: PropTypes.any,
	files: PropTypes.array,
	matter: PropTypes.string,
	database: PropTypes.string,
	custodian: PropTypes.string,
	collectionPrefix: PropTypes.string,
	extractMeta: PropTypes.bool,
	extractText: PropTypes.bool,
	imagePDF: PropTypes.bool,
	imageHTML: PropTypes.bool,
	tokenizeText: PropTypes.bool,
	translate: PropTypes.bool,
	allowLSA: PropTypes.bool,
	createCorpus: PropTypes.bool,
	semanticAnalysis: PropTypes.bool,
	collectPasswords: PropTypes.bool,
	removeDuplicates: PropTypes.bool
};

export default UploadInProgressFileImpl;