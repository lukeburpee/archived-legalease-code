import React, { Component } from 'react'
import { grey800 } from 'material-ui/styles/colors'


class FormBody extends Component {
	render(){
		return(
			<div style={{backgroundColor:grey800, position:'absolute', top:118, width:'100%', height:'calc(100vh - 230px)', overflowY:'scroll'}}></div>
		);
	}
}

export default FormBody;