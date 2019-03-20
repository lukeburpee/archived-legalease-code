import React from 'react';
import Avatar from 'material-ui/Avatar';
import Layer from './layer';
import WebRTC from './../../webrtc/components/webrtc';

const MeetingAdminVideo = ({meeting, meetingCount}) => (
	<Layer
		rounded={true}
		position='absolute'
		top='auto'
		left='auto'
		right='10vw'
		top='2vh'
		bottom='2vh'
		height='20vh'
		width='20vh'
		rounded={true}
		style={{padding:5}}
	><Avatar style={{width:'inherit', height:'inherit'}}>meeting admin video</Avatar></Layer>
);

export default MeetingAdminVideo;