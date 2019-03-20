import React, { Component, PropTypes } from 'react';
import { PrivateAppbar } from './../containers/appbar.jsx';
import { LeftSidebar } from './../containers/leftsidebar.jsx';
import { Page } from './../containers/page.jsx';
import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';
import Avatar from 'material-ui/Avatar';
import core from './../actions';

class PrivateImpl extends Component {
	constructor(props){
		super(props);

		this.handleResize = () => {
			const { dispatch, view } = this.props;
			const width = window.innerWidth;
			if (width > 1200) {
				dispatch(core.setView('desktop', ''));
			} else if (width > 900) {
				dispatch(core.setView('tablet', ''));
			} else {
				if (view === 'mobile') {
					return 
				} else {
					dispatch(core.setView('mobile', ''));
				}
			}
		}
	}
	componentDidMount(){
		window.addEventListener('resize', this.handleResize)
		{/**this.handleRedirect();**/}
	}
	componentWillUnmount() {
    	window.removeEventListener('resize', this.handleResize)
    }
	handleRedirect(){
		if (!this.props.user){
			this.props.flowrouter.go('/login');
		}
	}
	render(){
		return(
			<div className="main">
				<SpeedDial 
					positionH="left"
					positionV="bottom">
					<BubbleList>
						{speedDialList.map((item, index)=>{
							return (<BubbleListItem key={index} {...item}/>);
						})}
					</BubbleList>
				</SpeedDial>
				<PrivateAppbar/>
				<LeftSidebar/>
				<Page content={this.props.content}/>
			</div>
		);
	}
}

export default PrivateImpl

const speedDialList = [
	{ primaryText: 'first', rightAvatar: <Avatar/>},
	{ primaryText: 'second', rightAvatar: <Avatar/>}
];