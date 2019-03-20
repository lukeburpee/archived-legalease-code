const defaultState = {
  secondaryOpen: false,
  secondaryType: null
}

const privatelayout = (state = { secondaryType: null }, action) => {
    switch (action.type) {
      case 'SECONDARY_SETTINGS':
        return Object.assign({}, 
          state, {
            secondaryOpen: true,
            secondaryType: 'settings'
        });
      case 'SECONDARY_MAIL':
        return Object.assign({},
         state, {
          secondaryOpen: true,
          secondaryType: 'mail'
        });
      case 'SECONDARY_CALENDAR':
      	return Object.assign({}, 
          state, {
            secondaryOpen: true,
            secondaryType: 'calendar'
        });
      case 'SECONDARY_TIMEKEEPER':
      	return Object.assign({}, 
          state, {
            secondaryOpen: true,
            secondaryType:'timekeeper'
        });
      case 'SECONDARY_CHAT':
      	return Object.assign({}, 
          state, {
            secondaryOpen: true,
            secondaryType: 'chat'
        });
      case 'SECONDARY_CLOSE':
        return Object.assign({},
          state, {
            secondaryOpen: false
        });
      default:
        return state;
    }
};

export default privatelayout;