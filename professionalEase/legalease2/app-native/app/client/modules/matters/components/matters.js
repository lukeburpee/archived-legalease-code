import React,{ Component } from 'react';
import { Scene } from 'react-native-router-flux';
import { Page } from './../../interface';
import { View, Text } from 'react-native';

class Matters extends Component {
	render(){
		return(
			<Page title={this.props.title}>
			<Text>This is the matters view</Text>
			</Page>
		);
	}
}

export default Matters;