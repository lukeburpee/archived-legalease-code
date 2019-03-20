import React, { Component } from 'react';


function initializeQueryBuilder(element, newRules) {
    const rules = newRules ? newRules : defaultRules;
    $(element).queryBuilder({filters, rules});
}

class QueryBuilderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: {}
        };
    }
    componentDidMount() {
        const element = this.refs.queryBuilder;
        initializeQueryBuilder(element);

    }
    componentWillUnmount() {
        $(this.refs.queryBuilder).queryBuilder('destroy');
    }
    shouldComponentUpdate() {
        return false;
    }
    // get data from jQuery Query Builder and pass to the react component
    handleGetRulesClick() {
        const rules = $(this.refs.queryBuilder).queryBuilder('getRules');
        this.setState({rules: rules});
        this.forceUpdate();
    }
    // reinitialize jQuery Query Builder based on react state
    handleSetRulesClick() {
        const newRules = {...defaultRules};
        newRules.rules[0].value = newRules.rules[0].value + 10;
        $(this.refs.queryBuilder).queryBuilder('setRules', newRules);
        this.setState({rules: newRules});
    }
    render() {
        return (
            <div>
                <div id='query-builder' ref='queryBuilder'/>
            </div>
        );
    }
};

const defaultRules = {
    condition: 'AND',
    rules: [{
        id: 'price',
        operator: 'less',
        value: 10.25
    }, {
        condition: 'OR',
        rules: [{
            id: 'category',
            operator: 'equal',
            value: 2
        }, {
            id: 'category',
            operator: 'equal',
            value: 1
        }]
    }]
};

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

export default QueryBuilderWrapper;