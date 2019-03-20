export default {
  secondary: (state = { secondaryType: null }, action) => {
    switch (action.type) {
      case 'SECONDARY_SETTINGS':
        return Object.assign({}, state, {secondaryType:'settings'});
      case 'SECONDARY_MAIL':
        return Object.assign({}, state, {secondaryType:'mail'});
      case 'SECONDARY_CALENDAR':
      	return Object.assign({}, state, {secondaryType:'calendar'});
      case 'SECONDARY_TIMEKEEPER':
      	return Object.assign({}, state, {secondaryType:'timekeeper'});
      case 'SECONDARY_CHAT':
      	return Object.assign({}, state, {secondaryType:'chat'});
      default:
        return state;
    }
  }
};