import React,{ Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableColumn, TableRow } from 'material-ui/Table';
import { GridList, GridTile } from 'material-ui/GridList';
import UploadForm from './../containers/uploadform.jsx';
import UploadInProgress from './../containers/uploadinprogress.jsx';
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
				initiallyExpanded={false}>
				<CardHeader
					title="Upload Progress"
					actAsExpander={true}
					showExpandableButton={true}/>
				<CardText 
					expandable={true}>
				<GridList
					cellHeight={180}
					cols={2}>
				<GridTile
					cols={2}
					rows={2}>
					<UploadInProgress/>
				</GridTile>
				</GridList>
				</CardText>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	uploadQueue: state.processing.uploadQueue
});

const UploadSection = connect(mapStateToProps)(UploadSectionImpl);

export default UploadSection;