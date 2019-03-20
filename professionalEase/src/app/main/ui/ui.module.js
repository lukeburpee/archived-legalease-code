(function ()
{
    'use strict';

    angular
        .module('app.ui', [
            'app.ui.forms',
            'app.ui.icons',
            'app.ui.material-colors',
            'app.ui.page-layouts.blank',
            'app.ui.page-layouts.carded.fullwidth',
            'app.ui.page-layouts.carded.fullwidth-ii',
            'app.ui.page-layouts.carded.left-sidenav',
            'app.ui.page-layouts.carded.left-sidenav-ii',
            'app.ui.page-layouts.carded.right-sidenav',
            'app.ui.page-layouts.carded.right-sidenav-ii',
            'app.ui.page-layouts.simple.fullwidth',
            'app.ui.page-layouts.simple.left-sidenav',
            'app.ui.page-layouts.simple.left-sidenav-ii',
            'app.ui.page-layouts.simple.right-sidenav',
            'app.ui.page-layouts.simple.right-sidenav-ii',
            'app.ui.page-layouts.simple.tabbed',
            'app.ui.theme-colors',
            'app.ui.typography'
        ])
        .config(config);
})();