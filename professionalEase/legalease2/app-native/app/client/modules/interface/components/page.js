import React,{ Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-material-ui';
import Toolbar from './maintoolbar';
import ActionButton from 'react-native-action-button';
import UtilityToolbar from './utilitiestoolbar';
import Main from './mainutilities';
import Fab from './fab';
import LowerUtilities from './lowerutilities';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLOR } from 'react-native-material-ui';

import {connect} from 'react-redux';

const PageImpl = ({title, children, utilities, mainHeight, minorHeight, fab}) => (
	<View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between'}}>
		<Toolbar title={title} />
		<View style={{flex:1}}>
			<Card style={{container:{elevation:2, marginHorizontal:0, marginVertical:0, flex:(utilities)? mainHeight:1}}}>
				<Main>{children}</Main>
			</Card>
			<View style={{backgroundColor:COLOR.grey600, flex:(utilities)? minorHeight:0}}>
				<LowerUtilities/>
			</View>
		</View>
		{(fab)?<Fab/>:null}
		<UtilityToolbar/>
	</View>
);

const mapStateToProps = (state) => ({
	utilities: state.interface.utilities,
	mainHeight: state.interface.mainHeight,
	minorHeight: state.interface.minorHeight,
	fab: state.interface.fab
});

const Page = connect(mapStateToProps)(PageImpl);

export default Page;