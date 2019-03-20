import React, { Component, PropTypes } from 'react';
import { MuiDataTable } from './../../datatable';

class Batches extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div><MuiDataTable config={this.props.config}/></div>
		);
	}
}

Batches.propTypes = {
  config: PropTypes.object
};

export default Batches;