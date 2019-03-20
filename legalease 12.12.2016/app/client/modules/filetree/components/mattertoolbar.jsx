import React,{ Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import LeftArrowIcon from 'material-ui/svg-icons/navigation/arrow-back'

import matters from './../../matters/actions';
import {connect} from 'react-redux';

class MatterToolbarImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Toolbar style={{width:'inherit', height:36}}>
				<ToolbarGroup>
					<IconButton onTouchTap={()=>this.props.dispatch(matters.clearMatter())}>
						<LeftArrowIcon/>
					</IconButton>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarTitle text={this.props.matter}/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

const mapStateToProps = (state) => ({
	matter: state.matters.selected
});

const MatterToolbar = connect(mapStateToProps)(MatterToolbarImpl);

export default MatterToolbar;