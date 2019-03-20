import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GridTile } from 'material-ui/GridList';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import actions from './../actions';
import UnknownFileTypeIcon from 'material-ui/svg-icons/editor/insert-drive-file';

class ProcessingFileImpl extends Component {
	constructor(props){
		super(props);
		this.state = {};
		this.handleClear = this.handleClear.bind(this);
		this.handleFileClick = this.handleFileClick.bind(this);
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
	handleIcon(type){
		if (excelTypes.indexOf(type) !== -1){
			return <object type="image/svg+xml" data="/icons/fileTypes/excel.large.svg" />
		} else if (powerPointTypes.indexOf(type) !== -1){
			return <object type="image/svg+xml" data="/icons/fileTypes/powerpoint.large.svg" />
		} else if (wordTypes.indexOf(type) !== -1){
			return <object type="image/svg+xml" data="/icons/fileTypes/word.large.svg" />
		} else if (pdfTypes.indexOf(type) !== -1){
			return <object type="image/svg+xml" data="/icons/fileTypes/pdf.svg" />
		} else {
			return <UnknownFileTypeIcon style={iconStyle}/>
		}
	}
	handleFileClick(){
		this.props.dispatch(actions.handleFileInfo(this.props.file));
	}
	render(){
		const { file, index } = this.props;
		const { uploadStatus, extractionStatus, imagingStatus, analysisStatus } = this.state;
		const icon = this.handleIcon(String(file.type));
		return (
			<GridTile
				key={index}
				titlePosition='top'
				title={file.name}
				style={{color:'white'}}
				actionIcon={<IconButton iconStyle={{color:'white'}} onTouchTap={this.handleClear}><ClearIcon/></IconButton>}
				cols={2}
				rows={1}>
						<div>
						<IconButton onTouchTap={this.handleFileClick} style={{marginTop:50, position:'relative', left:0, right:'auto', top:'auto', bottom:'auto'}} iconStyle={iconStyle}>
							{icon}
						</IconButton>
						</div>
						<div style={{height:100, width:170, position:'relative', bottom:110, left:100, top:'auto', right:'auto'}}>
						<List style={{width:170}}>
							<ListItem disabled={true} style={{color: 'white', height:25}} primaryText={"Uploaded: "+uploadStatus}/>
							<ListItem disabled={true} style={{color: 'white', height:25}} primaryText={"Extracted: "+extractionStatus}/>
							<ListItem disabled={true} style={{color: 'white', height:25}} primaryText={"Imaged: "+imagingStatus}/>
							<ListItem disabled={true} style={{color: 'white', height:25}} primaryText={"Analyzed: "+analysisStatus}/>
						</List>
						</div>
			</GridTile>
		);
	}
}

const iconStyle = {
	width:75,
	height:75
}

const mapStateToProps = (state) => ({
	files: state.processing.uploadQueue
});

ProcessingFileImpl.propTypes = {
	index: PropTypes.number,
	file: PropTypes.any,
	uploadStatus: PropTypes.string,
	extractionStatus: PropTypes.string,
	imagingStatus: PropTypes.string,
	analysisStatus: PropTypes.string,
	files: PropTypes.array
};

const ProcessingFile = connect(mapStateToProps)(ProcessingFileImpl);

export default ProcessingFileImpl;

const pdfTypes = [
	'application/pdf'
];

const powerPointTypes = [
	'application/mspowerpoint',
	'application/vnd.ms-powerpoint',
	'application/vnd.ms-powerpoint',
	'application/mspowerpoint',
	'application/vnd.ms-powerpoint',
	'application/mspowerpoint',
	'application/powerpoint',
	'application/vnd.ms-powerpoint',
	'application/x-mspowerpoint',
	'application/mspowerpoint',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation'
];

const powerPointExtensions = [
'.pot',
'.ppa',
'.pps',
'.ppt',
'.ppz'
];

const excelTypes = [
	'application/excel',
	'application/excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml-template',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml'
];

const wordTypes = [
	'application/msword'
];

const xmlTypes = [
	'application/xml',
	'text/xml'
];

const xmlExtensions = [
	'.xml'
];

const wordExtensions = [
	'.w6w',
	'.wiz',
	'.word',
	'.doc',
	'.dot'
];

const wordPerfectTypes = [
	'application/wordperfect',
	'application/wordperfect',
	'application/wordperfect6.0',
	'application/wordperfect',
	'application/wordperfect'
];

const outlookExtensions = [
	'.pst',
	'.ost'
];

const outlookTypes = [
	'application/vnd.ms-outlook'
];