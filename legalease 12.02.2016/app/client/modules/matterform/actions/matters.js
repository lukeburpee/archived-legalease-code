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
	setMatterExistingCase(){
		return {
			type: SET_MATTER_EXISTING_CASE
		}
	}
}