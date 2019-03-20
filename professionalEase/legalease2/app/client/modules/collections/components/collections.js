import React from 'react';
import Page from './../../interface/components/page';
import LeftToolbar from './collections.left.toolbar';
import LeftContent from './collections.left.content';
import RightToolbar from './collections.right.toolbar';
import RightContent from './collections.right.content';
import RightBottomSheet from './collections.right.bottomsheet';
import MainToolbar from './collections.main.toolbar';
import MainContent from './collections.main.content';

const Collections = ({context}) => (
	<Page 
		left={true}
		right={true}
		viewer={true}
		fab={false}
		fabActions={{main:{}}}
		leftTool={<LeftToolbar/>}
		leftContent={<LeftContent/>}
		rightTool={<RightToolbar/>}
		rightContent={<RightContent/>}
		rightBottomSheet={true}
		rightBottomSheetContent={<RightBottomSheet/>}
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

export default Collections;