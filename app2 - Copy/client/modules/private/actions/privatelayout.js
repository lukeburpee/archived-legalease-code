export default {
	loadSettings({dispatch}){
		dispatch({
			type: 'SECONDARY_SETTINGS'
		});
	},
	loadMail({dispatch}){
		dispatch({
			type: 'SECONDARY_MAIL'
		});
	},
	loadCalendar({dispatch}){
		dispatch({
			type: 'SECONDARY_CALENDAR'
		});
	},
	loadTimekeeper({dispatch}){
		dispatch({
			type: 'SECONDARY_TIMEKEEPER'
		})
	},
	loadChat({dispatch}){
		dispatch({
			type: 'SECONDARY_CHAT'
		});
	},
	closeSecondary({dispatch}){
		dispatch({
			type: 'SECONDARY_CLOSE'
		});
	}
}