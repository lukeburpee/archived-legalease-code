import React, { Component, PropTypes } from 'react';

const AccessLargeIcon = <img src='/icons/fileTypes/Access.256.png'/>;
const AccessSmallIcon = <img src='/icons/fileTypes/Access.png'/>;
const ExcelSmallIcon = <img src='/icons/fileTypes/Excel.png'/>;
const ExcelLargeIcon = <img src='/icons/fileTypes/Excel.256.png'/>;
const ExchangeLargeIcon = <img src='/icons/fileTypes/Exchange.256.png'/>;
const ExchangeSmallIcon = <img src='/icons/fileTypes/Exchange.png'/>;
const WordSmallIcon = <img src="/icons/fileTypes/Word.png"/>;
const WordLargeIcon = <img src='/icons/fileTypes/Word.256.png'/>;
const OutlookLargeIcon = <img src='/icons/fileTypes/Outlook.256.png'/>;
const OutlookSmallIcon = <img src='/icons/fileTypes/Outlook.png'/>;
const PublisherLargeIcon = <img src='/icons/fileTypes/Publisher.256.png'/>;
const PowerPointLargeIcon = <img src='/icons/fileTypes/Powerpoint.256.png'/>;
const SharePointLargeIcon = <img src='/icons/fileTypes/Sharepoint5.256.png'/>;
const OneNoteLargeIcon = <img src='/icons/fileTypes/One-Note.256.png'/>;
const OneNoteSmallIcon = <img src='/icons/fileTypes/One-Note.png'/>;
const SkypeLargeIcon = <img src="/icons/fileTypes/Skype.256.png"/>;
const SkypeSmallIcon = <img src='/icons/fileTypes/Skype.png'/>;
const VisioLargeIcon = <img src='/icons/fileTypes/Visio.256.png'/>;
const VisioSmallIcon = <img src='/icons/fileTypes/Visio.png'/>;

import UnknownFileTypeIcon from 'material-ui/svg-icons/editor/insert-drive-file';

class FileIcon extends Component {
	constructor(props){
		super(props);
	}
	getIcon(){
		const { fileType } = this.props;
		const 
	}
	render(){
		const { fileType, iconStyle } = this.props;
		console.log(fileType);
		const fileString = String(fileType);
		switch(fileString){
			case (powerPointTypes.indexOf(fileString) !== -1):
				return <PowerPointLargeIcon style={iconStyle}/>;
			case (excelTypes.indexOf(fileString) !== -1):
				return <ExcelLargeIcon style={iconStyle}/>;
			case (wordTypes.indexOf(fileString) !== -1):
				return <WordLargeIcon style={iconStyle}/>;
			default:
				return <UnknownFileTypeIcon style={iconStyle}/>
		}
	}
}

FileIcon.propTypes = {
	fileType: PropTypes.string,
	iconStyle: PropTypes.object
}

const powerPointTypes = [
	'application/mspowerpoint',
	'application/vnd.ms-powerpoint',
	'application/vnd.ms-powerpoint',
	'application/mspowerpoint',
	'application/vnd.ms-powerpoint',
	'application/mspowerpoint',
	'application/powerpoint',
	'application/vnd.ms-powerpoint',
	'application/x-mspowerpoint',
	'application/mspowerpoint'
];

const powerPointExtensions = [
'.pot',
'.ppa',
'.pps',
'.ppt',
'.ppz'
];

const excelTypes = [
	'application/excel',
	'application/excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/x-excel',
	'application/excel',
	'application/vnd.ms-excel',
	'application/x-excel',
	'application/x-msexcel',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml-template',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml'
];

const wordTypes = [
	'application/msword'
];

const xmlTypes = [
	'application/xml',
	'text/xml'
];

const xmlExtensions = [
	'.xml'
];

const wordExtensions = [
	'.w6w',
	'.wiz',
	'.word',
	'.doc',
	'.dot'
];

const wordPerfectTypes = [
	'application/wordperfect',
	'application/wordperfect',
	'application/wordperfect6.0',
	'application/wordperfect',
	'application/wordperfect'
];

export default FileIcon;