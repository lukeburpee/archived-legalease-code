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
			console.log('uploaded: ', fileObj);
			self.props.dispatch(actions.moveWaitToInProgress(self.props.index));
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
	extractAllMeta: PropTypes.bool,
	extractAllText: PropTypes.bool,
	imageAllPDF: PropTypes.bool,
	imageAllHTML: PropTypes.bool,
	tokenizeText: PropTypes.bool,
	translate: PropTypes.bool,
	allowLSA: PropTypes.bool,
	createCorpus: PropTypes.bool,
	semanticAnalysis: PropTypes.bool,
	collectPasswords: PropTypes.bool,
	removeDuplicates: PropTypes.bool
};

export default InProgressFileImpl;