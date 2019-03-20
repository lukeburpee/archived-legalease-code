import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './persistentlists.left.toolbar';
import LeftContent from './persistentlists.left.content';
import RightToolbar from './persistentlists.right.toolbar';
import RightContent from './persistentlists.right.content';
import MainToolbar from './persistentlists.main.toolbar';
import MainContent from './persistentlists.main.content';

const Matters = ({context}) => (
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

export default Matters;