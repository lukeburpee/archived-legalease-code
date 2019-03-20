import {
	VIEWER_OPEN,
	VIEWER_CLOSE,
	VIEWER_SET_DOCUMENT,
	VIEWER_SET_PAGES,
	VIEWER_SET_ACTIVE_PAGE,
	VIEWER_NEXT_PAGE,
	VIEWER_PREVIOUS_PAGE,
	VIEWER_ROTATE_CLOCKWISE,
	VIEWER_ROTATE_COUNTER_CLOCKWISE,
	VIEWER_ZOOM_IN,
	VIEWER_ZOOM_OUT,
	VIEWER_SET_ZOOM
} from './types'

export default {
	viewerOpen(){
		return {
			type: VIEWER_OPEN
		}
	},
	viewerClose(){
		return {
			type: VIEWER_CLOSE
		}
	},
	setViewerDocument(file, pages){
		return {
			type: VIEWER_SET_DOCUMENT,
			file,
			pages
		}
	},
	nextViewerPage(page){
		return {
			type: VIEWER_NEXT_PAGE,
			page
		}
	},
	previousViewerPage(page){
		return {
			type: VIEWER_PREVIOUS_PAGE,
			page
		}
	},
	setViewerPages(pages){
		return {
			type: VIEWER_SET_PAGES,
			pages
		}
	},
	setViewerPage(page){
		return {
			type: VIEWER_SET_ACTIVE_PAGE,
			page
		}
	},
	rotateClockwise(rotation){
		return {
			type: VIEWER_ROTATE_CLOCKWISE,
			rotation
		}
	},
	rotateCounterClockwise(rotation){
		return {
			type: VIEWER_ROTATE_COUNTER_CLOCKWISE,
			rotation
		}
	},
	zoomIn(zoom){
		return {
			type: VIEWER_ZOOM_IN,
			zoom
		}
	},
	zoomOut(zoom){
		return {
			type: VIEWER_ZOOM_OUT,
			zoom
		}
	},
	setZoom(zoom){
		return {
			type: VIEWER_SET_ZOOM,
			zoom
		}
	}
}