import * as constants from './../../../config/constants';

const viewerDefault = {
	viewerOpen: null,
	viewerType: 'htmlview',
	zoom: 1.2,
	rotation: 0,
	page: '',
	pages: null
}
let zoom;

export default {
	viewer: (state = viewerDefault, action) => {
		switch(action.type){
			case constants.VIEWER_OPEN:
				return Object.assign({}, state, { viewerOpen: true });
			case constants.VIEWER_CLOSE:
				return Object.assign({}, state, { viewerOpen: null });
			case constants.VIEWER_SET_TYPE:
				return Object.assign({}, state, { viewerType: action.viewerType });
			case constants.VIEWER_SET_DOCUMENT:
				return Object.assign({}, state, { activeFile: action.file });
			case constants.VIEWER_SET_PAGES:
				return Object.assign({}, state, { pages: action.pages, page: 1 });
			case constants.VIEWER_SET_ACTIVE_PAGE:
				return Object.assign({}, state, { page: action.page });
			case constants.VIEWER_NEXT_PAGE:
				return Object.assign({}, state, { page: action.page + 1 });
			case constants.VIEWER_PREVIOUS_PAGE:
				return Object.assign({}, state, { page: action.page - 1 });
			case constants.VIEWER_ROTATE_CLOCKWISE:
				return Object.assign({}, state, { rotation: action.rotation + 90 });
			case constants.VIEWER_ROTATE_COUNTER_CLOCKWISE:
				return Object.assign({}, state, {rotation: action.rotation - 90 });
			case constants.VIEWER_ZOOM_IN:
				return Object.assign({}, state, { zoom: action.zoom - .2, zoomDisplay: String((action.zoom / 2) * 100)});
			case constants.VIEWER_ZOOM_OUT:
				return Object.assign({}, state, { zoom: action.zoom + .2, zoomDisplay: String((action.zoom * 2) * 100)});
			case constants.VIEWER_SET_ZOOM:
				return Object.assign({}, state, { zoom: (Number(action.zoom)/100), zoomDisplay: action.zoom});
			default:
				return state;
		}
	}
};