import React, { Component } from 'react';
import ViewerTypeToolbar from './viewertypetoolbar.jsx';
import ViewerOptionToolbar from './vieweroptiontoolbar.jsx';
import ViewerBottomToolbar from './viewerbottomtoolbar.jsx';
import Document from './document.jsx';

class Viewer extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{width:'inherit', height:'inherit'}}>
				<ViewerTypeToolbar/>
				<ViewerOptionToolbar/>
				<Document/>
				<ViewerBottomToolbar/>
			</div>
		);
	}
}

export default Viewer;