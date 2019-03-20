import React, { Component, PropTypes } from 'react';
import DocumentsToolbar from './documentstoolbar.jsx';
import { MuiDataTable } from './../../datatable';

class Documents extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div>
			<DocumentsToolbar/>
			<MuiDataTable style={{position:'relative', top:20}} config={this.props.config}/>
			</div>
		);
	}
}

Documents.propTypes = {
  config: PropTypes.object
}

export default Documents;
