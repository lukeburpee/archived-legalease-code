import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import Fab from 'material-ui/FloatingActionButton'

class Avatar extends Component {
	render(){
		return (
			<IconButton style={{height:250, width:250}} iconStyle={{height:200, width:200}}>
				<object type="image/svg+xml" data="/icons/users.svg" />
			</IconButton>
		);
	}
}

export default Avatar;