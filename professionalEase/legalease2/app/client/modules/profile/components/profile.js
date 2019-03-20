import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './profile.left.toolbar';
import LeftContent from './profile.left.content';
import RightToolbar from './profile.right.toolbar';
import RightContent from './profile.right.content';
import MainToolbar from './profile.main.toolbar';
import MainContent from './profile.main.content';

const Profile = ({context}) => (
	<Page 
		left={true}
		right={true}
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