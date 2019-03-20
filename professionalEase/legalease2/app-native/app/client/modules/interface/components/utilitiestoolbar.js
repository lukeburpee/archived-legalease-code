import React,{ Component } from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import { COLOR } from 'react-native-material-ui';
import {connect} from 'react-redux';
import actions from './../actions';

class UtilitiesImpl extends Component {
	render(){
		const { dispatch, active } = this.props;
		return(
			<BottomNavigation>
				<BottomNavigation.Action
					key="settings"
					icon={(active === 'settings') ? "clear" : "settings"}
					onPress={()=>dispatch(actions.toggleUtilities(active, 'settings'))}
					style={{container:{backgroundColor:COLOR.red200, flex:1}}}
				/>
				<BottomNavigation.Action
					key="mail"
					icon={(active === 'mail') ? "clear" : "mail-outline"}
					onPress={()=>dispatch(actions.toggleUtilities(active, 'mail'))}
					style={{container:{backgroundColor:COLOR.blue200, flex:1}}}
				/>
				<BottomNavigation.Action
					key="calendar"
					icon={(active === 'calendar') ? "clear" : "today"}
					onPress={()=>dispatch(actions.toggleUtilities(active, 'calendar'))}
					style={{container:{backgroundColor:COLOR.green200, flex:1}}}
				/>
				<BottomNavigation.Action
					key="timers"
					icon={(active === 'timers') ? "clear" : "timer"}
					onPress={()=>dispatch(actions.toggleUtilities(active, 'timers'))}
					style={{container:{backgroundColor:COLOR.orange200, flex:1}}}
				/>
				<BottomNavigation.Action
					key="chat"
					icon={(active === 'chat') ? "clear" : "chat-bubble-outline"}
					onPress={()=>dispatch(actions.toggleUtilities(active, 'chat'))}
					style={{container:{backgroundColor:COLOR.yellow200, flex:1}}}
				/>
			</BottomNavigation>
		);
	}
}

const mapStateToProps = (state) => ({
	active: state.interface.active
});

const Utilities = connect(mapStateToProps)(UtilitiesImpl);

export default Utilities;