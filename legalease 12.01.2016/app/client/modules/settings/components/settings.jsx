import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Avatar from './avatar.jsx';
import { indigo900, grey800, grey200 } from 'material-ui/styles/colors';


class SettingsImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{width:'inherit', height:'calc(100vh - 64px)', paddingTop:'10%', backgroundColor:grey800}}>
				<Paper circle={true} style={{ marginLeft:75, height:250, width:250, backgroundColor:grey200}}>
					<Avatar/>
				</Paper>
				<Paper style={{marginTop:'25px', marginLeft:35, width:330, padding:10, height:'60vh', backgroundColor:grey200}}>
				</Paper>
			</div>
		);
	}
}

const mapStateToProps = (state) =>({
	width: state.core.righttrough.rightTroughWidth
});

const Settings = connect(mapStateToProps)(SettingsImpl);
export default Settings;