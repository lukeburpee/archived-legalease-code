import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import BatchesViewSelect from './batchesviewselect.jsx';

class BatchesToolbarImpl extends Component {
  constructor(props){
    super(props);
  }
	render(){
		return (
			<Toolbar style={{height:50, width:'inherit'}}>
				<BatchesViewSelect/>
			</Toolbar>
		);
	}
}

BatchesToolbarImpl.propTypes = {
  matters: PropTypes.array
}

export default BatchesToolbarImpl;