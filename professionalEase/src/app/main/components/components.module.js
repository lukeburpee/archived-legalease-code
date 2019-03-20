(function ()
{
    'use strict';

    angular
        .module('app.components', [
            'app.components.cards',
            'app.components.charts.c3',
            'app.components.charts.chartist',
            'app.components.charts.chart-js',
            'app.components.charts.nvd3',
            'app.components.maps',
            'app.components.price-tables',
            'app.components.tables.simple-table',
            'app.components.tables.datatable',
            'app.components.widgets',
            'app.components.material-docs'
        ])
        .config(config);
})();