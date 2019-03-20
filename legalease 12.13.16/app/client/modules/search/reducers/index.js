import * as constants from './../../../config/constants'

const filters = [{
    id: 'name',
    label: 'Name',
    type: 'string'
    }, {
    id: 'category',
        label: 'Category',
        type: 'integer',
        input: 'select',
        values: {
            1: 'Books',
            2: 'Movies',
            3: 'Music',
            4: 'Tools',
            5: 'Goodies',
            6: 'Clothes'
        },
        operators: [
            'equal', 
            'not_equal', 
            'in', 
            'not_in', 
            'is_null', 
            'is_not_null'
        ]
        }, {
            id: 'in_stock',
            label: 'In stock',
            type: 'integer',
            input: 'radio',
            values: {
                1: 'Yes',
                0: 'No'
            },
            operators: ['equal']
        }, {
            id: 'price',
            label: 'Price',
            type: 'double',
            validation: {
                min: 0,
                step: 0.01
            }
        }, {
            id: 'id',
            label: 'Identifier',
            type: 'string',
            placeholder: '____-____-____',
            operators: ['equal', 'not_equal'],
            validation: {
                format: /^.{4}-.{4}-.{4}$/
        }
}];

const searchDefault = {
	current: null,
	name: '',
	rerunRequired: false,
	isCached: false,
	includedDocuments: null,
	autoUpdate: false,
	keyword: false,
	text: '',
	filters: filters,
	filterRules: null,
	columns: null,
	sort: null
};

export default {
	search: (state = searchDefault, action) => {
		switch(action.type){
			case constants.SEARCH_SET:
				return Object.assign({}, state, {
					name: action.name, 
					rerunRequired: action.rerunRequired,
					isCached: action.isCached,
					autoUpdate: action.autoUpdate,
					keyword: action.keyword,
					text: action.text,
					filters: action.filters,
					filterRules: action.filterRules,
					columns: action.columns,
					sort: action.sort
				});
			case constants.SEARCH_SET_NAME:
				return Object.assign({}, state, { name: action.name });
			case constants.SEARCH_SET_SCOPE:
				return Object.assign({}, state, { scope: action.scope });
			case constants.SEARCH_IS_RERUN_REQUIRED:
				return Object.assign({}, state, { rerunRequired: action.rerunRequired});
			case constants.SEARCH_SET_TEXT:
				return Object.assign({}, state, { text: action.text });
			case constants.SEARCH_SET_IS_CACHED:
				return Object.assign({}, state, { isCached: action.isCached });
			case constants.SEARCH_SET_CACHE:
				return Object.assign({}, state, { searchCache: action.cache });
			case constants.SEARCH_SET_INCLUDED:
				return Object.assign({}, state, { includedDocuments: action.includedDocuments });
			case constants.SEARCH_SET_PRIVATE:
				return Object.assign({}, state, { private: true });
			case constants.SEARCH_SET_FILTERS:
				return Object.assign({}, state, { filters: action.filters });
			case constants.SEARCH_SET_FILTER_RULES:
				return Object.assign({}, state, { filterRules: action.filterRules });
			case constants.SEARCH_SET_COLUMNS:
				return Object.assign({}, state, { columns: action.columns });
			case constants.SEARCH_SET_SORT:
				return Object.assign({}, state, { sort: action.sort });
			default:
				return state;

		}
	}
}