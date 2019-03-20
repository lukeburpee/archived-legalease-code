import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import SvgIcon from 'material-ui/SvgIcon';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import PowerIcon from 'material-ui/svg-icons/action/power-settings-new';
import core from './../actions';


class PrivateAppbarImpl extends Component {
	constructor(props) {
    	super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    toggleSidebar(){
    	this.props.dispatch(core.openLeftSidebar())
    }
    logout(){
        const { dispatch, Meteor } = this.props;
        dispatch(core.logout(Meteor));
    }
	render(){
		return(
			<AppBar
                zDepth={2}
				style={styles.content}
                iconElementLeft={<IconButton iconStyle={{width:26, height:26, marginTop:-25, marginLeft:-5}}><object type="image/svg+xml" data="/icons/favicon.svg" /></IconButton>}
                iconElementRight={<IconButton iconStyle={{width:26, height:26, marginTop:-25}}><PowerIcon style={{color:'white'}}/></IconButton>}
				onLeftIconButtonTouchTap={this.toggleSidebar}
                onRightIconButtonTouchTap={this.logout.bind(this)}
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
    height:36,
    top:0,
    left:0,
    width:'100vw'
  },
  title: {

  }
}


export default PrivateAppbarImpl