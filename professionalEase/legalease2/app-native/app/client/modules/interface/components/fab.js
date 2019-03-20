import React,{ Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

class Fab extends Component {
	render(){
		return(
			<View style={{bottom:615, zIndex:9999}}>
				<ActionButton position="right" verticalOrientation="down">
					<ActionButton.Item><Icon name="dns"/></ActionButton.Item>
					<ActionButton.Item><Icon name="dns"/></ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	transitioning: state.interface.fabTransitioning,
	active: state.interface.active,
	items: state.interface.fabItems
});

export default Fab;