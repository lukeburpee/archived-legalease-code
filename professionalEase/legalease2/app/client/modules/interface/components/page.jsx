import React, { Component } from 'react';
import Fab from './fab';
import AppBar from './appbar';
import SideBar from './sidebar';
import LeftTool from './lefttool';
import LeftContent from './leftcontent';
import LeftBottomSheet from './leftbottomsheet';
import RightTool from './righttool';
import RightContent from './rightcontent';
import RightBottomSheet from './rightbottomsheet';
import MainTool from './maintool';
import MainContent from './maincontent';
import ChatBox from './chatbox';
import UtilitiesToolbar from './utilitiestoolbar';
import MainUtilities from './mainutilities';
import BottomUtilities from './bottomutilities';
import VideoBarLeft from './videobarleft';
import VideoBarRight from './videobarright';

const Page = ({
	left, 
	right, 
	chatBox,
	chatBoxMin,
	chatBoxContent,
	editor,
	fab,
	fabOpen,
	fabX,
	fabY,
	fabDirection,
	fabVisible,
	fabActions,
	utilities,
	utilitiesOpen,
	utilitiesToolbarContent,
	utilitiesMainContent,
	utilitiesBottomContent,
	chatBoxMinimized,
	leftTool, 
	rightTool, 
	leftContent, 
	rightContent, 
	leftBottomSheet,
	rightBottomSheet,
	leftBottomSheetContent,
	rightBottomSheetContent,
	mainTool, 
	mainContent,
	meeting,
	meetingCount,
	viewer
	}) => (
	<div>
		<AppBar left={left} right={right} utilities={utilitiesOpen} meeting={meeting} meetingCount={meetingCount} viewer={viewer} editor={editor}/>
		<Fab open={fabOpen} locationX={fabX} locationY={fabY} direction={fabDirection} visible={fab} actions={fabActions}/>
		<SideBar/>
		<LeftTool open={left} meeting={meeting} meetingCount={meetingCount}>
			{leftTool}
		</LeftTool>
		<LeftContent open={left} meeting={meeting} meetingCount={meetingCount}>
			{leftContent}
		</LeftContent>
		<LeftBottomSheet left={left} meeting={meeting} meetingCount={meetingCount} open={leftBottomSheet}>{leftBottomSheetContent}</LeftBottomSheet>
		<RightTool open={right} meeting={meeting} meetingCount={meetingCount}>
			{rightTool}
		</RightTool>
		<RightContent open={right} meeting={meeting} meetingCount={meetingCount}>
			{rightContent}
		</RightContent>
		<RightBottomSheet right={right} meeting={meeting} meetingCount={meetingCount} open={rightBottomSheet}>{rightBottomSheetContent}</RightBottomSheet>
		<MainTool left={left} right={right} meeting={meeting} meetingCount={meetingCount} viewer={viewer} editor={editor}>
			{mainTool}
		</MainTool>
		<MainContent left={left} right={right} meeting={meeting} meetingCount={meetingCount} viewer={viewer} editor={editor}>
			{mainContent}
		</MainContent>
		<MainUtilities open={utilitiesOpen} left={left} right={right}>
			{utilitiesMainContent}
		</MainUtilities>
		<UtilitiesToolbar open={utilitiesOpen} chatBoxOpen={chatBox} chatBoxMin={chatBoxMin} chatBoxContent={chatBoxContent}>
			{utilitiesToolbarContent}
		</UtilitiesToolbar>
		<BottomUtilities open={utilitiesOpen} left={left} right={right}>
			{utilitiesBottomContent}
		</BottomUtilities>
		<VideoBarLeft meeting={meeting} meetingCount={meetingCount}/>
		<VideoBarRight meeting={meeting} meetingCount={meetingCount}/>
	</div>
);

export default Page