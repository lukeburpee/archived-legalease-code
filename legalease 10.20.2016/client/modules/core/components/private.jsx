import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { useDeps, compose, composeAll } from 'mantra-core'
import { PrivateAppbar } from './appbar.jsx';
import { LeftSidebar } from './leftsidebar.jsx';
import { Page } from './page.jsx';

import core from './../actions';

class PrivateImpl extends Component {
	constructor(props){
		super(props);
		console.log(this.props.user);

		this.handleResize = () => {
			const { dispatch, view } = this.props;
			const width = window.innerWidth;
			if (width > 1200) {
				dispatch(core.setView('desktop', ''));
			} else if (width > 900) {
				dispatch(core.setView('tablet', ''));
			} else {
				if (view === 'mobile') {
					return 
				} else {
					dispatch(core.setView('mobile', ''));
				}
			}
		}
	}
	componentDidMount(){
		window.addEventListener('resize', this.handleResize)
		{/**this.handleRedirect();**/}
	}
	componentWillUnmount() {
    	window.removeEventListener('resize', this.handleResize)
    }
	handleRedirect(){
		if (!this.props.user){
			this.props.flowrouter.go('/login');
		}
	}
	render(){
		return(
			<div className="main">
				<PrivateAppbar/>
				<LeftSidebar/>
				<Page content={this.props.content}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.core.user.user,
	view: state.core.layout.view,
	docked: state.core.leftsidebar.leftSidebarDocked
});

const mapDepsToProps = (context, action) => ({
	flowrouter: context.FlowRouter
});

const Priv = connect(mapStateToProps)(PrivateImpl);
const Private = useDeps(mapDepsToProps)(Priv);
export default Private;