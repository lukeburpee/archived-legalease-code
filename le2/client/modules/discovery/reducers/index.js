import { 
	DISCOVERY_SET_ACTIVE_PANEL
} from './../actions/types';

const discoveryDefault = {
	activePanel: 0
}

export default {
	discovery: (state = discoveryDefault, action) => {
		switch(action.type){
			case DISCOVERY_SET_ACTIVE_PANEL:
				return Object.assign({}, state, {activePanel:action.panel});
			default:
				return state;
		}
	}
};