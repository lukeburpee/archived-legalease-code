import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import ViewerTabLabel from './viewertablabel';
import PdfView from './pdfview';
import HtmlView from './htmlview';
import TextView from './textview';
import { grey800 } from 'material-ui/styles/colors';

const ViewerTabs = ({view, documents}) => (
	<div style={{height:'inherit'}}>
	<Tabs style={{width:documents.length*100}} contentContainerStyle={{width:'100%', backgroundColor:grey800}}>
	{(()=>documents.map((document, i)=>(
		<Tab label={<ViewerTabLabel label={document.label}/>} style={{width:100, height:'8vh'}}/>
	)))()}
	</Tabs>
	<SwipeableViews>
		{(()=>documents.map((document, i) => (
			<div style={{padding:50, marginBottom:50, display:'flex', justifyContent:'center', height:'58vh', overflowY:'auto'}}>
				{(()=>{switch(view){
					case 'pdf':
						return <div style={{marginBottom:50, backgroundColor:grey800}}><PdfView size={document.size} zoom={document.zoom} device={document.device} pdf={document.pdf}/></div>;
					case 'html':
						return <HtmlView html={document.html}/>;
					case 'text':
						return <TextView text={document.text}/>;
				}})()}
			</div>
		)))()}
	</SwipeableViews>
	</div>
);

export default ViewerTabs;