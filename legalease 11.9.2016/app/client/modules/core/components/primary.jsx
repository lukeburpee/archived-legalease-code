import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Utilities from './../containers/utilities.jsx';

class Primary extends Component {
	render(){
		return (
			<Paper zDepth={2} style={{height:'inherit', width:'inherit'}}>
				<Utilities/>
				{this.props.content}
			</Paper>
		);
	}
}

export default Primary;