import React from 'react';

import { MuiTreeList } from 'react-treeview-mui';

import { treeItems } from './../../../config/treeviewTestData';

const FileSearchLeftContent = () => (
	<MuiTreeList
		listItems={treeItems}
		contentKey={'label'}
		useFolderIcons={true}
	/>
);

export default FileSearchLeftContent;