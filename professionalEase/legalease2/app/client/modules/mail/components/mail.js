import React from 'react';
import LeftToolbar from './mail.left.toolbar';
import LeftContent from './mail.left.content';
import RightToolbar from './mail.right.toolbar';
import RightContent from './mail.right.content';
import MainToolbar from './mail.main.toolbar';
import MainContent from './mail.main.content';

const Mail = () => (
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

export default Mail;