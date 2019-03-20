import {
	SET_CLIENT_TYPE,
	SET_CLIENT_INDIVIDUAL_FIRST_NAME,
	SET_CLIENT_INDIVIDUAL_MIDDLE_NAME,
	SET_CLIENT_INDIVIDUAL_LAST_NAME, 
	SET_CLIENT_INDIVIDUAL_PHONE,
	SET_CLIENT_INDIVIDUAL_EMAIL,
	SET_CLIENT_INDIVIDUAL_ADDRESS, 
	SET_CLIENT_INDIVIDUAL_CITY,
	SET_CLIENT_INDIVIDUAL_STATE,
	SET_CLIENT_INDIVIDUAL_ZIP,
	SET_CLIENT_BUSINESS_NAME, 
	SET_CLIENT_BUSINESS_ADDRESS,
	SET_CLIENT_BUSINESS_CITY,
	SET_CLIENT_BUSINESS_STATE,
	SET_CLIENT_BUSINESS_ZIP, 
	SET_CLIENT_BUSINESS_PHONE, 
	SET_CLIENT_BUSINESS_PRINCIPLE_FIRST_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_MIDDLE_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_LAST_NAME, 
	SET_CLIENT_BUSINESS_PRINCIPLE_TITLE, 
	SET_CLIENT_BUSINESS_INDUSTRY 
} from './types'

export default {
	setClientType(clientType){
		return {
			type: SET_CLIENT_TYPE,
			clientType
		}
	},
	setClientIndividualFirstName(name){
		return {
			type: SET_CLIENT_INDIVIDUAL_FIRST_NAME,
			name
		}
	},
	setClientIndividualMiddleName(name){
		return {
			type: SET_CLIENT_INDIVIDUAL_MIDDLE_NAME,
			name
		}
	},
	setClientIndividualLastName(name){
		return {
			type: SET_CLIENT_INDIVIDUAL_LAST_NAME,
			name
		}
	},
	setClientIndividualAddress(address){
		return {
			type: SET_CLIENT_INDIVIDUAL_ADDRESS,
			address
		}
	},
	setClientIndividualCity(city){
		return {
			type: SET_CLIENT_INDIVIDUAL_CITY,
			city
		}
	},
	setClientIndividualState(state){
		return {
			type: SET_CLIENT_INDIVIDUAL_STATE,
			state
		}
	},
	setClientIndividualZip(zip){
		return {
			type: SET_CLIENT_INDIVIDUAL_ZIP,
			zip
		}
	},
	setClientIndividualPhone(phone){
		return {
			type: SET_CLIENT_INDIVIDUAL_PHONE,
			phone
		}
	},
	setClientBusinessName(name){
		return {
			type: SET_CLIENT_BUSINESS_NAME,
			name
		}
	},
	setClientBusinessAddress(address){
		return {
			type: SET_CLIENT_BUSINESS_ADDRESS,
			address
		}
	},
	setClientBusinessCity(city){
		return {
			type: SET_CLIENT_BUSINESS_CITY,
			city
		}
	},
	setClientBusinessState(state){
		return {
			type: SET_CLIENT_BUSINESS_STATE,
			state
		}
	},
	setClientBusinessZip(zip){
		return {
			type: SET_CLIENT_BUSINESS_ZIP,
			zip
		}
	},
	setClientBusinessIndustry(industry){
		return {
			type: SET_CLIENT_BUSINESS_INDUSTRY,
			industry
		}
	},
	setClientBusinessPhone(phone){
		return {
			type: SET_CLIENT_BUSINESS_PHONE,
			phone
		}
	},
	setClientBusinessPrincipleFirstName(name){
		return {
			type: SET_CLIENT_BUSINESS_PRINCIPLE_FIRST_NAME,
			name
		}
	},
	setClientBusinessPrincipleMiddleName(name){
		return {
			type: SET_CLIENT_BUSINESS_PRINCIPLE_MIDDLE_NAME,
			name
		}
	},
	setClientBusinessPrincipleLastName(name){
		return {
			type: SET_CLIENT_BUSINESS_PRINCIPLE_LAST_NAME,
			name
		}
	},
	setClientBusinessPrincipleTitle(title){
		return {
			type: SET_CLIENT_BUSINESS_PRINCIPLE_TITLE,
			title
		}
	}
}