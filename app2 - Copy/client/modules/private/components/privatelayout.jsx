import React, { Component, PropTypes } from 'react';

import Primary from './primary';
import Secondary from './secondary';
import LeftDrawer from './leftdrawer';
import Logo from './../../logo';
import Navigation from './../../navigation';
import AppBar from './../../appbar';

import UtilityToolbar from './utilities.jsx';

export default class PrivateLayout extends Component {
	constructor(props){
		super(props);
		this.state = {
			secondaryOpen:false,
			folderViewOpen:false,
			formBuilderOpen:false,
			leftDrawerType:null,
			secondaryType:null,
			utilitiesOpen: []
		}
	}
	handleFormBuilder = () => {
		let isOpen = this.state.formBuilderOpen;
		if (isOpen){
			this.setState({
				formBuilderOpen:false,
				leftDrawerType:null
			});
		} else {
			this.setState({
				formBuilderOpen:true,
				leftDrawerType:'formbuilder'
			});
		}
	}
	handleSettings = () => {
		let isOpen = this.state.secondaryOpen;
		let active = this.state.secondaryType;
		if (active === 'settings'){
			this.setState({
				secondaryOpen: false,
				secondaryType: null
			});
		} else if (active === null) {
			this.setState({
				secondaryOpen:true,
				secondaryType:'settings'
			});
		} else {
			this.setState({
				secondaryType:'settings'
			});
		}
	}
	handleMail = () => {
		let isOpen = this.state.secondaryOpen;
		let active = this.state.secondaryType;
		if (active === 'mail'){
			this.setState({
				secondaryOpen: false,
				secondaryType: null
			});
		} else if (active === null) {
			this.setState({
				secondaryOpen:true,
				secondaryType:'mail'
			});
		} else {
			this.setState({
				secondaryType:'mail'
			});
		}
	}
	handleCalendar = () => {
		let isOpen = this.state.secondaryOpen;
		let active = this.state.secondaryType;
		if (active === 'calendar'){
			this.setState({
				secondaryOpen: false,
				secondaryType: null
			});
		} else if (active === null) {
			this.setState({
				secondaryOpen:true,
				secondaryType:'calendar'
			});
		} else {
			this.setState({
				secondaryType:'calendar'
			});
		}
	}
	handleTimekeeper = () => {
		let isOpen = this.state.secondaryOpen;
		let active = this.state.secondaryType;
		if (active === 'timekeeper'){
			this.setState({
				secondaryOpen: false,
				secondaryType: null
			});
		} else if (active === null) {
			this.setState({
				secondaryOpen:true,
				secondaryType:'timekeeper'
			});
		} else {
			this.setState({
				secondaryType:'timekeeper'
			});
		}
	}
	handleChat = () => {
		let isOpen = this.state.secondaryOpen;
		let active = this.state.secondaryType;
		if (active === 'chat'){
			this.setState({
				secondaryOpen: false,
				secondaryType: null
			});
		} else if (active === null) {
			this.setState({
				secondaryOpen:true,
				secondaryType:'chat'
			});
		} else {
			this.setState({
				secondaryType:'chat'
			});
		}
	}
	closeSecondary= () => {
		this.setState({
			secondaryOpen:false
		});
	}
	render(){
		return (
			<div>
				<AppBar/>
				<Logo/>
				<Navigation/>
				<UtilityToolbar
					openSettings={this.handleSettings}
					openMail={this.handleMail}
					openCalendar={this.handleCalendar}
					openTimekeeper={this.handleTimekeeper}
					openChat={this.handleChat}
					closeSecondary={this.closeSecondary}
					active={this.state.secondaryType}/>
				<Primary 
					secondaryOpen={this.state.secondaryOpen} 
					folderViewOpen={this.state.folderViewOpen}
					formBuilderOpen={this.state.formBuilderOpen}>
					{this.props.children}
				</Primary>
				<Secondary secondaryType={this.state.secondaryType}/>
				<LeftDrawer type={this.state.leftDrawerType}/>
			</div>
		);
	}
}

PrivateLayout.propTypes = {
	children: PropTypes.node
}

