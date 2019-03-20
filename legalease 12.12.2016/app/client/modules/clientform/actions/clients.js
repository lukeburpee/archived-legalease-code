import * as constants from './../../../config/constants'

export default {
	createClient({Meteor, Store}){
		const state = Store.getState();
		let data;
		const date = new Date();
		if (state.clientform.clientType === 1){
			data = {
				type: 'individual',
				createdAt: date,
				firstname: state.clientform.clientIndividualFirstName,
				middlename: state.clientform.clientIndividualMiddleName,
				lastname: state.clientform.clientIndividualLastName,
				address: state.clientform.clientIndividualAddress,
				city: state.clientform.clientIndividualCity,
				state: state.clientform.clientIndividualState,
				zip: state.clientform.clientIndividualZip,
				phone: state.clientform.clientIndividualPhone,
				email: state.clientform.clientIndividualEmail
			}
			console.log(data);
			Meteor.call('clients.create', data, (err) => {
				return {
					type: constants.SET_CLIENT_SAVING_ERROR,
					err
				}
			});
		} else {
			data = {
				type: 'business',
				createdAt: date,
				name: state.clientform.clientBusinessName,
				address: state.clientform.clientBusinessAddress,
				city: state.clientform.clientBusinessCity,
				state: state.clientform.clientBusinessState,
				zip: state.clientform.clientBusinessZip,
				principle: {
					firstname: state.clientform.clientBusinessPrincipleFirstName,
					middlename: state.clientform.clientBusinessPrincipleMiddleName,
					lastname: state.clientform.clientBusinessPrincipleLastName,
					title: state.clientform.clientBusinessPrincipleTitle
				}
			}
			console.log(data);
			Meteor.call('clients.create', data, (err) => {
				return {
					type: constants.SET_CLIENT_SAVING_ERROR,
					err
				}
			});
		}
	},
	setClientType(clientType){
		return {
			type: constants.SET_CLIENT_TYPE,
			clientType
		}
	},
	setClientIndividualFirstName(name){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_FIRST_NAME,
			name
		}
	},
	setClientIndividualMiddleName(name){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_MIDDLE_NAME,
			name
		}
	},
	setClientIndividualLastName(name){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_LAST_NAME,
			name
		}
	},
	setClientIndividualAddress(address){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_ADDRESS,
			address
		}
	},
	setClientIndividualCity(city){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_CITY,
			city
		}
	},
	setClientIndividualState(state){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_STATE,
			state
		}
	},
	setClientIndividualZip(zip){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_ZIP,
			zip
		}
	},
	setClientIndividualPhone(phone){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_PHONE,
			phone
		}
	},
	setClientIndividualEmail(email){
		return {
			type: constants.SET_CLIENT_INDIVIDUAL_EMAIL,
			email
		}
	},
	setClientBusinessName(name){
		return {
			type: constants.SET_CLIENT_BUSINESS_NAME,
			name
		}
	},
	setClientBusinessAddress(address){
		return {
			type: constants.SET_CLIENT_BUSINESS_ADDRESS,
			address
		}
	},
	setClientBusinessCity(city){
		return {
			type: constants.SET_CLIENT_BUSINESS_CITY,
			city
		}
	},
	setClientBusinessState(state){
		return {
			type: constants.SET_CLIENT_BUSINESS_STATE,
			state
		}
	},
	setClientBusinessZip(zip){
		return {
			type: constants.SET_CLIENT_BUSINESS_ZIP,
			zip
		}
	},
	setClientBusinessIndustry(industry){
		return {
			type: constants.SET_CLIENT_BUSINESS_INDUSTRY,
			industry
		}
	},
	setClientBusinessPhone(phone){
		return {
			type: constants.SET_CLIENT_BUSINESS_PHONE,
			phone
		}
	},
	setClientBusinessPrincipleFirstName(name){
		return {
			type: constants.SET_CLIENT_BUSINESS_PRINCIPLE_FIRST_NAME,
			name
		}
	},
	setClientBusinessPrincipleMiddleName(name){
		return {
			type: constants.SET_CLIENT_BUSINESS_PRINCIPLE_MIDDLE_NAME,
			name
		}
	},
	setClientBusinessPrincipleLastName(name){
		return {
			type: constants.SET_CLIENT_BUSINESS_PRINCIPLE_LAST_NAME,
			name
		}
	},
	setClientBusinessPrincipleTitle(title){
		return {
			type: constants.SET_CLIENT_BUSINESS_PRINCIPLE_TITLE,
			title
		}
	}
}