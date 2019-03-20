import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import core from './../actions';


class PrivateAppbarImpl extends Component {
	constructor(props) {
    	super(props);
    }
    toggleSidebar(){
    	this.props.dispatch(core.openLeftSidebar())
    }
	render(){
		return(
			<AppBar
                zDepth={2}
				style={styles.content}
				title={this.props.title}
				titleStyle={styles.title}
				onLeftIconButtonTouchTap={this.toggleSidebar.bind(this)}
				showMenuIconButton
        	/>
		);
	}
}

const styles = {
  content: {
    // position: "fixed",
    // minHeight: 0,
    position:'fixed',
    minHeight:0,
    top:0,
    left:0,
    width:'100vw'
  },
  title: {}
}


export default PrivateAppbarImpl