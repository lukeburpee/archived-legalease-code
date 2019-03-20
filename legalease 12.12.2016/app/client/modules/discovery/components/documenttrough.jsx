import React,{ Component, PropTypes } from 'react';
import { FileTree } from './../../filetree';
import MattersList from './../../matters/components/matterslist';
import {connect} from 'react-redux';

class DocumentTroughImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				{(this.props.matter === '') ? <MattersList matters={this.props.matterList}/> : <FileTree matter={this.props.matter}/>}
			</div>
		);
	}
}

DocumentTroughImpl.propTypes = {
	matter: PropTypes.string,
	matterList: PropTypes.array
}

const mapStateToProps = (state) => ({
	matter: state.matters.selected,
	matterList: state.core.user.user.matters
});

const DocumentTrough = connect(mapStateToProps)(DocumentTroughImpl);

export default DocumentTrough;