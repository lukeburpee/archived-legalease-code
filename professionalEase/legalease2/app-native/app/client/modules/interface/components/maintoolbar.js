import React,{ Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class MainToolbar extends Component {
	render(){
		return(
			<Toolbar 
				leftElement='menu'
				onLeftElementPress={()=>Actions.refresh({key:'drawer', open: value=> !value})} 
				centerElement={
					this.props.title
				}/>
		);
	}
}

export default MainToolbar;