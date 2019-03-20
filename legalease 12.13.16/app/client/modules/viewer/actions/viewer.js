import * as constants from './../../../config/constants'

export default {
	viewerOpen(){
		return {
			type: constants.VIEWER_OPEN
		}
	},
	viewerClose(){
		return {
			type: constants.VIEWER_CLOSE
		}
	},
	setViewerDocument(file, pages){
		return {
			type: constants.VIEWER_SET_DOCUMENT,
			file,
			pages
		}
	},
	nextViewerPage(page){
		return {
			type: constants.VIEWER_NEXT_PAGE,
			page
		}
	},
	previousViewerPage(page){
		return {
			type: constants.VIEWER_PREVIOUS_PAGE,
			page
		}
	},
	setViewerType(viewerType){
		return {
			type: constants.VIEWER_SET_TYPE,
			viewerType
		}
	},
	setViewerPages(pages){
		return {
			type: constants.VIEWER_SET_PAGES,
			pages
		}
	},
	setViewerPage(page){
		return {
			type: constants.VIEWER_SET_ACTIVE_PAGE,
			page
		}
	},
	rotateClockwise(rotation){
		return {
			type: constants.VIEWER_ROTATE_CLOCKWISE,
			rotation
		}
	},
	rotateCounterClockwise(rotation){
		return {
			type: constants.VIEWER_ROTATE_COUNTER_CLOCKWISE,
			rotation
		}
	},
	zoomIn(zoom){
		return {
			type: constants.VIEWER_ZOOM_IN,
			zoom
		}
	},
	zoomOut(zoom){
		return {
			type: constants.VIEWER_ZOOM_OUT,
			zoom
		}
	},
	setZoom(zoom){
		return {
			type: constants.VIEWER_SET_ZOOM,
			zoom
		}
	}
}