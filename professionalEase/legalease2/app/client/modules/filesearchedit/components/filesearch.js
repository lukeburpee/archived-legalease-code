import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './filesearch.left.toolbar';
import LeftContent from './filesearch.left.content';
import RightToolbar from './filesearch.right.toolbar';
import RightContent from './filesearch.right.content';
import MainToolbar from './filesearch.main.toolbar';
import MainContent from './filesearch.main.content';

const FileSearch = ({context}) => (
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

export default FileSearch;