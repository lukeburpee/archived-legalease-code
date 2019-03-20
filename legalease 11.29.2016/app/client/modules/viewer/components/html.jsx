import React,{ Component, PropTypes } from 'react';
import {MegadraftEditor, editorStateFromRaw} from 'megadraft';

class HTML extends Component {
	constructor(props){
		super(props);
		this.state = {editorState: editorStateFromRaw(null)};
		this.onChange = this.onChange.bind(this);
	}
	onChange(editorState){
		this.setState({editorState});
	}
	render(){
		return(
			<MegadraftEditor
				editorState={this.state.editorState}
				onChange={this.onChange}
			/>
		);
	}
}


export default HTML;