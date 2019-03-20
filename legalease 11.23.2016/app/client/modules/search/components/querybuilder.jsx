import React, { Component } from 'react';
import { connect } from 'react-redux'

import actions from './../actions'

class QueryBuilderWrapperImpl extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { filters, rules, dispatch } = this.props;
        const element = this.refs.queryBuilder;
        let builder;
        if (!rules) {
            builder = $(element).queryBuilder({filters});
        } else {
            builder = $(element).queryBuilder({filters, rules});
        }
        builder.on(
            'afterAddGroup.queryBuilder ' + 
            'afterDeleteGroup.queryBuilder ' +
            'afterAddRule.queryBuilder ' +
            'afterDeleteRule.queryBuilder ' +
            'afterCreateRuleFilters.queryBuilder ' +
            'afterCreateRuleOperators.queryBuilder ' +
            'afterCreateRuleInput.queryBuilder ' +
            'afterUpdateRuleValue.queryBuilder ' +
            'afterUpdateRuleFilter.queryBuilder ' +
            'afterUpdateRuleOperator.queryBuilder ' +
            'afterApplyRuleFlags.queryBuilder ' +
            'afterUpdateGroupCondition ' +
            'afterReset.queryBuilder ' +
            'afterClear.queryBuilder ' +
            'afterMove.queryBuilder ' +
            'afterSetFilters.queryBuilder ' +
            'afterInvert.queryBuilder', function(){
                const newRules = $(element).queryBuilder('getMongo');
                console.log(newRules);
                dispatch(actions.setSearchFilterRules(newRules));
            });
    }
    shouldComponentUpdate(){
        return false;
    }
    componentWillUnmount() {
        $(this.refs.queryBuilder).queryBuilder('destroy');
    }
    render() {
        return (
            <div>
                <div id='query-builder' ref='queryBuilder'/>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.search.filters,
    rules: state.search.filterRules
});



const QueryBuilderWrapper = connect(mapStateToProps)(QueryBuilderWrapperImpl);

export default QueryBuilderWrapper;