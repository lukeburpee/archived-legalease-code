import * as constants from './layoutTypes';

export default {
	closeLeft: () => {
		return {
			type: constants.LAYOUT_CLOSE_LEFT_ONLY
		}
	},
	closeRight: () => {
		return {
			type: constants.LAYOUT_CLOSE_RIGHT_ONLY
		}
	},
	closeSideContent: () => {
		return {
			type: constants.LAYOUT_CLOSE_SIDE_CONTENT
		}
	},
	openLeft: (leftTool, leftContent) => {
		return {
			type: constants.LAYOUT_OPEN_LEFT_ONLY,
			leftTool,
			leftContent
		}
	},
	openRight: (rightTool, rightContent) => {
		return {
			type: constants.LAYOUT_OPEN_RIGHT_ONLY,
			rightTool,
			rightContent
		}
	},
	openSideContent: (leftTool, leftContent, rightTool, rightContent) => {
		return {
			type: constants.LAYOUT_OPEN_SIDE_CONTENT,
			leftTool,
			leftContent,
			rightTool,
			rightContent
		}
	},
	openUtility: (utilityMainContent, utilityBottomContent) => {
		return {
			type: constants.LAYOUT_OPEN_UTILITY,
			utilityMainContent,
			utilityBottomContent
		}
	},
	closeUtility: () => {
		return {
			type: constants.LAYOUT_CLOSE_UTILITY
		}
	},
	openChatBox: (chatBoxContent) => {
		return {
			type: constants.LAYOUT_OPEN_CHAT_BOX,
			chatBoxContent
		}
	},
	closeChatBox: () => {
		return {
			type: constants.LAYOUT_CLOSE_CHAT_BOX
		}
	},
	minimizeChatBox: () => {
		return {
			type: constants.LAYOUT_MINIMIZE_CHAT_BOX
		}
	}
}