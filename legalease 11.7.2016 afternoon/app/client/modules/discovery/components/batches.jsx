import React, { Component, PropTypes } from 'react';
import BatchesToolbar from './batchestoolbar.jsx';
import { MuiDataTable } from './../../datatable';

class Batches extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div>
			<BatchesToolbar/>
			<MuiDataTable style={{position:'relative', top:10}} config={this.props.config}/>
			</div>
		);
	}
}

Batches.propTypes = {
  config: PropTypes.object
};

export default Batches;