import React, { Component, PropTypes } from 'react';
import { MuiDataTable } from './../../datatable';

class Documents extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div><MuiDataTable config={this.props.config}/></div>
		);
	}
}

Documents.propTypes = {
  config: PropTypes.object
}

export default Documents;
