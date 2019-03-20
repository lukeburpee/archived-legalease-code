import * as constants from './../../../config/constants';

const defaultState = {
	clientSavingError: null,
	matterId: null,
	matterSaved: false,
	existingWorkflow: false,
	workflow: '',
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
			case constants.SET_MATTER_FORM_STEP_INDEX:
				return Object.assign({}, state, {stepIndex: action.step, loading:false, finished:state.stepIndex >=4});
			case constants.SET_MATTER_FORM_LOADING:
				return Object.assign({}, state, {loading:true});
			case constants.SET_MATTER_USE_VENDORS:
				return Object.assign({}, state, {useVendors: !state.useVendors});
			case constants.MATTER_FORM_NEXT_STEP:
				return Object.assign({}, state, {stepIndex: state.stepIndex+1, loading:false, finished:state.stepIndex >=4});
			case constants.MATTER_FORM_PREVIOUS_STEP:
				return Object.assign({}, state, {stepIndex: state.stepIndex-1, loading:false});
			case constants.SET_MATTER_NAME:
				return Object.assign({}, state, {matterName: action.name});
			case constants.SET_MATTER_TYPE:
				return Object.assign({}, state, {matterType: action.matterType});
			case constants.SET_MATTER_EXISTING_VENDOR:
				return Object.assign({}, state, {existingVendor: !state.existingVendor});
			case constants.SET_MATTER_DESCRIPTION:
				return Object.assign({}, state, {matterDescription: action.description});
			case constants.ADD_MATTER_KEYWORD:
				const withKeyword = [
					...state.matterKeywords,
					action.keyword
				];
				return Object.assign({}, state, {matterKeywords:withKeyword});
			case constants.REMOVE_MATTER_KEYWORD:
				const index = state.matterKeywords.indexOf(action.keyword);
				const withoutKeyword = [
					...state.matterKeywords.slice(0,index),
					...state.matterKeywords.slice(index+1,)
				];
				return Object.assign({}, state, {matterKeywords:withoutKeyword});
			case constants.SET_MATTER_STAGE:
				return Object.assign({}, state, {matterStage:action.stage})
			case constants.SET_MATTER_CLIENT:
				return Object.assign({}, state, {matterClient:action.client});
			case constants.SET_MATTER_CLIENT_SAVING_ERROR:
				return Object.assign({}, state, {clientSavingError: action.err});
			case constants.SET_MATTER_EXISTING_CLIENT:
				return Object.assign({}, state, {existingClient:!state.existingClient});
			case constants.SET_MATTER_CASE:
				return Object.assign({}, state, {matterCase:action.matterCase});
			case constants.SET_MATTER_EXISTING_CASE:
				return Object.assign({}, state, {existingCase:!state.existingCase});
			case constants.MATTER_GENERAL_SAVED:
				return Object.assign({}, state, {matterId:action.matterId});
			default:
				return state;
		}
	}
};