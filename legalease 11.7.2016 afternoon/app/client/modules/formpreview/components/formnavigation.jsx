import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import LeftArrow from 'material-ui/svg-icons/navigation/chevron-left'
import RightArrow from 'material-ui/svg-icons/navigation/chevron-right'
import FirstDocIcon from 'material-ui/svg-icons/navigation/first-page'
import LastDocIcon from 'material-ui/svg-icons/navigation/last-page'

import discovery from './../../discovery/actions'

class FormNavigationImpl extends Component {
	constructor(props){
		super(props);
		this.goToNextDocument = this.goToNextDocument.bind(this);
		this.goToPreviousDocument = this.goToPreviousDocument.bind(this);
		this.goToFirstDocument = this.goToFirstDocument.bind(this);
		this.goToLastDocument = this.goToLastDocument.bind(this);
		this.goToDocument = this.goToDocument.bind(this);
	}
	goToNextDocument(){
		this.props.dispatch(discovery.nextDocument(this.props.currentDocNumber, this.props.docList));
	}
	goToPreviousDocument(){
		this.props.dispatch(discovery.previousDocument(this.props.currentDocNumber, this.props.docList));
	}
	goToFirstDocument(){
		this.props.dispatch(discovery.firstDocument(this.props.docList));
	}
	goToLastDocument(){
		this.props.dispatch(discovery.lastDocument(this.props.currentDocNumber, this.props.docList));
	}
	goToDocument(event) {
		let docNumber = event.target.value - 1;
		this.props.dispatch(discovery.setCurrentDocument(docNumber, this.props.docList));
	}
	render(){

		return (
			<div style={{color:'white', marginBottom:10, marginRight:10}}>
				<IconButton onTouchTap={this.goToFirstDocument} style={{verticalAlign:'middle', width:'30px'}}><FirstDocIcon color={'white'}/></IconButton>
				<IconButton onTouchTap={this.goToPreviousDocument} style={{verticalAlign:'middle', width:'30px'}}><LeftArrow color={'white'}/></IconButton>
				<TextField underlineShow={false} style={{width:'30px'}} onChange={this.goToDocument} inputStyle={{color:'white'}} value={this.props.currentDocNumber + 1}/>
				of {this.props.totalDocNumber}
				<IconButton onTouchTap={this.goToNextDocument} style={{verticalAlign:'middle', width:'30px'}}><RightArrow color={'white'}/></IconButton>
				<IconButton onTouchTap={this.goToLastDocument} style={{verticalAlign:'middle', width:'30px'}}><LastDocIcon color={'white'}/></IconButton>
			</div>
		);
	}
}

const MapStateToProps = (state) => ({
	totalDocNumber: state.discovery.totalDocumentNumber,
	currentDocNumber: state.discovery.currentDocumentNumber,
	docList: state.discovery.documentLinks
});

const FormNavigation = connect(MapStateToProps)(FormNavigationImpl);

export default FormNavigation