import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './discovery.left.toolbar';
import LeftContent from './discovery.left.content';
import RightToolbar from './discovery.right.toolbar';
import RightContent from './discovery.right.content';
import MainToolbar from './discovery.main.toolbar';
import MainContent from './discovery.main.content';

const Discovery = ({context}) => (
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

export default Discovery;