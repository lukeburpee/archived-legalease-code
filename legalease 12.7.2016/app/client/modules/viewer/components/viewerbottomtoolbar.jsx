import React,{ Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { indigo900 } from 'material-ui/styles/colors';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import PreviousIcon from 'material-ui/svg-icons/image/navigate-before';
import FirstPageIcon from 'material-ui/svg-icons/navigation/first-page';
import LastPageIcon from 'material-ui/svg-icons/navigation/last-page';
import MarkupIcon from 'material-ui/svg-icons/editor/format-shapes';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import core from './../../core/actions';
import actions from './../actions';
import { connect } from 'react-redux';

class ViewerBottomToolbarImpl extends Component {
	constructor(props){
		super(props);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleBeginning = this.handleBeginning.bind(this);
		this.handleGoToPage = this.handleGoToPage.bind(this);
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
			<Toolbar style={{backgroundColor:indigo900, position:'absolute', bottom:0, top:'auto', width:'100%'}}>
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
	render(){
		let pagination = null;
		if (this.props.pages){
			pagination = this.renderPagination(this.props.page, this.props.pages);
		} else {
			pagination = this.renderPagination(0, 0);
		}
		return(
			<div>
				{pagination}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.viewer.page,
	pages: state.viewer.pages
});

const ViewerBottomToolbar = connect(mapStateToProps)(ViewerBottomToolbarImpl);

export default ViewerBottomToolbar;