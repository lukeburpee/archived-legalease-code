import React, { Component } from 'react'

import FPTopToolbar from './fptoptoolbar.jsx'
import SecondaryFPTopToolbar from './secondaryfptoptoolbar.jsx'
import FPBottomToolbar from './fpbottomtoolbar.jsx'
import FormBody from './formbody.jsx'

class FormPreview extends Component {
	render(){
		return (
			<div>
				<FPTopToolbar/>
				<SecondaryFPTopToolbar/>
				<FormBody/>
				<FPBottomToolbar/>
			</div>
		);
	}
}

export default FormPreview;