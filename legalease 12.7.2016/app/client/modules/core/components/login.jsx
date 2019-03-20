import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {indigo800} from 'material-ui/styles/colors';
import actions from './../actions';
import {connect} from 'react-redux';
import { useDeps } from 'mantra-core';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

class LoginImpl extends Component {
	constructor(props){
		super(props);
	}
	setLoginEmail = (event) => {
		let email = event.target.value;
		this.props.dispatch(actions.setLoginEmail(email));
	}
	setLoginPassword = (event) => {
		let password = event.target.value;
		this.props.dispatch(actions.setLoginPassword(password));
	}
	login = () => {
		const { dispatch, Meteor, FlowRouter, Roles, email, password } = this.props;
		actions.login(dispatch, Meteor, FlowRouter, Roles, email, password);
	}
	render(){
		return(
			<div>
			<Paper style={{width:'30vw', height:'90vh', marginLeft:'auto', marginRight:'auto', marginTop:'20px', padding:30}}>
				<Paper
					zDepth={2}
					style={{width:'100%', marginBottom:100, padding:12}}>
					<Paper
						zDepth={2}
						style={{background:indigo800}}>
						<object style={{width:'100%', height:'100%'}} type="image/svg+xml" data="/icons/logo.svg" />
					</Paper>
				</Paper>
				<div style={{marginLeft:5,marginRight:5, marginBottom:50}}>
					<TextField id="login-username" underlineShow={false} floatingLabelText="Email" onChange={this.setLoginEmail}/>
					<PasswordField id="login-password" underlineShow={false} floatingLabelText="Password" onChange={this.setLoginPassword}/>
				</div>
				<RaisedButton fullWidth={true} label="Login" onTouchTap={this.login}/>
				<Divider/>
			</Paper>
			<Snackbar open={this.props.errorOpen} message={this.props.error}/>
			</div>
		);
	}
}

const mapDepsToProps = (context) => ({
	Meteor: context.Meteor,
	FlowRouter: context.FlowRouter,
	Roles: context.Roles
});

const mapStateToProps = (state) => ({
	email: state.core.user.email,
	password: state.core.user.password,
	errorOpen: state.core.user.errorOpen,
	error: state.core.user.error
});

const LoginWR = connect(mapStateToProps)(LoginImpl);
const Login = useDeps(mapDepsToProps)(LoginWR);

export default Login;