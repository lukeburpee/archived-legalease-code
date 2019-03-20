import React from 'react';
import MeetingVideo from './meetingvideo';

const VideoBarLeft = ({meeting, meetingCount}) => (
	<div style={{
			position:'fixed',
			top:'8vh',
			bottom:'auto',
			left:0,
			right:'auto',
			height:'92vh',
			width:(meeting && meetingCount > 3)?'15vw':0
		}}
	>
	{(meeting)?"meeting videos":null}
	</div>
);

export default VideoBarLeft;