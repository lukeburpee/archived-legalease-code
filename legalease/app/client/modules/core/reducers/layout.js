import React from 'react';
import deepExtend from 'deep-extend';
import * as constants from './../actions/layoutTypes';
import { appbar, layers } from './defaults';

const defaultState = {
	title: 'none',
	appbar: appbar,
	sidebarOpen: false,
	layers: layers
}

export default {
	layout: (state=defaultState, action) => {
		let appBar;
		let layers;
		let newLayers;
		let leftTool;
		let leftContent;
		let rightTool;
		let rightContent;
		let mainTool;
		let mainContent;
		let utilities;
		switch(action.type){
			case constants.LAYOUT_CLOSE_LEFT:
				layers = state.core.layout.layers;
				appBar = state.core.layout.appbar;
				mainTool = layers[4];
				mainContent = layers[5];
				deepExtend(appBar, {height:46, width:'calc(100vw - 200)', left:0});
				deepExtend(mainTool, {width:'calc(100vw - 200)', left:0});
				deepExtend(mainContent, {width:'calc(100vw - 200)', left:0});
				newLayers = [
					layers[2],
					layers[3],
					mainTool,
					mainContent
				];
				return Object.assign({}, state, {
					appbar: appBar,
					layers: newLayers
				});
			case constants.LAYOUT_CLOSE_RIGHT:
				layers = state.core.layout.layers;
				appBar = state.core.layout.appbar;
				mainTool = layers[4];
				mainContent = layers[5];
				deepExtend(appBar, {height:46, width:'calc(100vw - 200)', right:0});
				deepExtend(mainTool, {width:'calc(100vw - 200)', right:0});
				deepExtend(mainContent, {width:'calc(100vw - 200)', right:0});
				newLayers = [
					layers[0],
					layers[1],
					mainTool,
					mainContent
				];
				return Object.assign({}, state, {
					appbar: appBar,
					layers: newLayers
				});
			case constants.LAYOUT_CLOSE_SIDE_CONTENT:
			default:
				return state;
		}
	}
}