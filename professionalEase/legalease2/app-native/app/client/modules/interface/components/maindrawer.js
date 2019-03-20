import React,{ Component } from 'react';
import { Image } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { Drawer as MuiDrawer } from 'react-native-material-ui';
import { COLOR } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialIcons';

class MainDrawer extends Component {
	render(){
		const state = this.props.navigationState;
		const children = state.children;
		return(
			<Drawer
				ref="navigation"
				open={state.open}
				type="overlay"
				tapToClose={true}
				openDrawerOffset={0.3}
				panCloseMask={0.3}
				closedDrawerOffset={-3}
				elevation={2}
				tweenHandler={(ratio)=>({main:{opacity:(2-ratio)/2}})}
				onOpen={()=>Actions.refresh({key:state.key, open:true})}
				onClose={()=>Actions.refresh({key:state.key, open:false})}
				content={
					<MuiDrawer>
						<MuiDrawer.Header style={{contentContainer:{height:100, backgroundColor:COLOR.indigo800}}}>
						</MuiDrawer.Header>
						<MuiDrawer.Section
							items={[
								{ icon: 'bookmark-border', value: 'Clients', onPress: ()=> Actions.clients()},
								{ icon: 'bookmark-border', value: 'Firms', onPress: ()=> Actions.firms()},
								{ icon: 'bookmark-border', value: 'Matters', onPress: ()=> Actions.matters()},
								{ icon: 'bookmark-border', value: 'Cases', onPress: ()=> Actions.cases()},
								{ icon: 'bookmark-border', value: 'Discovery', onPress: ()=> Actions.discovery()}
							]}
						/>
					</MuiDrawer>
				}
				tapToClose={true}
				>
				<DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
			</Drawer>
		);
	}
}

export default MainDrawer;