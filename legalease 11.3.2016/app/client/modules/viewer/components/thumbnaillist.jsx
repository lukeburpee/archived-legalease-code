import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Thumbnail from './thumbnail.jsx'
import { grey800 } from 'material-ui/styles/colors'
import actions from './../actions'

class ThumbnailListImpl extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeFile: this.props.activeFile,
			pages: this.props.pages
		}
		console.log(this.state);
	}
	onDocumentComplete(pages) {
		console.log(pages);
		this.setState({pages});
	}
	onPageComplete(page){
		this.setState({page});
	}
	renderPages(pages){
		console.log(pages);
		let thumbs = [];
		let page;
		for (page = 1; page < pages + 1; page++){
			console.log(page);
			thumbs.push(<Thumbnail key={page} page={page}/>);
		}
		return thumbs;
	}
	onDocumentComplete(pages) {
		this.setState({pages});
	}
	onPageComplete(page){
		this.setState({page});
	}
	render(){
		let thumbs;
		if (this.props.pages){
			thumbs = this.renderPages(this.props.pages);
		}
		return(
			<div style={{backgroundColor:grey800, height:'calc(100vh - 64px)', marginRight: 1, overflowY:'scroll'}}>
				{thumbs}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	activeFile: state.discovery.currentDocument,
	pages: state.viewer.pages
});

const ThumbnailList = connect(mapStateToProps)(ThumbnailListImpl);

export default ThumbnailList;