import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './formbuilder.left.toolbar';
import LeftContent from './formbuilder.left.content';
import RightToolbar from './formbuilder.right.toolbar';
import RightContent from './formbuilder.right.content';
import MainToolbar from './formbuilder.main.toolbar';
import MainContent from './formbuilder.main.content';

const FormBuilder = ({context}) => (
	<Page 
		left={true}
		right={true}
		fab={false}
		fabOpen={false}
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

export default FormBuilder;