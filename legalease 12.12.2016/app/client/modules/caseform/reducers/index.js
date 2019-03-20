

const defaultState = {
	caseName: '',
	caseSaved: false,
	type: null,
	subType: null,
	stage: null,
	docket: null,
	party: 'plaintiff',
	court: null,
	judge: null,
	opposingParty: '',
	federalAgencies: null,
	stateAgencies: null,
	opposingCounselFirms: [],
	opposingCounselContacts: [],
	firmUsers: [],
	clientUsers: [],
	vendorUsers: []
};

export default {
	caseform: (state = defaultState, action) => {
		switch(action.type){
			default:
				return state;
		}
	}
};