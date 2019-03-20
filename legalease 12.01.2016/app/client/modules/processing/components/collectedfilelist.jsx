import React,{ Component, PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CollectedFilesToolbar from './collectedfilestoolbar.jsx';
import { connect } from 'react-redux';
import { composeAll, useDeps, composeWithTracker } from 'mantra-core';

class CollectedFileListImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			files: []
		};
	}
	componentDidMount(){
		this.setState({
			files: this.props.files
		});
	}
	componentWillReceiveProps(nextProps, nextState){
		this.setState({
			files: nextProps.files
		});
	}
	renderOriginalFiles(){
		const { files } = this.state;
		return files.map((file, i) => (
			<TableRow key={i}>				
				<TableRowColumn><a href={this.props.DiscoveryFiles.findOne({_id:file._id}).link('html') + '?download=true'} target="_blank">Link</a></TableRowColumn>
				<TableRowColumn><a href={this.props.DiscoveryFiles.findOne({_id:file._id}).link('pdf') + '?download=true'} target="_blank">Link</a></TableRowColumn>
				<TableRowColumn>{file.name}</TableRowColumn>
			</TableRow>
		));
	}
	render(){
		return(
		<div style={{position:'absolute', bottom:0, top:'auto', height:'50vh'}}>
			<CollectedFilesToolbar/>
			<Table
				height={'calc(50vh - 110px)'}
				style={{overflowY:'scroll'}}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Viewer</TableHeaderColumn>
						<TableHeaderColumn>Pdf</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{this.renderOriginalFiles()}
				</TableBody>
			</Table>
		</div>
		);
	}
}
CollectedFileListImpl.propTypes = {
	files: PropTypes.array,
	DiscoveryFiles: PropTypes.any
};

function composer({context}, onData) {
	const { DiscoveryFiles } = context();
	if (Meteor.subscribe('discoveryfiles.default.all').ready()){
		const files = DiscoveryFiles.find().fetch();
		onData(null, {files, DiscoveryFiles});
	};
};

export default composeAll(
	composeWithTracker(composer),
	useDeps())(CollectedFileListImpl);