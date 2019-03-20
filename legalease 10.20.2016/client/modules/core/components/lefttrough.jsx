import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'

import FileTree from './../../filetree';
import FieldList from './../../fb/containers/builder/FieldListContainer'

import core from './../actions';

class LeftTroughImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div >
			{(()=> {
				switch(this.props.leftTroughType){
					case 'FILETREE':
						return <FileTree/>
					case 'FORMFIELDS':
						return <div style={{marginTop:75}}><FieldList/></div>
					case 'THUMBNAILS':
						return <div>This is the Thumbnail View</div>
					case 'HIGHLIGHTS':
						return <div>This is the Highlights View</div>
					default:
						return <p>This is the left trough view</p>
				}
			})()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	leftTroughOpen: state.core.lefttrough.leftTroughOpen,
	leftTroughWidth: state.core.lefttrough.leftTroughWidth,
	leftTroughVisibility: state.core.lefttrough.leftTroughVibility,
	leftTroughType: state.core.lefttrough.leftTroughType
});

const LeftTrough = connect(mapStateToProps)(LeftTroughImpl);

export default LeftTrough;