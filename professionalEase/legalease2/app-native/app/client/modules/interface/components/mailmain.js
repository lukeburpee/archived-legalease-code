import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import TextField from 'react-native-md-textinput';

import {connect} from 'react-redux';

class MailMain extends Component {
	render(){
		return(
			<View style={{flex:1, flexDirection:'column', paddingHorizontal:10}}>
				<TextField label="To: " dense={true}/>
				<TextField label="CC: " dense={true}/>
				<TextField label="BCC: " dense={true}/>
				<TextField label="Attachments: " dense={true}/>
			</View>
		);
	}
}

export default MailMain;