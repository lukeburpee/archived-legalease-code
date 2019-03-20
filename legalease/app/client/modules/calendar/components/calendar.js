import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './calendar.left.toolbar';
import LeftContent from './calendar.left.content';
import RightToolbar from './calendar.right.toolbar';
import RightContent from './calendar.right.content';
import MainToolbar from './calendar.main.toolbar';
import MainContent from './calendar.main.content';

const Profile = ({context}) => (
	<Page 
		left={true}
		right={true}
		viewer={true}
		leftTool={<LeftToolbar/>}
		leftContent={<LeftContent/>}
		rightTool={<RightToolbar/>}
		rightContent={<RightContent/>}
		mainTool={<MainToolbar/>}
		mainContent={<MainContent/>}
		chatBox={false}
		chatBoxMin={true}
		chatBoxContent="chat box"
		utilities={true}
		utilitiesOpen={true}
		utilitiesMainContent="utilities main content"
		utilitiesToolbarContent="utilities toolbar"
		utilitiesBottomContent="utilities bottom content"
		meeting={false}
		meetingCount={0}
		{...context}/>
);

export default Profile;