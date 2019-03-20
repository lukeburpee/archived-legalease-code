import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './dashboard.left.toolbar';
import LeftContent from './dashboard.left.content';
import RightToolbar from './dashboard.right.toolbar';
import RightContent from './dashboard.right.content';
import MainToolbar from './dashboard.main.toolbar';
import MainContent from './dashboard.main.content';

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
		utilitiesOpen={false}
		utilitiesMainContent="utilities main content"
		utilitiesToolbarContent="utilities toolbar"
		utilitiesBottomContent="utilities bottom content"
		meeting={false}
		meetingCount={0}
		{...context}/>
);

export default Profile;