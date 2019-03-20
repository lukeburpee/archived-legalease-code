import { 
	SET_CLIENT_TYPE,
	SET_CLIENT_SAVING_ERROR,
	SET_CLIENT_INDIVIDUAL_FIRST_NAME,
	SET_CLIENT_INDIVIDUAL_MIDDLE_NAME,
	SET_CLIENT_INDIVIDUAL_LAST_NAME,
	SET_CLIENT_INDIVIDUAL_ADDRESS,
	SET_CLIENT_INDIVIDUAL_CITY,
	SET_CLIENT_INDIVIDUAL_STATE,
	SET_CLIENT_INDIVIDUAL_ZIP,
	SET_CLIENT_INDIVIDUAL_PHONE,
	SET_CLIENT_INDIVIDUAL_EMAIL,
	SET_CLIENT_BUSINESS_NAME, 
	SET_CLIENT_BUSINESS_ADDRESS, 
	SET_CLIENT_BUSINESS_PHONE,  
	SET_CLIENT_BUSINESS_PRINCIPLE_FIRST_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_MIDDLE_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_LAST_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_TITLE, 
	SET_CLIENT_BUSINESS_INDUSTRY 
} from './../actions/types';

const defaultState = {
	clientType: null,
	clientSavingError: null,
	clientIndividualFirstName: '',
	clientIndividualMiddleName: '',
	clientIndividualLastName: '',
	clientIndividualAddress: '',
	clientIndividualCity: '',
	clientIndividualState: '',
	clientIndividualZip: '',
	clientIndividualPhone: '',
	clientIndividualEmail: '',
	clientBusinessName: '',
	clientBusinessAddress: '',
	clientBusinessCity: '',
	clientBusinessState: '',
	clientBusinessZip: '',
	clientBusinessPrincipleFirstName: '',
	clientBusinessPrincipleMiddleName: '',
	clientBusinessPrincipleLastName: '',
	clientBusinessPrincipleTitle: ''
}

export default {
	clientform: (state = defaultState, action) => {
		switch(action.type){
			case SET_CLIENT_TYPE:
				return Object.assign({}, state, {clientType: action.clientType});
			case SET_CLIENT_SAVING_ERROR:
				return Object.assign({}, state, {clientSavingError: action.err});
			case SET_CLIENT_INDIVIDUAL_FIRST_NAME:
				return Object.assign({}, state, {clientIndividualFirstName: action.name});
			case SET_CLIENT_INDIVIDUAL_MIDDLE_NAME:
				return Object.assign({}, state, {clientIndividualMiddleName: action.name});
			case SET_CLIENT_INDIVIDUAL_LAST_NAME:
				return Object.assign({}, state, {clientIndividualLastName: action.name});
			case SET_CLIENT_INDIVIDUAL_ADDRESS:
				return Object.assign({}, state, {clientIndividualAddress: action.address});
			case SET_CLIENT_INDIVIDUAL_CITY:
				return Object.assign({}, state, {clientIndividualCity: action.city});
			case SET_CLIENT_INDIVIDUAL_STATE:
				return Object.assign({}, state, {clientIndividualState: action.state});
			case SET_CLIENT_INDIVIDUAL_ZIP:
				return Object.assign({}, state, {clientIndividualZip: action.zip});
			case SET_CLIENT_INDIVIDUAL_PHONE:
				return Object.assign({}, state, {clientIndividualPhone: action.phone});
			case SET_CLIENT_INDIVIDUAL_EMAIL:
				return Object.assign({}, state, {clientIndividualEmail: action.email});
			case SET_CLIENT_BUSINESS_NAME:
				return Object.assign({}, state, {clientBusinessName: action.name});
			case SET_CLIENT_BUSINESS_ADDRESS:
				return Object.assign({}, state, {clientBusinessAddress: action.address});
			case SET_CLIENT_BUSINESS_PHONE:
				return Object.assign({}, state, {clientBusinessPhone: action.phone});
			case SET_CLIENT_BUSINESS_PRINCIPLE_FIRST_NAME:
				return Object.assign({}, state, {clientBusinessPrincipleFirstName: action.name});
			case SET_CLIENT_BUSINESS_PRINCIPLE_MIDDLE_NAME:
				return Object.assign({}, state, {clientBusinessPrincipleMiddleName: action.name});
			case SET_CLIENT_BUSINESS_PRINCIPLE_LAST_NAME:
				return Object.assign({}, state, {clientBusinessPrincipleLastName: action.name});
			case SET_CLIENT_BUSINESS_PRINCIPLE_TITLE:
				return Object.assign({}, state, {clientBusinessPrincipleTitle: action.title});
			case SET_CLIENT_BUSINESS_INDUSTRY:
				return Object.assign({}, state, {clientBusinessIndustry: action.industry});
			default:
				return state;
		}
	}
};