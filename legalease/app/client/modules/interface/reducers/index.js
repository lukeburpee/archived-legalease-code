import * as constants from './../actions/layoutTypes';
import layout from './state.layout.default';

export default {
	layout: (state = layout, action) => {
		switch(action){
			case constants.LAYOUT_CLOSE_LEFT_ONLY:
				return Object.assign({}, state, {
					left:false, 
					leftTool: null, 
					leftContent: null
				});
			case constants.LAYOUT_CLOSE_RIGHT_ONLY:
				return Object.assign({}, state, {
					right:false, 
					rightTool: null, 
					rightContent: null
				});
			case constants.LAYOUT_CLOSE_SIDE_CONTENT:
				return Object.assign({}, state, {
					left:false, 
					right:false, 
					leftTool: null, 
					rightTool: null, 
					leftContent: null, 
					rightContent: null
				});
			case constants.LAYOUT_OPEN_LEFT_ONLY:
				return Object.assign({}, state, {
					left:true, 
					leftTool: action.leftTool, 
					leftContent: action.leftContent
				});
			case constants.LAYOUT_OPEN_RIGHT_ONLY:
				return Object.assign({}, state, {
					right:true, 
					rightTool: action.rightTool, 
					rightContent:action.rightContent
				});
			case constants.LAYOUT_OPEN_SIDE_CONTENT:
				return Object.assign({}, state, {
					left:true, 
					right:true, 
					leftTool: action.leftTool, 
					rightTool: action.rightTool, 
					leftContent: action.leftContent, 
					rightContent:action.rightContent
				});
			case constants.LAYOUT_OPEN_UTILITY:
				return Object.assign({}, state, {
					utilitiesOpen:true, 
					utilitiesMainContent: action.utilitiesMainContent,
					utilitiesBottomContent: action.utilitiesBottomContent
				});
			case constants.LAYOUT_CLOSE_UTILITY:
				return Object.assign({}, state, {
					utilitiesOpen:false, 
					utilitiesMainContent: null,
					utilitiesBottomContent: null
				});
			case constants.LAYOUT_OPEN_CHAT_BOX:
				return Object.assign({}, state, {
					chatBox:true,
					chatBoxMin:false,
					chatBoxContent:action.chatBoxContent,
				});
			case constants.LAYOUT_CLOSE_CHAT_BOX:
				return Object.assign({}, state, {
					chatBox:false,
					chatBoxMin:false,
					chatBoxContent:null
				})
			case constants.LAYOUT_MINIMIZE_CHAT_BOX:
				return Object.assign({}, state, {
					chatBoxMin:true
				});
			default:
				return state;
		}
	}
}