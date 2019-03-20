import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './viewer.left.toolbar';
import LeftContent from './viewer.left.content';
import RightToolbar from './viewer.right.toolbar';
import RightContent from './viewer.right.content';
import MainToolbar from './viewer.main.toolbar';
import MainContent from './viewer.main.content';

const Viewer = ({context}) => (
	<Page 
		left={false}
		right={true}
		fab={false}
		fabOpen={false}
		fabDirection={'left'}
		fabActions={{main:''}}
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

export default Viewer;