import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './reports.left.toolbar';
import LeftContent from './reports.left.content';
import RightToolbar from './reports.right.toolbar';
import RightContent from './reports.right.content';
import MainToolbar from './reports.main.toolbar';
import MainContent from './reports.main.content';

const Reports = ({context}) => (
	<Page 
		left={true}
		right={true}
		viewer={true}
		fabActions={{main:{}}}
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

export default Reports;