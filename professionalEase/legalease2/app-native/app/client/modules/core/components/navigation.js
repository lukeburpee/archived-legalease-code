import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Reducer, Modal, Actions } from 'react-native-router-flux';
import Drawer from './../../interface/components/maindrawer';
import {connect, bindActionCreators} from 'react-redux';

import { openNav, closeNav } from './../actions';
import * as Interface from './../../interface';

import Login from './../components/login';
import Clients from './../../clients/components/clients';
import Firms from './../../firms/components/firms';
import Matters from './../../matters/components/matters';
import Cases from './../../cases/components/cases';
import Discovery from './../../discovery/components/discovery';


class NavigationImpl extends Component {
	constructor(props){
		super(props);
	}

	renderScenes(){
		const scenes = 
			<Scene key="drawer" component={Drawer} open={false}>
				<Scene key="modal" component={Modal}>
				<Scene key="root" hideNavBar={true}>
					<Scene key="clients" title="Clients" component={Clients} passProps={true}/>
					<Scene key="firms" title="Firms" component={Firms} passProps={true}/>
					<Scene key="matters" title="Matters" component={Matters} passProps={true}/>
					<Scene key="cases" title="Cases" component={Cases} passProps={true}/>
					<Scene key="discovery" title="Discovery" component={Discovery} passProps={true}/>
				</Scene>
				</Scene>
			</Scene>;
		return scenes;
	}
	render(){
		const scenes = this.renderScenes();
		return(
			<Router>
			{scenes}
			</Router>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.core.loading,
	user: state.core.user
});

const Navigation = connect(mapStateToProps)(NavigationImpl);

export default Navigation;