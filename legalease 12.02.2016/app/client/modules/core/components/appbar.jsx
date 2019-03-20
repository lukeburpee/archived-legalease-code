import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import core from './../actions';


class PrivateAppbarImpl extends Component {
	constructor(props) {
    	super(props);
    }
    toggleSidebar(){
    	this.props.dispatch(core.openLeftSidebar())
    }
    setTitleLocation(){
        if (this.props.view === 'desktop') {
            return 225
        } else if (this.props.view === 'tablet'){
            return 100
        } else {
            return 50
        }
    }
	render(){
		return(
			<AppBar
                zDepth={2}
				style={styles.content}
				title={this.props.title}
                titleStyle={{marginLeft: this.setTitleLocation()}}
                iconElementLeft={<IconButton iconStyle={{width:42, height:42}}><object type="image/svg+xml" data="/icons/favicon.svg" /></IconButton>}
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
  title: {

  }
}


export default PrivateAppbarImpl