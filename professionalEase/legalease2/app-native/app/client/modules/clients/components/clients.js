import React,{ Component } from 'react';
import { Scene } from 'react-native-router-flux';
import { Page } from './../../interface';
import { View, Text } from 'react-native';


class Clients extends Component {
	render(){
		return(
			<Page title={this.props.title}>
				<Text>
				This is the clients page
				</Text>
			</Page>
		);
	}
}

export default Clients;
