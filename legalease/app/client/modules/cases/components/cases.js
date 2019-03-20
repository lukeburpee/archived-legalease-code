import React from 'react';
import Page from './../../interface/components/page';

const Cases = ({context}) => (
	<Page 
		left={true}
		right={true}
		leftTool="left cases tool"
		leftContent="left cases content"
		rightTool="right cases tool"
		rightContent="right cases content"
		mainTool="main cases tool"
		mainContent="main cases content"
		chatBox={false}
		chatBoxMin={true}
		chatBoxContent="chat box"
		utilities={true}
		utilitiesOpen={false}
		utilitiesMainContent="utilities main content"
		utilitiesToolbarContent="utilities toolbar"
		utilitiesBottomContent="utilities bottom content"
		meeting={true}
		meetingCount={4}
		{...context}/>
);

export default Cases;