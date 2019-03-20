import React,{ Component } from 'react';
import { Scene } from 'react-native-router-flux';
import { Page } from './../../interface';
import { View, Text } from 'react-native';

class Firms extends Component {
	render(){
		return(
			<Page title={this.props.title}>
			<Text>This is the firms view</Text>
			</Page>
		);
	}
}

export default Firms;
