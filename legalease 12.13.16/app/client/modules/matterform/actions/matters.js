import {Meteor} from 'meteor/meteor';

import * as constants from './../../../config/constants';

export default {
	setMatterName(name){
		return {
			type: constants.SET_MATTER_NAME,
			name
		}
	},
	setMatterType(matterType){
		return {
			type: constants.SET_MATTER_TYPE,
			matterType
		}
	},
	setMatterStage(stage){
		return {
			type: constants.SET_MATTER_STAGE,
			stage
		}
	},
	setMatterUseVendors(){
		return {
			type: constants.SET_MATTER_USE_VENDORS
		}
	},
	setMatterClient(client){
		return {
			type: constants.SET_MATTER_CLIENT,
			client
		}
	},
	setMatterExistingClient(){
		return {
			type: constants.SET_MATTER_EXISTING_CLIENT
		}
	},
	setMatterCase(matterCase){
		return {
			type: constants.SET_MATTER_CASE,
			matterCase
		}
	},
	setMatterExistingVendor(){
		return {
			type: constants.SET_MATTER_EXISTING_VENDOR
		}
	},
	setMatterExistingCase(){
		return {
			type: constants.SET_MATTER_EXISTING_CASE
		}
	},
	addMatterKeyword(keyword){
		return {
			type: constants.ADD_MATTER_KEYWORD,
			keyword
		}
	},
	removeMatterKeyword(keyword){
		return {
			type: constants.REMOVE_MATTER_KEYWORD,
			keyword
		}
	},
	setMatterFormStep(step){
		return {
			type: constants.SET_MATTER_FORM_STEP_INDEX,
			step
		}
	},
	matterFormNextStep(){
		return {
			type: constants.MATTER_FORM_NEXT_STEP
		}
	},
	matterFormNextStepAndSave(dispatch, Meteor, Store, step){
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
						type: constants.SET_MATTER_GENERAL_SAVING_ERROR,
						err
					}
				} else {
					matterId = result;
					console.log(matterId);
					dispatch(setMatterGeneralSaved(matterId));
				}
			});
		} else if (step === 1) {
			matterId = state.matterform.matterId;
			data = {
				type: state.matterform.matterType,
				stage: state.matterform.matterStage,
				existingWorkflow: state.matterform.existingWorkflow,
				workflow: state.matterform.workflow,
				vendors: state.matterform.matterVendors,
				isolateMatterDatabase: state.matterform.isolateMatterDatabase,
				useExternalDatabase: state.matterform.useExternalDatabase,
				database_url: state.matterform.databaseUrl
			}
			Meteor.call('matters.update', matterId, data, (err, result) => {
				if (err){
					return {
						type: constants.SET_MATTER_DETAILS_SAVING_ERROR,
						err
					} 
				} else {
						console.log(result);
				}
			});
		} else if (step === 2) {
			if (state.clientform.clientType === 1){
				data = {
					companyName: 'none',
					type: 'individual',
					createdAt: date,
					pointOfContact:{
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
				}
				console.log(data);
				Meteor.call('clients.create', data, (err, result) => {
					if (err){
						return {
							type: constants.SET_MATTER_CLIENT_SAVING_ERROR,
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
							type: constants.SET_MATTER_CLIENT_SAVING_ERROR,
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
						type: constants.SET_MATTER_CASE_SAVING_ERROR,
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
						type: constants.SET_MATTER_DISCOVERY_SAVING_ERROR,
						err
					}
				} else {
					console.log(result);
				}
			});
		}
		return {
			type: constants.MATTER_FORM_NEXT_STEP
		}
	},
	matterFormPreviousStep(){
		return {
			type: constants.MATTER_FORM_PREVIOUS_STEP
		}
	},
	setMatterFormLoading(){
		return {
			type: constants.SET_MATTER_FORM_LOADING
		}
	},
	setMatterDescription(description){
		return {
			type: constants.SET_MATTER_DESCRIPTION,
			description
		}
	}
}

function setMatterGeneralSaved(matterId){
	return {
		type: constants.MATTER_GENERAL_SAVED,
		matterId
	}
}