import {
	SEARCH_SET,
	SEARCH_SET_NAME,
	SEARCH_SET_SCOPE,
	SEARCH_SET_TEXT,
	SEARCH_SET_IS_CACHED,
	SEARCH_SET_INCLUDED,
	SEARCH_SET_PRIVATE,
	SEARCH_SET_RULES,
	SEARCH_SET_CACHE,
	SEARCH_SET_FILTERS,
	SEARCH_SET_FILTER_RULES,
	SEARCH_SET_COLUMNS,
	SEARCH_SET_COLUMN_ORDER,
	SEARCH_IS_RERUN_REQUIRED,
	SEARCH_IS_CACHED,
	SEARCH_IS_AUTO_UPDATE,
	SEARCH_SET_SORT
} from './types'

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
			type: SEARCH_SET_NAME,
			name
		}
	},
	setIsRerunRequired(rerunRequired){
		return {
			type: SEARCH_IS_RERUN_REQUIRED,
			rerunRequired
		}
	},
	setSearchIncluded(includedDocuments){
		return {
			type: SEARCH_SET_INCLUDED,
			includedDocuments
		}
	},
	setSearchIsCached(isCached){
		return {
			type: SEARCH_IS_CACHED,
			isCached
		}
	},
	setSearchIsAutoUpdate(isAutoUpdate){
		return {
			type: SEARCH_IS_AUTO_UPDATE,
			isAutoUpdate
		}
	},
	setSearchScope (scope) {
		return {
			type: SEARCH_SET_SCOPE,
			scope
		}
	},
	setSearchText (text) {
		return {
			type: SEARCH_SET_TEXT,
			text
		}
	},
	setSearchIsCache() {
		return {
			type: SEARCH_SET_IS_CACHED
		}
	},
	setSearchCache(cache) {
		return {
			type: SEARCH_SET_CACHE,
			cache
		}
	},
	setSearchPrivate(){
		return {
			type: SEARCH_SET_PRIVATE
		}
	},
	setSearchIncluded(included){
		return {
			type: SEARCH_SET_INCLUDED,
			included
		}
	},
	setSearchFilters(filters){
		return {
			type: SEARCH_SET_FILTERS,
			filters
		}
	},
	setSearchFilterRules(filterRules){
		return {
			type: SEARCH_SET_FILTER_RULES,
			filterRules
		}
	}
}