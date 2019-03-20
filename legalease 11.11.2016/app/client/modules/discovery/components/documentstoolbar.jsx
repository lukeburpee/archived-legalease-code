import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DocumentViewSelect from './documentviewselect.jsx';

class DocumentsToolbarImpl extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<Toolbar style={{height:50, width:'inherit'}}>
				<DocumentViewSelect/>
			</Toolbar>
		);
	}
}

DocumentsToolbarImpl.propTypes = {
  matters: PropTypes.array
}

export default DocumentsToolbarImpl;