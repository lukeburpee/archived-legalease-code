import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import SettingsLower from './settingslower';
import MailLower from './maillower';
import CalendarLower from './calendarlower';
import TimersLower from './timerslower';
import ChatLower from './chatlower';
import {connect} from 'react-redux';

class LowerUtilitiesImpl extends Component {
	constructor(props){
		super(props);
	}
	componentWillUpdate(nextProps){
		return nextProps !== this.props;
	}
	render(){
		const { open, active } = this.props;
		return(
			<View style={{flex:(open) ? 1 : 0}}>
				{(()=>{
					switch(active){
						case 'settings':
							console.log('settings')
							return (<SettingsLower/>);
						case 'mail':
							console.log('mail');
							return (<MailLower/>);
						case'calendar':
							console.log('calendar');
							return (<CalendarLower/>);
						case 'timers':
							console.log('timers');
							return (<TimersLower/>);
						case 'chat':
							console.log('chat');
							return (<ChatLower/>);
						default:
							return null;
					}
				})()}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	open: state.interface.utilities,
	active: state.interface.active
});

const LowerUtilities = connect(mapStateToProps)(LowerUtilitiesImpl);

export default LowerUtilities;