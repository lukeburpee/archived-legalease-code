import React from 'react';


const VideoBarRight = ({meeting, meetingCount}) => (
	<div style={{
			position:'fixed',
			top:'8vh',
			bottom:'auto',
			left:'auto',
			right:0,
			height:'92vh',
			width:(meeting && meetingCount > 3)?'15vw':0
		}}
	>
		right meeting videos
	</div>
);

export default VideoBarRight;