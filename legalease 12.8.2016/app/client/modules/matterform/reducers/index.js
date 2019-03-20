import { 
	SET_MATTER_CLIENT_SAVING_ERROR,
	SET_MATTER_USE_VENDORS,
	SET_MATTER_EXISTING_VENDOR,
	SET_MATTER_FORM_STEP_INDEX,
	MATTER_FORM_NEXT_STEP,
	MATTER_FORM_PREVIOUS_STEP,
	SET_MATTER_FORM_LOADING,
	SET_MATTER_FORM_FINISHED,
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
	clientSavingError: null,
	matterSaved: false,
	stepIndex: 0,
	loading: false,
	finished: false,
	matterName: '',
	matterType: null,
	matterStage: null,
	existingClient: true,
	matterClient: null,
	useVendors: false,
	matterCase: null,
	existingCase: true,
	existingVendor: false,
	matterVendors: [],
	matterDescription: '',
	matterKeywords: [],
	isolateMatterDatabase: false,
	databaseUrl: ''
}

export default {
	matterform: (state = defaultState, action) => {
		switch(action.type){
			case SET_MATTER_FORM_STEP_INDEX:
				return Object.assign({}, state, {stepIndex: action.step, loading:false, finished:state.stepIndex >=4});
			case SET_MATTER_FORM_LOADING:
				return Object.assign({}, state, {loading:true});
			case SET_MATTER_USE_VENDORS:
				return Object.assign({}, state, {useVendors: !state.useVendors});
			case MATTER_FORM_NEXT_STEP:
				return Object.assign({}, state, {stepIndex: state.stepIndex+1, loading:false, finished:state.stepIndex >=4});
			case MATTER_FORM_PREVIOUS_STEP:
				return Object.assign({}, state, {stepIndex: state.stepIndex-1, loading:false});
			case SET_MATTER_NAME:
				return Object.assign({}, state, {matterName: action.name});
			case SET_MATTER_TYPE:
				return Object.assign({}, state, {matterType: action.matterType});
			case SET_MATTER_EXISTING_VENDOR:
				return Object.assign({}, state, {existingVendor: !state.existingVendor});
			case SET_MATTER_DESCRIPTION:
				return Object.assign({}, state, {matterDescription: action.description});
			case ADD_MATTER_KEYWORD:
				const withKeyword = [
					...state.matterKeywords,
					action.keyword
				];
				return Object.assign({}, state, {matterKeywords:withKeyword});
			case REMOVE_MATTER_KEYWORD:
				const index = state.matterKeywords.indexOf(action.keyword);
				const withoutKeyword = [
					...state.matterKeywords.slice(0,index),
					...state.matterKeywords.slice(index+1,)
				];
				return Object.assign({}, state, {matterKeywords:withoutKeyword});
			case SET_MATTER_STAGE:
				return Object.assign({}, state, {matterStage:action.stage})
			case SET_MATTER_CLIENT:
				return Object.assign({}, state, {matterClient:action.client});
			case SET_MATTER_CLIENT_SAVING_ERROR:
				return Object.assign({}, state, {clientSavingError: action.err});
			case SET_MATTER_EXISTING_CLIENT:
				return Object.assign({}, state, {existingClient:!state.existingClient});
			case SET_MATTER_CASE:
				return Object.assign({}, state, {matterCase:action.matterCase});
			case SET_MATTER_EXISTING_CASE:
				return Object.assign({}, state, {existingCase:!state.existingCase});
			default:
				return state;
		}
	}
};