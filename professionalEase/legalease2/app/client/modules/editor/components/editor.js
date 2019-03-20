import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './editor.left.toolbar';
import LeftContent from './editor.left.content';
import RightToolbar from './editor.right.toolbar';
import RightContent from './editor.right.content';
import MainToolbar from './editor.main.toolbar';
import MainContent from './editor.main.content';

const Editor = ({context}) => (
	<Page 
		left={true}
		right={true}
		editor={true}
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

export default Editor;