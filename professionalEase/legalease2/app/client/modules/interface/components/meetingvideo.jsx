import React,{ Component } from 'react';
import WebRTC from './../../webrtc/components/webrtc';

class MeetingVideo extends Component {
	render(){
		return(
			<WebRTC meeting={'meeting'} remote={true}/>
		);
	}
}

export default MeetingVideo