import React,{ Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableHeader, TableBody, TableColumn, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

class ImagingInProgressImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			imagingJobs: this.props.imagingJobs
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			imagingJobs: nextProps.imagingJobs
		});
	}
	renderImagingJobs(){
		return this.props.imagingJobs.map((job, i) => (
			<TableRow>
				<TableRowColumn>
					{job.data.name}
				</TableRowColumn>
				<TableRowColumn>
					{job.type}
				</TableRowColumn>
				<TableRowColumn>
					{job.status}
				</TableRowColumn>
				<TableRowColumn>
					{job.progress}
				</TableRowColumn>
			</TableRow>
		));
	}
	render(){
		return(
			<Paper style={{margin:10}}>
			<Table height={'inherit'} style={{width:'100%'}}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>
							Name
						</TableHeaderColumn>
						<TableHeaderColumn>
							Type
						</TableHeaderColumn>
						<TableHeaderColumn>
							Status
						</TableHeaderColumn>
						<TableHeaderColumn>
							Complete
						</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody striped={true} style={{overflowY:'scroll'}}>
					{this.renderImagingJobs()}
				</TableBody>
			</Table>
			</Paper>
		);
	}
}

ImagingInProgressImpl.propTypes = {
	imagingJobs: PropTypes.array
};

export const composer = ({context}, onData) => {
	const { Meteor, DiscoveryJobs } = context();
	if (Meteor.subscribe('all.conversion.jobs').ready()){
		const imagingJobs = DiscoveryJobs.find().fetch();
		onData(null, { imagingJobs });
	}
}

export default composeAll(
	composeWithTracker(composer),
	useDeps())(ImagingInProgressImpl);