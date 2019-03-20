import React,{ Component, PropTypes } from 'react';
import {MegadraftEditor, editorStateFromRaw} from 'megadraft';
import { Editor, Html } from 'slate'

class HTML extends Component {
	constructor(props){
		super(props);
		this.state = {editorState: editorStateFromRaw({
			entityMap: {
			},
			blocks: [
			{
				key: "8xut",
				text: "",
				type: "atomic",
				depth: 0,
				inlineStyleRanges: [],
				entityRanges: [],
				data: {
					type: "missing-plugin"
				}
			}]
		})};
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