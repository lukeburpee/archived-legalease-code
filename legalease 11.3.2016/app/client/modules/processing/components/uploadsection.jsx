import React,{ Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import { GridList, GridTile } from 'material-ui/GridList';
import ProcessingForm from './../containers/processingform.jsx';
import UploadInProgressTable from './../containers/uploadinprogresstable.jsx';
import UploadWaitingTable from './../containers/uploadwaitingtable.jsx';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import actions from './../actions';

class UploadSectionImpl extends Component {
	constructor(props){
		super(props);
		this.startAllUploads = this.startAllUploads.bind(this);
	}
	startAllUploads(){
		this.props.dispatch(actions.startAll());
	}
	render(){
		return(
			<Card 
				style={{margin:10, padding:5}}
				initiallyExpanded={true}>
				<CardHeader
					title="Upload Section"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText 
					expandable={true}>
				<GridList
					cellHeight={180}
					cols={2}>
				<GridTile
					style={{overflowY:'scroll'}}
					cols={1}
					rows={2}>
					<ProcessingForm/>
				</GridTile>
				<GridTile
					cols={1}
					rows={2}>
					<Card style={{height:'200px', marginBottom:10}} initiallyExpanded={true}>
						<CardHeader title="In Progress" actAsExpander={true} showExpandableButton={true}/>
						<CardText expandable={true}>
						<UploadInProgressTable/>
						</CardText>
					</Card>
					<Card style={{height:'200px', marginBottom:10}} initiallyExpanded={false}>
						<CardHeader title="Waiting" actAsExpander={true} showExpandableButton={true}/>
						<CardText expandable={true}>
						<UploadWaitingTable/>
						</CardText>
					</Card>
				</GridTile>
				</GridList>
				</CardText>
				<CardActions>
					<FlatButton label="Upload Selected"/>
					<FlatButton onTouchTap={this.startAllUploads} label="Upload All"/>
					<FlatButton label="Pause Selected"/>
					<FlatButton label="Pause All"/>
					<FlatButton label="Cancel Selected"/>
					<FlatButton label="Cancel All"/>
				</CardActions>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});

const UploadSection = connect(mapStateToProps)(UploadSectionImpl);

export default UploadSection;