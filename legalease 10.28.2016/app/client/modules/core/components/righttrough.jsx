import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from './../../calendar'
import Settings from './../../settings'
import Chat from './../../chat'
import Timekeeper from './../../timers'
import Mail from './../../mail'
import FormPreview from './../../formpreview'

class RightTroughImpl extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div style={{width: this.props.rightTroughWidth}}>
			{(()=> {
				switch(this.props.rightTroughType){
					case 'SETTINGS':
						return <Settings/>
					case 'MAIL':
						return <Mail/>
					case 'CALENDAR':
						return <Calendar/>
					case 'TIMEKEEPER':
						return <Timekeeper/>
					case 'CHAT':
						return <Chat/>
					case 'FORM':
						return <FormPreview/>
					case 'FILEDETAILS':
						return <p>This is the file details view</p>
					default:
						return <p>This is the right trough view</p>
				}
			})()}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	rightTroughOpen: state.core.righttrough.rightTroughOpen,
	rightTroughWidth: state.core.righttrough.rightTroughWidth,
	rightTroughVisibility: state.core.righttrough.rightTroughVisibility,
	rightTroughType: state.core.righttrough.rightTroughType
	
});
const RightTrough = connect(mapStateToProps)(RightTroughImpl);
export default RightTrough;