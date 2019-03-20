(function ()
{
    'use strict';

    angular
        .module('app.pages.coming-soon', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_coming-soon', {
            url      : '/pages/coming-soon',
            views    : {
                'main@'                        : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_coming-soon': {
                    templateUrl: 'app/main/pages/coming-soon/coming-soon.html',
                    controller : 'ComingSoonController as vm'
                }
            },
            bodyClass: 'coming-soon'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/coming-soon');
    }

})();