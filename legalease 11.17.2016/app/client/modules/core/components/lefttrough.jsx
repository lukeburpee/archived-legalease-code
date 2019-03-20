import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'

import { FileTree } from './../../filetree';
import { ThumbnailList } from './../../viewer/components'
import FieldList from './../../fb/containers/builder/FieldListContainer'
import UploadQueue from './../../processing/containers/uploadqueue.jsx'

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
						return <div><ThumbnailList/></div>
					case 'HIGHLIGHTS':
						return <div>This is the Highlights View</div>
					case 'UPLOADQUEUE':
						return <UploadQueue/>
					default:
						return <p>This is the left trough view</p>
				}
			})()}
			</div>
		);
	}
}

export default LeftTroughImpl;