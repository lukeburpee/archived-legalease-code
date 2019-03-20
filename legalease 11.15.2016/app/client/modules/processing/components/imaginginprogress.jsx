import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

class ImagingInProgressImpl extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	componentWillMount(){
		this.setState({
			htmlJobs: this.props.htmlJobs,
			pdfJobs: this.props.pdfJobs
		});
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			htmlJobs: nextProps.htmlJobs,
			pdfJobs: nextProps.pdfJobs
		});
	}
	renderHtmlInProgress(){
		return this.state.htmlJobs.map((job, i) => (
			<TableRow key={i}>
				<TableRowColumn>{job.data._id}</TableRowColumn>
				<TableRowColumn>{job.status}</TableRowColumn>
			</TableRow>
		))
	}
	renderPdfInProgress(){
		return this.state.pdfJobs.map((job, i) => (
			<TableRow key={index}>
				<TableRowColumn>{job.data._id}</TableRowColumn>
				<TableRowColumn>{job.status}</TableRowColumn>
			</TableRow>
		))
	}
	render(){
		return(
			<Paper>
			<Table height={'inherit'} style={{width:'inherit'}}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>
							Name
						</TableHeaderColumn>
						<TableHeaderColumn>
							Status
						</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
				{this.renderHtmlInProgress()}
				{this.renderPdfInProgress()}
				</TableBody>
			</Table>
			</Paper>
		);
	}
}

export function composer({context}, onData) {
	const { ConvertHTMLJobs, ConvertPDFJobs } = context();
	if (Meteor.subscribe('all.convert.html.jobs').ready()){
		const htmlJobs = ConvertHTMLJobs.find().fetch();
		onData(null, {htmlJobs});
	};
	if (Meteor.subscribe('all.convert.pdf.jobs').ready()){
		const pdfJobs = ConvertPDFJobs.find().fetch();
		onData(null, {pdfJobs});
	}
};

export default composeAll(
	composeWithTracker(composer),
	useDeps())(ImagingInProgressImpl);