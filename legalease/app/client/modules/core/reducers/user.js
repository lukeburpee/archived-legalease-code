const defaultState = {
	firstname:'',
	middlename:'',
	lastname:'',
	
}

export default {
	user: (state=defaultState, action) => {
		switch(action.type){
			default:
				return state;
		}
	}
}