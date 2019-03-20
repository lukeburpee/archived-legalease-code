import React,{ Component } from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';

const svg_icons = svgs();

class Icon extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.setState({
			icons: svgs()
		});
	}
	render(){
		return(
			<SvgIcon {...props} svgs={this.state.svgs}/>
		);
	}
}

export default Icon;