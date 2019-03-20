import SET_COLLECTION_FILES from './../actions/statusActions';

const defaultState = {
	collectionFiles: null
}

export default {
	status: (state = defaultState, action) => {
		switch(action.type){
			case SET_COLLECTION_FILES:
				return Object.assign({}, state, {collectionFiles: action.files});
			default:
				return state;
		}
	}
}