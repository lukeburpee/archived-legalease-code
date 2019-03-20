import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './clients.left.toolbar';
import LeftContent from './clients.left.content';
import RightToolbar from './clients.right.toolbar';
import RightContent from './clients.right.content';
import MainToolbar from './clients.main.toolbar';
import MainContent from './clients.main.content';

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