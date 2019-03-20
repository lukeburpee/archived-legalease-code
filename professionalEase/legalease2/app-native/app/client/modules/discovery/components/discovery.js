import React,{ Component } from 'react';
import { Scene } from 'react-native-router-flux';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { Toolbar } from 'react-native-material-ui';
import { Page } from './../../interface';
import { View, Text } from 'react-native';
import Search from './search';

import {connect} from 'react-redux';

class DiscoveryImpl extends Component {
	render(){
		const { search } = this.props;
		return(
			<Page title={this.props.title}>
			{(search)? 
				<Search/> :
				<View>
					<Toolbar/>
					<Text>This is the discovery view</Text>
				</View>
			}
			</Page>
		);
	}
}

const mapStateToProps = (state) => ({
	search: state.discovery.search
});

const Discovery = connect(mapStateToProps)(DiscoveryImpl);

export default Discovery;