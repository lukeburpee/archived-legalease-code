import React,{ Component, PropTypes } from 'react';
import { grey400, indigo900 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import PDF from './pdf.jsx';
import HTML from './html.jsx';
import core from './../../core/actions';
import actions from './../actions';
import { connect } from 'react-redux';

class DocumentImpl extends Component {
	constructor(props){
		super(props);
		this.onDocumentComplete = this.onDocumentComplete.bind(this);
		this.onPageComplete = this.onPageComplete.bind(this);
	}
	componentDidMount(){
		if (this.props.viewerType === 'pdfview'){
			this.props.dispatch(actions.viewerOpen());
			this.props.dispatch(actions.setViewerDocument(this.props.activeFile, this.props.pages));
		} else {
			this.props.dispatch(actions.viewerClose());
			this.props.dispatch(actions.setViewerDocument(null, null));
		}
		this.props.dispatch(core.rightTroughOpen('FORM', 500));	
	}
	shouldComponentUpdate(nextProps){
		return this.props.activeFile !== nextProps.activeFile;
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.viewerType === 'pdfview' && this.props.viewerType !== 'pdfview'){
			this.props.dispatch(actions.viewerOpen());
			this.props.dispatch(actions.setViewerDocument(nextProps.activeFile, nextProps.pages));
		} else if (nextProps.viewerType !== 'pdfview' && this.props.viewerType === 'pdfview'){
			this.props.dispatch(actions.viewerClose());
			this.props.dispatch(actions.setViewerDocument(null, null));
			this.props.dispatch(actions.setViewerPages(null));
			this.props.dispatch(actions.setViewerPage(null));
		}
	}
	onDocumentComplete(pages){
		this.props.dispatch(actions.setViewerPages(pages));
	}
	onPageComplete(page){
		this.props.dispatch(actions.setViewerPage(page));
	}
	renderFile(){
		const { activeFile, rotation, page, zoom, viewerType } = this.props;
		switch(viewerType){
			case 'pdfview':
				return <PDF file={activeFile} rotate={rotation} scale={zoom} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={page}/>
			case 'htmlview':
				return <HTML/>
			case 'textview':
				return <div></div>
			case 'producedview':
				return <div>produced viewer</div>
			default:
				return <div>default viewer</div>
		}
	}
	render(){
		let file = this.renderFile();
		return(
			<div style={{backgroundColor:grey400, position:'relative', top:'100px', bottom:'auto', width:'inherit', height:'calc(100vh - 216px)', overflowY:'scroll'}}>
				<Paper style={{marginTop:'10px', display:'table', marginRight:'auto', marginLeft:'auto'}}>
					{file}
				</Paper>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	activeFile: state.discovery.currentPdfDocument,
	zoom: state.viewer.zoom,
	rotation: state.viewer.rotation,
	page: state.viewer.page,
	pages: state.viewer.pages,
	viewerType: state.viewer.viewerType
});

const Document = connect(mapStateToProps)(DocumentImpl);

export default Document;