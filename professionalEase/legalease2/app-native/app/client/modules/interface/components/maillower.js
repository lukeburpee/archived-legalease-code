import React,{ Component } from 'react';
import { ScrollView, Text } from 'react-native';

import {connect} from 'react-redux';

class MailLower extends Component {
	render(){
		return(
			<ScrollView><Text>mail lower</Text></ScrollView>
		);
	}
}

export default MailLower;