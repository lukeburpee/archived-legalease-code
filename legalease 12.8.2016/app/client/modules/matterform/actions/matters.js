import {Meteor} from 'meteor/meteor';

import {
	SET_MATTER_GENERAL_SAVING_ERROR,
	SET_MATTER_DETAILS_SAVING_ERROR,
	SET_MATTER_CLIENT_SAVING_ERROR,
	SET_MATTER_CASE_SAVING_ERROR,
	SET_MATTER_VENDORS_SAVING_ERROR,
	SET_MATTER_FORM_STEP_INDEX,
	SET_MATTER_USE_VENDORS,
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
	SET_MATTER_EXISTING_CASE,
	SET_MATTER_EXISTING_VENDOR
} from './types';

export default {
	setMatterName(name){
		return {
			type: SET_MATTER_NAME,
			name
		}
	},
	setMatterType(matterType){
		return {
			type: SET_MATTER_TYPE,
			matterType
		}
	},
	setMatterStage(stage){
		return {
			type: SET_MATTER_STAGE,
			stage
		}
	},
	setMatterUseVendors(){
		return {
			type: SET_MATTER_USE_VENDORS
		}
	},
	setMatterClient(client){
		return {
			type: SET_MATTER_CLIENT,
			client
		}
	},
	setMatterExistingClient(){
		return {
			type: SET_MATTER_EXISTING_CLIENT
		}
	},
	setMatterCase(matterCase){
		return {
			type: SET_MATTER_CASE,
			matterCase
		}
	},
	setMatterExistingVendor(){
		return {
			type: SET_MATTER_EXISTING_VENDOR
		}
	},
	setMatterExistingCase(){
		return {
			type: SET_MATTER_EXISTING_CASE
		}
	},
	addMatterKeyword(keyword){
		return {
			type: ADD_MATTER_KEYWORD,
			keyword
		}
	},
	removeMatterKeyword(keyword){
		return {
			type: REMOVE_MATTER_KEYWORD,
			keyword
		}
	},
	setMatterFormStep(step){
		return {
			type: SET_MATTER_FORM_STEP_INDEX,
			step
		}
	},
	matterFormNextStep(){
		return {
			type: MATTER_FORM_NEXT_STEP
		}
	},
	matterFormNextStepAndSave(Meteor, Store, step){
		const state = Store.getState();
		let data;
		let matterId;
		let clientId;
		let caseId;
		let vendorId;
		const date = new Date();
		if (step === 0){
			data = {
				name: state.matterform.matterName,
				client: state.matterform.matterClient,
				case: state.matterform.matterCase,
				description: state.matterform.matterDescription,
				keywords: state.matterform.matterKeywords
			};
			Meteor.call('matters.create', data, (err, result) => {
				if (err){
					return {
						type: SET_MATTER_GENERAL_SAVING_ERROR,
						err
					}
				} else {
					console.log(result);
				}
			});
		} else if (step === 1) {
			data = {
				type: state.matterform.matterType,
				stage: state.matterform.matterStage,
				vendors: state.matterform.matterVendors,
				isolate_matter_database: state.matterform.isolateMatterDatabase,
				database_url: state.matterform.databaseUrl
			}
			Meteor.call('matters.update', data, (err, result) => {
				if (err){
					return {
						type: SET_MATTER_DETAILS_SAVING_ERROR,
						err
					} 
				} else {
						console.log(result);
				}
			});
		} else if (step === 2) {
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
				Meteor.call('clients.create', data, (err, result) => {
					if (err){
						return {
							type: SET_MATTER_CLIENT_SAVING_ERROR,
							err
						}
					} else {
						console.log(result);
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
				Meteor.call('clients.create', data, (err, result) => {
					if (err) {
						return {
							type: SET_MATTER_CLIENT_SAVING_ERROR,
							err
						}
					} else {
						console.log(result);
					}
				});
			}
		} else if (step === 3) {
			data = {
				name: state.caseform.caseName,
				type: state.caseform.caseType,
				subtype: state.caseform.subType,
				stage: state.caseform.stage,
				opposingParty: state.caseform.opposingParty,
				court: state.caseform.court,
				judge: state.caseform.judge
			}
			Meteor.call('cases.create', data, (err, result) => {
				if(err){
					return {
						type: SET_MATTER_CASE_SAVING_ERROR,
						err
					}
				} else {
					console.log(result);
				}
			});
		} else if (step === 4) {
			Meteor.call('discovery.create', data, (err, result) => {
				if (err){
					return {
						type: SET_MATTER_DISCOVERY_SAVING_ERROR,
						err
					}
				} else {
					console.log(result);
				}
			});
		}
		return {
			type: MATTER_FORM_NEXT_STEP
		}
	},
	matterFormPreviousStep(){
		return {
			type: MATTER_FORM_PREVIOUS_STEP
		}
	},
	setMatterFormLoading(){
		return {
			type: SET_MATTER_FORM_LOADING
		}
	},
	setMatterDescription(description){
		return {
			type: SET_MATTER_DESCRIPTION,
			description
		}
	}
}