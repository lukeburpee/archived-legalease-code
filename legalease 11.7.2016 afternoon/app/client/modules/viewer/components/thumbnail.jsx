import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import PDF from './pdf.jsx'

import actions from './../actions'

class ThumbnailImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			file: this.props.file,
			page: this.props.page
		}
		this.onDocumentComplete = this.onDocumentComplete.bind(this);
		this.onPageComplete = this.onPageComplete.bind(this);
		this.handleTouchTap = this.handleTouchTap.bind(this);
	}
	onDocumentComplete(pages){
		this.setState({page: this.state.page, pages});
	}
	onPageComplete(page){
		this.setState({page});
	}
	handleTouchTap(){
		this.props.dispatch(actions.setViewerPage(this.props.page));
	}
	render(){
		return (
			<Paper onTouchTap={this.handleTouchTap} style={{marginTop:25, marginBottom:25, marginLeft:25, marginRight:25}}>
				<PDF file={this.props.file} page={this.props.page} scale={.4} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} scale={.5}/>
			</Paper>
		);
	}
}

ThumbnailImpl.propTypes = {
	file: PropTypes.any,
	pages: PropTypes.number,
	page: PropTypes.number,
}

const mapStateToProps = (state) => ({
	file: state.viewer.activeFile
});

const Thumbnail = connect(mapStateToProps)(ThumbnailImpl);
export default Thumbnail;