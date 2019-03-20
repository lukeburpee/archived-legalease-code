import React,{ Component } from 'react';
import DocPage from './../../interface/components/docpage';
import Paper from 'material-ui/Paper';
import { Editor } from 'slate';

class Document extends Component {
	constructor(props){
		super(props);
		this.state = {
			pageTop: this.props.pageTop,
			pageBottom: this.props.pageBottom,
			pageLeft: this.props.pageLeft,
			pageRight: this.props.pageRight,
			editor: this.props.editor
		}
	}
	onEditorChange = (state) => {
		this.setState({state});
	}
	onEnterKey = (event, data, state) => {

	}
	render(){
		return(
			<div style={{margin:'auto'}}>
				<DocPage size={'letter'} device={null} zoom={100}>
					<div style={{paddingTop:this.state.pageTop, paddingBottom:this.state.pageBottom, paddingLeft:this.state.pageLeft, paddingRight:this.state.pageRight}}>
						<Editor state={this.state.editor} onChange={this.onEditorChange}/>
					</div>
				</DocPage>
			</div>
		);
	}
} 

export default Document;