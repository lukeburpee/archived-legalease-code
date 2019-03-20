import { 
	SET_MATTER_NAME,
	SET_MATTER_TYPE,
	SET_MATTER_DESCRIPTION,
	ADD_MATTER_KEYWORD,
	REMOVE_MATTER_KEYWORD,
	SET_MATTER_STAGE,
	SET_MATTER_CLIENT,
	SET_MATTER_EXISTING_CLIENT,
	SET_MATTER_CASE,
	SET_MATTER_EXISTING_CASE
} from './../actions/types';

const defaultState = {
	matterName: '',
	matterType: null,
	existingClient: true,
	matterClient: null,
	existingCase: true,
	matterDescription: '',
	matterKeywords: []
}

export default {
	matterform: (state = defaultState, action) => {
		switch(action.type){
			case SET_MATTER_NAME:
				return Object.assign({}, state, {matterName: action.name});
			case SET_MATTER_TYPE:
				return Object.assign({}, state, {matterType: action.matterType});
			case SET_MATTER_DESCRIPTION:
				return Object.assign({}, state, {matterDescription: action.description});
			case ADD_MATTER_KEYWORD:
				const withKeyword = [
					...state.matterKeywords,
					action.keyword
				];
				return Object.assign({}, state, {matterKeywords:withKeyword});
			case REMOVE_MATTER_KEYWORD:
				const index = state.matterKeywords.indexOf(keyword);
				const withoutKeyword = [
					...state.matterKeywords.slice(0,index),
					...state.matterKeywords.slice(index,)
				];
				return Object.assign({}, state, {matterKeywords:withoutKeyword});
			case SET_MATTER_STAGE:
				return Object.assign({}, state, {matterStage:action.stage})
			case SET_MATTER_CLIENT:
				return Object.assign({}, state, {matterClient:action.client});
			case SET_MATTER_EXISTING_CLIENT:
				return Object.assign({}, state, {existingClient:!state.existingClient});
			case SET_MATTER_CASE:
				return Object.assign({}, state, {matterCase:action.case});
			case SET_MATTER_EXISTING_CASE:
				return Object.assign({}, state, {existingCase:!state.existingCase});
			default:
				return state;
		}
	}
};