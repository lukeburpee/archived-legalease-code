import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import FileIcon from './fileicon.jsx';
import actions from './../actions';

class UploadFileImpl extends Component {
	constructor(props){
		super(props);
		this.state = {};
		this.handleClear = this.handleClear.bind(this);
	}
	componentDidMount(){
		this.setState({
			uploadStatus: this.props.uploadStatus,
			extractionStatus: this.props.extractionStatus,
			imagingStatus: this.props.imagingStatus,
			analysisStatus: this.props.analysisStatus
		});
	}
	componentWillReceiveProps(nextProps){
		const { uploadStatus, extractionStatus, imagingStatus, analysisStatus } = nextProps;
		this.setState({
			uploadStatus: uploadStatus,
			extractionStatus: extractionStatus,
			imagingStatus: imagingStatus,
			analysisStatus: analysisStatus
		});
	}
	handleClear(){
		console.log(this.props.index);
		this.props.dispatch(actions.removeFile(this.props.index))
	}
	render(){
		const { file, index } = this.props;
		const { uploadStatus, extractionStatus, imagingStatus, analysisStatus } = this.state;
		return (
			<GridTile
				key={index}
				titlePosition='top'
				title={file.name}
				actionIcon={<IconButton onTouchTap={this.handleClear}><ClearIcon/></IconButton>}
				cols={2}
				rows={1}>
						<div>
						<IconButton style={{marginTop:50, position:'relative', left:0, right:'auto', top:'auto', bottom:'auto'}} iconStyle={IconStyle}>
							<FileIcon fileType={file.type} iconStyle={IconStyle}/>
						</IconButton>
						</div>
						<div style={{height:100, width:170, position:'relative', bottom:110, left:100, top:'auto', right:'auto'}}>
						<List style={{width:170}}>
							<ListItem disabled={true} style={{height:25}} primaryText={"Uploaded: "+uploadStatus}/>
							<ListItem disabled={true} style={{height:25}} primaryText={"Extracted: "+extractionStatus}/>
							<ListItem disabled={true} style={{height:25}} primaryText={"Imaged: "+imagingStatus}/>
							<ListItem disabled={true} style={{height:25}} primaryText={"Analyzed: "+analysisStatus}/>
						</List>
						</div>
			</GridTile>
		);
	}
}

const IconStyle = {
	width:75,
	height:75
}

const mapStateToProps = (state) => ({
	files: state.processing.uploadQueue
});

UploadFileImpl.propTypes = {
	index: PropTypes.number,
	file: PropTypes.any,
	uploadStatus: PropTypes.string,
	extractionStatus: PropTypes.string,
	imagingStatus: PropTypes.string,
	analysisStatus: PropTypes.string,
	files: PropTypes.array
};

const UploadFile = connect(mapStateToProps)(UploadFileImpl);

export default UploadFileImpl;
