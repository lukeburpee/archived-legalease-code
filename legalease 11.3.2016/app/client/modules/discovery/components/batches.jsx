import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { MuiDataTable } from './../../datatable';

class Batches extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<div>
			<Paper style={{height:50, position:'relative', top:8, marginLeft:10, width:'30%'}}></Paper>
			<MuiDataTable style={{position:'relative', top:10}} config={this.props.config}/>
			</div>
		);
	}
}

Batches.propTypes = {
  config: PropTypes.object
};

export default Batches;