import React,{ Component, PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';

import actions from './../actions';

class InProgressFileImpl extends Component {
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
				tokenizeText: this.props.tokenizeText,
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
			if (error) { console.log(error) };
			console.log('uploaded: ', fileObj);
				console.log('adding file ' + fileObj._id + ' to extractText job queue');
				const Job1 = new Job(self.props.extractTextJobs, 'extractText', 
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database}
				);
				Job1.priority('normal')
				Job1.retry({retries:5, wait: 2*60*1000})
				Job1.delay(1*60*1000)
				let textJobResult = Job1.save();
				console.log('extract text job created');
				console.log('adding file ' + fileObj._id + ' to extractMeta queue');
				const Job2 = new Job(self.props.extractMetaJobs, 'extractMeta',
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database}
				);
				Job2.priority('normal')
				Job2.retry({retries:5, wait: 2*60*1000})
				Job2.delay(1*60*1000)
				let metaJobResult = Job2.save();
				console.log('extract meta job created');
				console.log('added file ' + fileObj._id + ' to extractMeta job queue');
				console.log('adding file ' + fileObj._id + ' to imageHTML queue');
				  const Job3 = new Job(self.props.convertHtmlJobs, 'convertHtml', 
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database}
				  );
				  Job3.priority('normal')
				  Job3.retry({retries:5, wait: 2*60*1000})
				  Job3.delay(1*60*1000)
				  let htmlJobResult = Job3.save();
				  console.log('convert html job created');
				  console.log('added file ' + fileObj._id + ' to imageHTML job queue');
				console.log('adding file ' + fileObj._id + ' to imagePDF queue');
				const Job4 = new Job(self.props.convertPdfJobs, 'convertPdf',
					{_id:fileObj._id, name: fileObj.name, type:fileObj.type, database: fileObj.meta.database}
				);
				Job4.priority('normal')
				Job4.delay(1*60*1000)
				Job4.retry({retries:5, wait: 2*60*1000})
				let pdfJobResult = Job4.save();
				console.log('convert pdf job created');
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
			<TableRow key={index}>
				<TableRowColumn>{file.name}</TableRowColumn>
				<TableRowColumn>{this.state.progress}%</TableRowColumn>
				<TableRowColumn>action</TableRowColumn>
			</TableRow>
		);
	}
}

InProgressFileImpl.propTypes = {
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

export default InProgressFileImpl;