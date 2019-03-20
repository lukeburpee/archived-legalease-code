import * as constants from './../../../config/constants';

export default {
	setSearch(name, text, rerunRequired, isCached, autoUpdate, keyword, filters, columns, sort){
		return {
			type: SEARCH_SET,
			name,
			text,
			rerunRequired,
			isCached,
			autoUpdate,
			keyword,
			filters,
			columns,
			sort
		}
	},
	setSearchName (name) {
		return {
			type: constants.SEARCH_SET_NAME,
			name
		}
	},
	setIsRerunRequired(rerunRequired){
		return {
			type: constants.SEARCH_IS_RERUN_REQUIRED,
			rerunRequired
		}
	},
	setSearchIncluded(includedDocuments){
		return {
			type: constants.SEARCH_SET_INCLUDED,
			includedDocuments
		}
	},
	setSearchIsCached(isCached){
		return {
			type: constants.SEARCH_IS_CACHED,
			isCached
		}
	},
	setSearchIsAutoUpdate(isAutoUpdate){
		return {
			type: constants.SEARCH_IS_AUTO_UPDATE,
			isAutoUpdate
		}
	},
	setSearchScope (scope) {
		return {
			type: constants.SEARCH_SET_SCOPE,
			scope
		}
	},
	setSearchText (text) {
		return {
			type: constants.SEARCH_SET_TEXT,
			text
		}
	},
	setSearchIsCache() {
		return {
			type: constants.SEARCH_SET_IS_CACHED
		}
	},
	setSearchCache(cache) {
		return {
			type: constants.SEARCH_SET_CACHE,
			cache
		}
	},
	setSearchPrivate(){
		return {
			type: constants.SEARCH_SET_PRIVATE
		}
	},
	setSearchIncluded(included){
		return {
			type: constants.SEARCH_SET_INCLUDED,
			included
		}
	},
	setSearchFilters(filters){
		return {
			type: constants.SEARCH_SET_FILTERS,
			filters
		}
	},
	setSearchFilterRules(filterRules){
		return {
			type: constants.SEARCH_SET_FILTER_RULES,
			filterRules
		}
	}
}