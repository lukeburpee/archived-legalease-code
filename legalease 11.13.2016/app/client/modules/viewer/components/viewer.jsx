import React, { Component } from 'react';
import PDF from './pdf';
import OfficeDoc from './officedoc.jsx';
import {connect} from 'react-redux';
import { grey400, indigo900 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/RaisedButton';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import PreviousIcon from 'material-ui/svg-icons/image/navigate-before';
import FirstPageIcon from 'material-ui/svg-icons/navigation/first-page';
import LastPageIcon from 'material-ui/svg-icons/navigation/last-page';
import ZoomInIcon from 'material-ui/svg-icons/action/zoom-in';
import ZoomOutIcon from 'material-ui/svg-icons/action/zoom-out';
import RotateLeftIcon from 'material-ui/svg-icons/image/rotate-left'
import RotateRightIcon from 'material-ui/svg-icons/image/rotate-right'
import ThumbNailIcon from 'material-ui/svg-icons/action/thumb-up';
import HighlightIcon from 'material-ui/svg-icons/editor/highlight';
import MarkupIcon from 'material-ui/svg-icons/editor/format-shapes';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import core from './../../core/actions';
import actions from './../actions'

class ViewerImpl extends Component {
	constructor(props){
		super(props);
		this.onDocumentComplete = this.onDocumentComplete.bind(this);
		this.onPageComplete = this.onPageComplete.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleBeginning = this.handleBeginning.bind(this);
		this.handleGoToPage = this.handleGoToPage.bind(this);
		this.handleZoomInput = this.handleZoomInput.bind(this);
		this.handleZoomIn = this.handleZoomIn.bind(this);
		this.handleZoomOut = this.handleZoomOut.bind(this);
		this.handleThumbnail = this.handleThumbnail.bind(this);
		this.handleHighlights = this.handleHighlights.bind(this);
		this.handleRotateClockwise = this.handleRotateClockwise.bind(this);
		this.handleRotateCounterClockwise = this.handleRotateCounterClockwise.bind(this);
	}
	componentDidMount(){
		let fileType = getFileType(this.props.activeFile);
		console.log(fileType);
		this.props.dispatch(actions.viewerOpen());
		if (fileType !== 'pdf'){
			Meteor.call('doc.convert.pdf', this.props.activeFile, 
				function(error, response){
					if (error){
						console.log(error)
					} else { 
						console.log(response.fileOutputName);
						this.props.dispatch(actions.setViewerDocument(response.fileOutputName)); 
					}
				});
		} else {
			this.props.dispatch(actions.setViewerDocument(this.props.activeFile, this.props.pages));
		}
		
	}
	componentWillReceiveProps(nextProps){
		let fileType = getFileType(nextProps.activeFile);
		if (fileType !== 'pdf'){
			Meteor.call('doc.convert.pdf', nextProps.activeFile, 
				function(error, response){
					if (error){
						console.log(error);
					} else {
						console.log(response.fileOutputName);
						this.props.dispatch(actions.setViewerDocument(response.fileOutputName));
					}
				});
		} else {
			this.props.dispatch(actions.setViewerDocument(nextProps.activeFile, nextProps.pages));
		}
	}
	onDocumentComplete(pages){
		this.props.dispatch(actions.setViewerPages(pages));
	}
	onPageComplete(page){
		this.props.dispatch(actions.setViewerPage(page));
	}
	handlePrevious(){
		this.props.dispatch(actions.previousViewerPage(this.props.page));
	}
	handleNext(){
		this.props.dispatch(actions.nextViewerPage(this.props.page));
	}
	handleBeginning(){
		this.props.dispatch(actions.setViewerPage(1));
	}
	handleEnd(){
		this.props.dispatch(actions.setViewerPage(this.props.pages));
	}
	handleGoToPage(event){
		this.props.dispatch(actions.setViewerPage(Number(event.target.value)));
	}
	handleZoomIn(){
		this.props.dispatch(actions.zoomIn(this.props.zoom));
	}
	handleZoomOut(){
		this.props.dispatch(actions.zoomOut(this.props.zoom));
	}
	handleZoomInput(event){
		let zoom = event.target.value/100;
		this.props.dispatch(actions.setZoom(zoom));
	}
	handleRotateClockwise(){
		this.props.dispatch(actions.rotateClockwise(this.props.rotation));
	}
	handleRotateCounterClockwise(){
		this.props.dispatch(actions.rotateCounterClockwise(this.props.rotation));
	}
	handleThumbnail(){
		let open = this.props.leftTroughOpen;
		if (open){
			this.props.dispatch(core.leftTroughClose());
		} else {
			this.props.dispatch(core.leftTroughOpen('THUMBNAILS', 400));
		}
	}
	handleHighlights(){
		let open = this.props.leftTroughOpen;
		if (open){
			this.props.dispatch(core.leftTroughClose());
		} else {
			this.props.dispatch(core.leftTroughOpen('HIGHLIGHTS', 300));
		}
	}
	renderPagination(page, pages){
		let previousButton = <PreviousIcon style={{width:42, height:42}} onClick={this.handlePrevious} color="white"/>;
		let nextButton = <NextIcon style={{width:42, height:42}} onClick={this.handleNext} color="white"/>;
		let firstPageButton = <FirstPageIcon style={{width:42, height:42}} onClick={this.handleBeginning} color="white"/>;
		let lastPageButton = <LastPageIcon style={{width:42, height:42}} onClick={this.handleEnd} color="white"/>;
		if (page === 1){
			firstPageButton = <FirstPageIcon style={{width:42, height:42}} color="white"/>;
			previousButton = <PreviousIcon style={{width:42, height:42}} color="white"/>;
		}
		if (page === pages){
			lastPageButton = <LastPageIcon style={{width:42, height:42}} color="white"/>;
			nextButton = <NextIcon style={{width:42, height:42}} color="white"/>;
		}
		return (
			<Toolbar style={{backgroundColor:indigo900, position:'absolute', bottom:0, top:'auto', width:'inherit'}}>
				<ToolbarGroup>
					<MarkupIcon style={{marginTop:15}} color={'white'}/>
					<SelectField style={{marginLeft:10, marginTop:10}}>
						<MenuItem></MenuItem>
						<MenuItem></MenuItem>
					</SelectField>
				</ToolbarGroup>
				<ToolbarGroup>
				{firstPageButton}
				{previousButton}
				<TextField 
					id="text-field-page" 
					style={{width:40, color:'white'}} 
					onChange={this.handleGoToPage} 
					value={this.props.page} 
					inputStyle={{color:'white', fontSize:'120%'}} 
					underlineShow={false}/>
					<div style={{
						color:'white', 
						marginLeft:5, 
						marginRight:5, 
						marginTop:12, 
						fontSize:'150%'
					}}>of {pages}</div>
				{nextButton}
				{lastPageButton}
				</ToolbarGroup>
				<ToolbarGroup/>
			</Toolbar>
		);
	}
	renderTopToolbar(){
		return (
			<Toolbar style={{backgroundColor:indigo900, width:'inherit', position:'absolute', top:0, bottom:'auto', height:'70px'}}>
				<ToolbarGroup style={{marginTop:'16px'}}>
					<ThumbNailIcon color="white" style={{width:36, height:36}} onClick={this.handleThumbnail} />
					<HighlightIcon color="white" style={{width:36, height:36}} onClick={this.handleHighlights} />
				</ToolbarGroup>
				<ToolbarGroup style={{marginTop:'14px'}}>
					<ZoomOutIcon color="white" style={{width:42, height:42}} onClick={this.handleZoomIn}/>
						<TextField 
						id="text-field-zoom" 
						style={{width:60, color:'white'}} 
						onChange={this.handleZoomInput} 
						value={this.props.zoom * 100} 
						inputStyle={{color:'white', fontSize:'120%', width:55}} 
						underlineShow={false}/><div style={{position:'relative', top:10, bottom:'auto', right:15, left:'auto', color:'white', fontSize:24}}>%</div>
					<ZoomInIcon color="white" style={{width:42, height:42}} onClick={this.handleZoomOut}/>
				</ToolbarGroup>
				<ToolbarGroup style={{marginTop:'14px'}}>
					<RotateLeftIcon color={'white'} style={{width:42, height:42}} onClick={this.handleRotateCounterClockwise}/>
					<RotateRightIcon color={'white'} style={{width:42, height:42}} onClick={this.handleRotateClockwise}/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
	renderFile() {
		const { activeFile } = this.props;
		return <PDF file={this.props.activeFile} rotate={this.props.rotation} scale={this.props.zoom} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.props.page}/>
	}
	render(){
		let pagination = null;
		if (this.props.pages){
			pagination = this.renderPagination(this.props.page, this.props.pages);
		}
		let file = this.renderFile();
		return (
			<div style={{width:'inherit', height:'inherit'}}>
				{this.renderTopToolbar()}
				<div style={{backgroundColor:grey400, position:'relative', top:'70px', bottom:'auto', width:'inherit', height:'calc(100vh - 186px)', overflowY:'scroll'}}>
				<Paper style={{marginTop:'10px', display:'table', marginRight:'auto', marginLeft:'auto'}}>
					{file}
				</Paper>
				</div>
				{pagination}
			</div>
		);
	}
}

const getFileType = (file) => {
	let period = file.indexOf('.');
	let type = file.slice(period + 1,);
	console.log(type);
	return type;
}

const mapStateToProps = (state) => ({
	activeFile: state.discovery.currentDocument,
	zoom: state.viewer.zoom,
	zoomDisplay: state.viewer.zoomDisplay,
	rotation: state.viewer.rotation,
	page: state.viewer.page,
	pages: state.viewer.pages,
	leftSidebarOpen: state.core.leftsidebar.leftSidebarOpen,
	leftTroughOpen: state.core.lefttrough.leftTroughOpen
});

const Viewer = connect(mapStateToProps)(ViewerImpl);

export default Viewer;