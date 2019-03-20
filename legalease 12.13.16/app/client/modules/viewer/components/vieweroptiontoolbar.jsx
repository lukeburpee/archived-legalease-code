import React,{ Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { indigo900 } from 'material-ui/styles/colors';
import ZoomInIcon from 'material-ui/svg-icons/action/zoom-in';
import ZoomOutIcon from 'material-ui/svg-icons/action/zoom-out';
import RotateLeftIcon from 'material-ui/svg-icons/image/rotate-left';
import RotateRightIcon from 'material-ui/svg-icons/image/rotate-right';
import ThumbNailIcon from 'material-ui/svg-icons/action/thumb-up';
import HighlightIcon from 'material-ui/svg-icons/editor/highlight';
import MarkupIcon from 'material-ui/svg-icons/editor/format-shapes';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import core from './../../core/actions';
import actions from './../actions'
import { connect } from 'react-redux';

class ViewerOptionToolbarImpl extends Component {
	constructor(props){
		super(props);
		this.handleZoomInput = this.handleZoomInput.bind(this);
		this.handleZoomIn = this.handleZoomIn.bind(this);
		this.handleZoomOut = this.handleZoomOut.bind(this);
		this.handleThumbnail = this.handleThumbnail.bind(this);
		this.handleHighlights = this.handleHighlights.bind(this);
		this.handleRotateClockwise = this.handleRotateClockwise.bind(this);
		this.handleRotateCounterClockwise = this.handleRotateCounterClockwise.bind(this);
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
	render(){
		return(
			<Toolbar style={{backgroundColor:indigo900, width:'inherit', position:'absolute', top:50, bottom:'auto', height:'50px'}}>
				<ToolbarGroup style={{marginTop:'16px'}}>
					<ThumbNailIcon color="white" style={{width:24, height:24}} onClick={this.handleThumbnail} />
					<HighlightIcon color="white" style={{width:24, height:24}} onClick={this.handleHighlights} />
				</ToolbarGroup>
				<ToolbarGroup style={{marginTop:'14px'}}>
					<ZoomOutIcon color="white" style={{width:24, height:24}} onClick={this.handleZoomIn}/>
						<TextField 
						id="text-field-zoom" 
						style={{width:60, color:'white'}} 
						onChange={this.handleZoomInput} 
						value={this.props.zoom * 100} 
						inputStyle={{color:'white', fontSize:'100%', width:55}} 
						underlineShow={false}/><div style={{position:'relative', top:10, bottom:'auto', right:15, left:'auto', color:'white', fontSize:24}}>%</div>
					<ZoomInIcon color="white" style={{width:24, height:24}} onClick={this.handleZoomOut}/>
				</ToolbarGroup>
				<ToolbarGroup style={{marginTop:'14px'}}>
					<RotateLeftIcon color={'white'} style={{width:24, height:24}} onClick={this.handleRotateCounterClockwise}/>
					<RotateRightIcon color={'white'} style={{width:24, height:24}} onClick={this.handleRotateClockwise}/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

const mapStateToProps = (state) => ({
	zoom: state.viewer.zoom,
	rotation: state.viewer.rotation,
	leftSidebarOpen: state.core.leftsidebar.leftSidebarOpen,
	leftTroughOpen: state.core.lefttrough.leftTroughOpen
});

const ViewerOptionToolbar = connect(mapStateToProps)(ViewerOptionToolbarImpl);
export default ViewerOptionToolbar;