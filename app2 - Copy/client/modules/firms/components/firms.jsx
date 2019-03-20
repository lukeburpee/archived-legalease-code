import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';

export default class Firms extends Component {
	render(){
		return (
			<Paper style={{position: 'fixed', top:100, left:100, bottom:'auto', right:'auto'}}>This is the Firms Page</Paper>
		);
	}
}