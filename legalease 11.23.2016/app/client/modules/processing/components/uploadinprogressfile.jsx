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
	uploadFile(){
		let self = this;
		"use strict";
		let uploadInstance = this.props.uploadCollection.insert({
			file: this.props.file,
			meta: {
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
			console.log('adding file ' + fileObj._id + ' to extractText job queue');
				const Job1 = new Job(self.props.discoveryJobs, 'extractText', 
					{
						_id:fileObj._id, 
						name: fileObj.name, 
						type:fileObj.type, 
						annotateText: fileObj.meta.annotateText,
						translate: fileObj.meta.translate,
						allowLSA: fileObj.meta.allowLSA,
						createCorpus: fileObj.meta.createCorpus,
						semanticAnalysis: fileObj.meta.semanticAnalysis,
						database: fileObj.meta.database
					});
				Job1.priority('normal')
				Job1.retry({retries:50, wait:60000})
				Job1.save();
			console.log('added file ' + fileObj._id + ' to extractText job queue');

			console.log('adding file ' + fileObj._id + ' to extractMeta queue');
				const Job2 = new Job(self.props.discoveryJobs, 'extractMeta',
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database});
				Job2.priority('normal')
				Job2.retry({retries:50, wait:60000})
				Job2.save();
			console.log('added file ' + fileObj._id + ' to extractMeta queue');

			console.log('adding file ' + fileObj._id + ' to imageHTML queue');
				const Job3 = new Job(self.props.discoveryJobs, 'convertHtml', 
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database});
				Job3.priority('normal')
				Job3.retry({retries:50, wait:60*1000})
				Job3.save();
			console.log('added file ' + fileObj._id + ' to imageHTML job queue');

			console.log('adding file ' + fileObj._id + ' to imagePDF queue');
				const Job4 = new Job(self.props.discoveryJobs, 'convertPdf',
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database});
				Job4.priority('normal')
				Job4.retry({retries:50, wait:60*1000})
				Job4.save();
			console.log('added file ' + fileObj._id + ' to imagePDF job queue');
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