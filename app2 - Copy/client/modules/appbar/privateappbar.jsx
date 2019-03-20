import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { UserSettingsIcon } from './components';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { indigo800 } from 'material-ui/styles/colors';

export default class PrivateAppBar extends Component {
    handleToggle(){
        return true;
    }
	render(){
		return(
            <AppBar
                zDepth={2}
                showMenuIconButton={false}
                titleStyle={{paddingLeft:'50px'}}
                style={{backgroundColor: indigo800, position:'fixed', width:'100%', display:'flex'}}
                onClick={this.handleToggle}/>
		);
	}
}