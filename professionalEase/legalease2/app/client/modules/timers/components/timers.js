import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './timers.left.toolbar';
import LeftContent from './timers.left.content';
import RightToolbar from './timers.right.toolbar';
import RightContent from './timers.right.content';
import MainToolbar from './timers.main.toolbar';
import MainContent from './timers.main.content';

const Timers = ({context}) => (
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

export default Timers;