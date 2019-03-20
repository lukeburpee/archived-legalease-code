import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import SettingsMain from './settingsmain';
import MailMain from './mailmain';
import CalendarMain from './calendarmain';
import TimersMain from './timersmain';
import ChatMain from './chatmain';
import {connect} from 'react-redux';

class MainImpl extends Component {
	constructor(props){
		super(props);
	}
	componentWillUpdate(nextProps){
		return nextProps !== this.props;
	}
	render(){
		const { open, active, children } = this.props;
		return(
			<View style={{flex:(open) ? 1 : 0}}>
				{(()=>{
					switch(active){
						case 'settings':
							console.log('settings')
							return (<SettingsMain/>);
						case 'mail':
							console.log('mail');
							return (<MailMain/>);
						case'calendar':
							console.log('calendar');
							return (<CalendarMain/>);
						case 'timers':
							console.log('timers');
							return (<TimersMain/>);
						case 'chat':
							console.log('chat');
							return (<ChatMain>{children}</ChatMain>);
						case 'meeting':
							console.log('meeting');
							return (<MeetingMain/>);
						default:
							return (children);
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

const Main = connect(mapStateToProps)(MainImpl);

export default Main;